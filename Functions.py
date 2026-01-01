#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Oct 16 21:42:15 2020

@author: philipwinchester
"""
import numpy as np
import pandas as pd
import datetime
from scipy.stats import poisson
import requests
import urllib.request
import string
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import math
import glob
import os
from git import Repo
import constants as const

def GetData(url,saveas):
    # url: url where data is
    # saveas: where we want to save data
    r = requests.get(url, allow_redirects=True)
    open(saveas, 'wb').write(r.content)

def LoadData(files):
    # files: list of csv file paths
    # CurrentDate: The current date
    count = 0
    for file in files:
        count += 1
        if count == 1: # We need to create the dataframe
            Match_Data_Original = pd.read_csv(file)
        else:
            add = pd.read_csv(file)
            Match_Data_Original = pd.concat([ Match_Data_Original, add], ignore_index=True)

    Match_Data = Match_Data_Original[['HomeTeam', 'AwayTeam', 'FTHG', 'FTAG', 'Date']]
    date_time_obj= datetime.datetime.now()
    date_time_obj.date()
    Match_Data["Date"] = Match_Data["Date"].apply(lambda x: datetime.datetime.strptime(x, "%d/%m/%Y"))
    Match_Data["t"] = (date_time_obj - Match_Data["Date"]).astype('timedelta64[D]')
    return Match_Data

def GetUpcomingFixtures(NumGWs=None, Fixes=None):
    FPL_FIXTURES_URL = "https://fantasy.premierleague.com/api/fixtures/"
    response = requests.get(FPL_FIXTURES_URL)

    if response.status_code != 200:
        raise Exception(f"Failed to fetch data: {response.status_code}")

    data = response.json()

    # Group fixtures by gameweek
    fixtures_by_gw = {}
    for f in data:
        gw = f["event"]
        if gw is None:  # skip fixtures with no gameweek assigned
            continue
        fixtures_by_gw.setdefault(gw, []).append(f)

    # Keep only GWs where *all* fixtures are not started/finished
    upcoming_fixtures = []
    for gw, fixtures in fixtures_by_gw.items():
        if all((not f["finished"] and f["started"] == False) for f in fixtures):
            upcoming_fixtures.extend(fixtures)

    # Limit by number of GWs if specified
    if NumGWs is not None:
        gws = sorted(set(f['event'] for f in upcoming_fixtures))
        gws = gws[:NumGWs]
        upcoming_fixtures = [f for f in upcoming_fixtures if f['event'] in gws]

    # Get team ID to name mapping
    teams_url = "https://fantasy.premierleague.com/api/bootstrap-static/"
    teams_data = requests.get(teams_url).json()
    team_id_to_name = {team['id']: team['name'] for team in teams_data['teams']}

    # Construct DataFrame
    fixtures_df = pd.DataFrame([{
        'GW': f['event'],
        'HomeTeam': team_id_to_name[f['team_h']],
        'AwayTeam': team_id_to_name[f['team_a']]
    } for f in upcoming_fixtures])

    # Standardize team names
    OldNames = ["Spurs", "Norwich City", "Manchester City", "Man Utd",
                "Leicester City", "West Ham United", "Leeds United", "Newcastle United",
                "Wolverhampton Wanderers", "Nottingham Forest", "Brentford", "Brighton & Hove Albion"]
    NewNames = ["Tottenham", "Norwich", "Man City", "Man United", "Leicester", "West Ham", "Leeds",
                "Newcastle", "Wolves", "Nott'm Forest", "Brentford", "Brighton"]

    fixtures_df = fixtures_df.replace(dict(zip(OldNames, NewNames)))

    # Apply manual fixture overrides
    if Fixes is not None:
        Before = Fixes['Before']
        After = Fixes['After']
        for b, a in zip(Before, After):
            condition = (fixtures_df['GW'] == b['GW']) & (fixtures_df['HomeTeam'] == b['HomeTeam']) & (fixtures_df['AwayTeam'] == b['AwayTeam'])
            fixtures_df.loc[condition, 'GW'] = a['GW']

    return fixtures_df.reset_index(drop=True)

def Playing(UpcomingFixtures,Team, GW):
    # Given some Team and GW (str), find out who they are playing,
    playing = ''
    UpcomingFixtures = UpcomingFixtures[UpcomingFixtures["GW"] == GW]
    # First look in home
    Home = UpcomingFixtures[UpcomingFixtures["HomeTeam"] == Team]
    for i, row in Home.iterrows():
        if len(playing) == 0: # first one we are adding
            playing += row['AwayTeam']
        else:
            playing += '/' + row['AwayTeam']
    # Look away
    Away = UpcomingFixtures[UpcomingFixtures["AwayTeam"] == Team]
    for i, row in Away.iterrows():
        if len(playing) == 0: # first one we are adding
            playing += row['HomeTeam']
        else:
            playing += '/' + row['HomeTeam']
    return playing

def NMod(Vector,n=1):
    # Takes vector and returns n*mod
    return n*np.sqrt(np.inner(Vector, Vector))

def tau(x,y,lamb,mu,rho):
    # Defining tau function
    if x == 0 and y == 0:
        return 1 - (lamb*mu*rho)
    elif x == 0 and y == 1:
        return 1 + (lamb*rho)
    elif x == 1 and y == 0:
        return 1 + (mu*rho)
    elif x == 1 and y == 1:
        return 1 - rho
    else:
        return 1

def phi(t,eps = 0.0025):
    # Define the weight function
    return np.exp(-eps*t)


def MatchLL(x,y,ai, aj, bi, bj, gamma, rho, t):
    # A function which calculates the log likelihood of some game
    lamb = ai*bj*gamma
    mu = aj*bi
    return phi(t)*(np.log(tau(x, y, lamb, mu, rho)) - lamb + x*np.log(lamb) - mu + y*np.log(mu))

def LL(Match_Data, Parameters, Teams):
  # Function which calculates the LL for all the games
  # This can also be made quicker if we avoid the for loop
  LL = 0

  # Fixing gamma and rho, as these are constant for all games
  gamma = Parameters[2*len(Teams)]
  rho = Parameters[2*len(Teams)+1]

  for k in range(0,len(Match_Data.index)):
    # Finding index for the home and away team
    IndexHome = Teams.index(Match_Data['HomeTeam'][k])
    IndexAway = Teams.index(Match_Data['AwayTeam'][k])

    # Finding relevant Parameters and other variables
    ai = Parameters[IndexHome]
    aj = Parameters[IndexAway]
    bi = Parameters[IndexHome + len(Teams)]
    bj = Parameters[IndexAway + len(Teams)]
    t = Match_Data['t'][k]
    x =  Match_Data['FTHG'][k]
    y =  Match_Data['FTAG'][k]

    #Adding the LL from game k to the total
    LL = LL + MatchLL(x,y,ai, aj, bi, bj, gamma, rho, t)

  return LL

# Functions for alpha derivative are below

def GradAlphaHomeZeroZero(ai, aj, bi, bj, gamma, rho,t):
  lamb = ai*bj*gamma
  mu = aj*bi
  return phi(t)*bj*(-gamma-mu*gamma*rho/(1-lamb*mu*rho))

def GradAlphaHomeZeroOne(ai, bj, gamma, rho,t):
  lamb = ai*bj*gamma
  return phi(t)*bj*(-gamma+gamma*rho/(1+lamb*rho))

def GradAlphaHomeNotZero(ai, bj, gamma, x,t):
  return phi(t)*(x/ai-bj*gamma)

def GradAlphaHome(ai, aj, bi, bj, gamma, rho,t,x,y):
  # Funtion which determines the addition to the gradient of the home attacking strenth from some game
  if x == 0 and y == 0:
    return GradAlphaHomeZeroZero(ai, aj, bi, bj, gamma, rho,t)
  elif x == 0 and y == 1:
    return GradAlphaHomeZeroOne(ai, bj, gamma, rho,t)
  else:
    return GradAlphaHomeNotZero(ai, bj, gamma, x,t)

def GradAlphaAwayZeroZero(ai, aj, bi, bj, gamma, rho,t):
  lamb = ai*bj*gamma
  mu = aj*bi
  return phi(t)*bi*(-1-lamb*rho/(1-lamb*mu*rho))

def GradAlphaAwayOneZero(aj, bi, rho,t):
  mu = aj*bi
  return phi(t)*bi*(-1+rho/(1+mu*rho))


def GradAlphaAwayNotZero(aj, bi, y,t):
  return phi(t)*(y/aj-bi)

def GradAlphaAway(ai, aj, bi, bj, gamma, rho,t,x,y):
  # Funtion which determines the addition to the gradient of the away attacking strenth from some game
  if x == 0 and y == 0:
    return GradAlphaAwayZeroZero(ai, aj, bi, bj, gamma, rho,t)
  elif x == 1 and y == 0:
    return GradAlphaAwayOneZero(aj, bi, rho,t)
  else:
    return GradAlphaAwayNotZero(aj, bi, y,t)

# Functions for beta derivative are below

def GradBetaHomeZeroZero(ai, aj, bi, bj, gamma, rho,t):
  lamb = ai*bj*gamma
  mu = aj*bi
  return phi(t)*aj*(-1-lamb*rho/(1-lamb*mu*rho))

def GradBetaHomeOneZero(aj, bi, rho,t):
  mu = aj*bi
  return phi(t)*aj*(-1+rho/(1+mu*rho))

def GradBetaHomeNotZero(aj, bi, y,t):
  return phi(t)*(y/bi-aj)

def GradBetaHome(ai, aj, bi, bj, gamma, rho,t,x,y):
  # Funtion which determines the addition to the gradient of the home defense strenth from some game
  if x == 0 and y == 0:
    return GradBetaHomeZeroZero(ai, aj, bi, bj, gamma, rho,t)
  elif x == 1 and y == 0:
    return GradBetaHomeOneZero(aj, bi, rho,t)
  else:
    return GradBetaHomeNotZero(aj, bi, y,t)

def GradBetaAwayZeroZero(ai, aj, bi, bj, gamma, rho,t):
  lamb = ai*bj*gamma
  mu = aj*bi
  return phi(t)*ai*(-gamma-mu*gamma*rho/(1-lamb*mu*rho))


def GradBetaAwayZeroOne(ai, bj, gamma, rho,t):
  lamb = ai*bj*gamma
  return phi(t)*ai*(-gamma+rho*gamma/(1+lamb*rho))

def GradBetaAwayNotZero(ai, bj, gamma,x,t):
  return phi(t)*(x/bj-ai*gamma)

def GradBetaAway(ai, aj, bi, bj, gamma, rho,t,x,y):
  # Funtion which determines the addition to the gradient of the away defense strenth from some game
  if x == 0 and y == 0:
    return GradBetaAwayZeroZero(ai, aj, bi, bj, gamma, rho,t)
  elif x == 0 and y == 1:
    return GradBetaAwayZeroOne(ai, bj,gamma, rho,t)
  else:
    return GradBetaAwayNotZero(ai, bj, gamma, x,t)

# Functions for gamma derivative are below

def GradGammaZeroZero(ai, aj, bi, bj, gamma, rho,t):
  lamd = ai*bj*gamma
  mu = aj*bi
  return phi(t)*ai*bj*(-1-mu*rho/(1-lamd*mu*rho))

def GradGammaZeroOne(ai, bj, gamma, rho,t):
  lamd = ai*bj*gamma
  return phi(t)*ai*bj*(-1+rho/(1+lamd*rho))

def GradGammaNotZero(ai, bj, gamma, x,t):
  return phi(t)*(-ai*bj+x/gamma)

def GradGamma(ai, aj, bi, bj, gamma, rho,t,x,y):
  # Funtion which determines the addition to the gradient of the gamma param from some game
  if x == 0 and y == 0:
    return GradGammaZeroZero(ai, aj, bi, bj, gamma, rho,t)
  elif x == 0 and y == 1:
    return GradGammaZeroOne(ai, bj, gamma, rho,t)
  else:
    return GradGammaNotZero(ai, bj, gamma, x,t)

# Functions for rho derivative are below

def GradRhoZeroZero(ai, aj, bi, bj, gamma, rho,t):
  lamd = ai*bj*gamma
  mu = aj*bi
  return -phi(t)*lamd*mu/(1-lamd*mu*rho)

def GradRhoZeroOne(ai,bj, gamma, rho,t):
  lamd = ai*bj*gamma
  return phi(t)*lamd/(1+lamd*rho)

def GradRhoOneZero(aj,bi, rho,t):
  mu = aj*bi
  return phi(t)*mu/(1+mu*rho)

def GradRhoOneOne (rho,t):
  return -phi(t)/(1-rho)

def GradRho(ai, aj, bi, bj, gamma, rho,t,x,y):
  # Funtion which determines the addition to the gradient of the gamma param from some game
  if x == 0 and y == 0:
    return GradRhoZeroZero(ai, aj, bi, bj, gamma, rho,t)
  elif x == 0 and y == 1:
    return GradRhoZeroOne(ai,bj, gamma, rho,t)
  elif x == 1 and y == 0:
    return GradRhoOneZero(aj,bi, rho,t)
  elif x == 1 and y == 1:
    return GradRhoOneOne(rho,t)
  else:
    return 0

def GradAdder(Match_Data, Parameters, GradientVector,i, gamma, rho, Teams):
  # Function which takes the df of mathches, the current Parameters and calcualtes the addition to gradient vector for the i'th match
  # Returns the resulting gradient vector

  # Finding index for the home and away team
  IndexHome = Teams.index(Match_Data['HomeTeam'][i])
  IndexAway = Teams.index(Match_Data['AwayTeam'][i])

  # Finding relevant Parameters and other variables
  ai = Parameters[IndexHome]
  aj = Parameters[IndexAway]
  bi = Parameters[IndexHome + len(Teams)]
  bj = Parameters[IndexAway + len(Teams)]
  t = Match_Data['t'][i]
  x =  Match_Data['FTHG'][i]
  y =  Match_Data['FTAG'][i]

  # Adding onto the Gradient vector
  GradientVector[IndexHome] = GradientVector[IndexHome] + GradAlphaHome(ai, aj, bi, bj, gamma, rho,t,x,y)
  GradientVector[IndexAway] = GradientVector[IndexAway] + GradAlphaAway(ai, aj, bi, bj, gamma, rho,t,x,y)
  GradientVector[IndexHome + len(Teams)] = GradientVector[IndexHome + len(Teams)] + GradBetaHome(ai, aj, bi, bj, gamma, rho,t,x,y)
  GradientVector[IndexAway + len(Teams)] = GradientVector[IndexAway + len(Teams)] + GradBetaAway(ai, aj, bi, bj, gamma, rho,t,x,y)
  GradientVector[2*len(Teams)] = GradientVector[2*len(Teams)] + GradGamma(ai, aj, bi, bj, gamma, rho,t,x,y)
  GradientVector[2*len(Teams) + 1] = GradientVector[2*len(Teams) + 1] + GradRho(ai, aj, bi, bj, gamma, rho,t,x,y)

  return GradientVector

def GradientVectorFinder(Match_Data, Parameters, Teams):
  # Function whcih takes the match data, current Parameters and returns the Gradient Vector

  # Building the gradient vector
  GradientVector = np.zeros(len(Teams)*2+2)

  # Setting gamma and rho
  gamma = Parameters[2*len(Teams)]
  rho = Parameters[2*len(Teams)+1]

  # Running through all the matches, every i makes an addition to the gradient vector
  for i in range(0,len(Match_Data.index)):
    GradientVector = GradAdder(Match_Data, Parameters, GradientVector,i, gamma, rho, Teams)

  return GradientVector

def NormalisingTheGradientVector(GradientVector,n, Teams):
  # Function which takes the GradientVector and normalises it such that the average of the alpha gradients is 0.

  AlphaGradValues = GradientVector[0:len(Teams)]
  AverageAlphaGradValues = np.mean(AlphaGradValues) # This is the average of paramaters in notes. But in our corrections, we want to add the gradint. Hence, there should be a net 0 efferct on the everage of the alphas from the gradint, as they already add up to one.
  Normaliser = np.concatenate((AverageAlphaGradValues*np.ones(len(Teams)), np.zeros(len(Teams)+2)))

  return (GradientVector - Normaliser)/NMod(GradientVector - Normaliser,n)

def NormalisingTheGradientVector2(GradientVector, Teams):
  # Function which takes the GradientVector and normalises it such that the average of the alpha gradients is 0.

  AlphaGradValues = GradientVector[0:len(Teams)]
  AverageAlphaGradValues = np.mean(AlphaGradValues) # This is the average of paramaters in notes. But in our corrections, we want to add the gradint. Hence, there should be a net 0 efferct on the everage of the alphas from the gradint, as they already add up to one.
  Normaliser = np.concatenate((AverageAlphaGradValues*np.ones(len(Teams)), np.zeros(len(Teams)+2)))

  GradientVectorNorm = GradientVector - Normaliser
  m = max(abs(GradientVectorNorm))*100

  return GradientVectorNorm/m

def Optimise(Match_Data, Teams,Max = 200, m = 10):
  # Takes some match data and returns returns the parameters which maximise the log liklihood function.
  # This is done with a gradient ascent alogorithm
  # The default maximum step size is is 1/200, can be changed in the Max variable
  # The default is that we start with a step size of 1/10, which then goes to 1/20 etc... this can be changed in m

  # Setting all Parameters equal to 1 at first
  Parameters = np.ones(2*len(Teams)+2)

  # Setting gamma equal to 1.3 and rho equal to -0.05
  Parameters[2*len(Teams)] = 1.3
  Parameters[2*len(Teams)+1] = -0.05

  Mult = 1
  Step = m

  count = 0
  # Doing itertaitons until we have added just one of the smallets gradient vecor we want to add
  while Step <= Max:

    count = count + 1
    #print("count is " + str(count))

    # Finding gradient
    GradientVector = GradientVectorFinder(Match_Data, Parameters, Teams)

    # Normalising (Avergage of alhpas is 1), and adjusting the length
    GradientVectorNormalised = NormalisingTheGradientVector(GradientVector,Step, Teams)
    #print("step is " + str(Step))

    PresentPoint = Parameters
    StepToPoint = Parameters + GradientVectorNormalised
    LLLoop = 0
    LLOld = LL(Match_Data, PresentPoint, Teams)
    LLNew = LL(Match_Data, StepToPoint, Teams)
    # Adding GradientVectorNormalised until we have maxemised the LL
    while LLNew > LLOld:
      PresentPoint = StepToPoint
      StepToPoint = PresentPoint + GradientVectorNormalised
      LLLoop = LLLoop + 1
      LLOld = LLNew
      LLNew = LL(Match_Data, StepToPoint, Teams)

    #print("LLLoop is " + str(LLLoop))

    # If there has only been one itteration (or zero), we increase the step size
    if LLLoop < 2:
      Mult = Mult + 1
      Step = Mult*m

    Parameters = PresentPoint

  Alpha = Parameters[0:len(Teams)]
  Beta = Parameters[len(Teams):(len(Teams)*2)]
  Gamma = Parameters[len(Teams)*2]
  Rho = Parameters[len(Teams)*2+1]
  d = {'Team': Teams, 'Alpha': Alpha, 'Beta': Beta, 'Gamma': Gamma*np.ones(len(Teams)), 'Rho': Rho*np.ones(len(Teams))}
  Results = pd.DataFrame(data=d)

  return Results

def Optimise2(Match_Data, Teams, Parameters = None):
  # Takes some match data and returns returns the parameters which maximise the log liklihood function.
  # This is done with a gradient ascent alogorithm
  # The default maximum step size is is 1/200, can be changed in the Max variable
  # The default is that we start with a step size of 1/10, which then goes to 1/20 etc... this can be changed in m
  got = 0
  if Parameters == None:
      got = 1
      # Setting all Parameters equal to 1 at first
      Parameters = np.ones(2*len(Teams)+2)

      # Setting gamma equal to 1.3 and rho equal to -0.05
      Parameters[2*len(Teams)] = 1.3
      Parameters[2*len(Teams)+1] = -0.05

  count = 0
  cont = 1
  start = 1
  # Doing itertaitons until we have added just one of the smallets gradient vecor we want to add
  while cont == 1:

    count = count + 1
    #print("count is " + str(count))

    # Finding gradient
    GradientVector = GradientVectorFinder(Match_Data, Parameters, Teams)

    # Normalising (Avergage of alhpas is 1), and adjusting the length
    GradientVectorNormalised = NormalisingTheGradientVector2(GradientVector,Teams)
    #print("step is " + str(Step))
    if start == 1 and got == 1:
        GradientVectorNormalised = GradientVectorNormalised*10

    PresentPoint = Parameters
    StepToPoint = Parameters + GradientVectorNormalised
    LLLoop = 0
    LLOld = LL(Match_Data, PresentPoint, Teams)
    LLNew = LL(Match_Data, StepToPoint, Teams)
    # Adding GradientVectorNormalised until we have maxemised the LL
    # while LLNew > LLOld:
    if LLNew > LLOld:
      PresentPoint = StepToPoint
      StepToPoint = PresentPoint + GradientVectorNormalised
      LLLoop = LLLoop + 1
      #LLOld = LLNew
      #LLNew = LL(Match_Data, StepToPoint, Teams)

    # If there has only been one itteration (or zero), we increase the step size
    if LLLoop == 0:
        if start == 0:
            cont = 0
        start = 0

    Parameters = PresentPoint

  Alpha = Parameters[0:len(Teams)]
  Beta = Parameters[len(Teams):(len(Teams)*2)]
  Gamma = Parameters[len(Teams)*2]
  Rho = Parameters[len(Teams)*2+1]
  d = {'Team': Teams, 'Alpha': Alpha, 'Beta': Beta, 'Gamma': Gamma*np.ones(len(Teams)), 'Rho': Rho*np.ones(len(Teams))}
  Results = pd.DataFrame(data=d)

  return Results

def ProbMatrix(HomeTeam, AwayTeam, Parameters, gamma, rho, Teams,Max = 10):
      # Function which takes two teams and returns a scoreline probability matrix.
      # Parameters is the set of parameters we have after running the Optimise function
      # Max is the maximum number of goals we assume any team can score in a game.

      HomeIndex = Teams.index(HomeTeam)
      AwayIndex = Teams.index(AwayTeam)

      # Finding relevant Parameters
      ai = Parameters['Alpha'][HomeIndex]
      aj = Parameters['Alpha'][AwayIndex]
      bi = Parameters['Beta'][HomeIndex]
      bj = Parameters['Beta'][AwayIndex]

      lamb = ai*bj*gamma
      mu = aj*bi

      # Making the scoreline probability matrix, without the tau function at first
      Result = np.outer(poisson.pmf(np.arange(0,Max +1), lamb), poisson.pmf(np.arange(0,Max +1), mu))

      # Adding the tau function
      Result[0,0] = Result[0,0]*(1-lamb*mu*rho)
      Result[1,0] = Result[1,0]*(1+mu*rho)
      Result[0,1] = Result[0,1]*(1+lamb*rho)
      Result[1,1] = Result[1,1]*(1-rho)

      # Making sure probabilites add to one
      Result = Result/np.sum(Result)

      return(Result)

def ExpectedGoalsAndCSOutcome(ProbMatrix):
    D = np.trace(ProbMatrix)
    AW = np.sum(np.triu(ProbMatrix, k = 1))
    HW = np.sum(np.tril(ProbMatrix, k = -1))

    # Calculate expected goals HT
    probs = np.sum(ProbMatrix,axis=1)
    HTG = np.inner(probs,np.arange(len(probs)))
    ATCS = probs[0]
    ATCons = -1*( probs[2] + probs[3] ) - 2*( np.sum(probs[4:]) ) # Approximate as -2 for 4 or more goals conceded
    # Calculate expected goals AT
    probs = np.sum(ProbMatrix,axis=0)
    ATG = np.inner(probs,np.arange(len(probs)))
    HTCS = probs[0]
    HTCons = -1*( probs[2] + probs[3] ) - 2*( np.sum(probs[4:]) )
    return [HTG, HTCS ,ATG, ATCS, HW, AW, D, HTCons, ATCons]

def GKData(DefensiveData, Teams):
    for f in glob.glob("Data/GK*"):
        os.remove(f)

    for matches in range(1,len(DefensiveData.columns)-1):
        Team1_list = []
        Team2_list = []
        Team1_score_list = []
        Team2_score_list = []
        Total_score_list = []

        count = 0
        for Team1 in Teams:
            count += 1
            for Team2 in Teams[count:]:
                Team1_scores = np.array(DefensiveData[DefensiveData["Teams"] == Team1].iloc[0].tolist()[1:matches+1])
                Team2_scores = np.array(DefensiveData[DefensiveData["Teams"] == Team2].iloc[0].tolist()[1:matches+1])

                Team1_list.append(Team1)
                Team2_list.append(Team2)
                Team1_score_list.append( round(np.sum(Team1_scores),2) )
                Team2_score_list.append( round(np.sum(Team2_scores),2) )
                Total_score_list.append( round(np.sum(np.maximum(Team1_scores, Team2_scores)),2) )

        data = {
                "Team1": Team1_list,
                "Team2": Team2_list,
                "Team1 Score": Team1_score_list,
                "Team2 Score": Team2_score_list,
                "Total Score": Total_score_list,
                }
        df = pd.DataFrame(data)

        df.to_csv('Data/GK_' + str(matches) + '.csv', index = False)

def AddtoUpcomingFixtures(UpcomingFixtures,Parameters,gamma, rho, Teams):
    UpcomingFixtures['HTG'] = ""
    UpcomingFixtures['ATG'] = ""
    UpcomingFixtures['HTCS'] = ""
    UpcomingFixtures['ATCS'] = ""
    UpcomingFixtures['HMP'] = "" 
    UpcomingFixtures['AMP'] = ""
    UpcomingFixtures['HTCons'] = ""
    UpcomingFixtures['ATCons'] = ""
    LS = LeagueStanding()
    for index, row in UpcomingFixtures.iterrows():
        PMatrix = ProbMatrix(row['HomeTeam'], row['AwayTeam'], Parameters, gamma, rho, Teams)
        [HTG, HTCS ,ATG, ATCS, HW, AW, D, HTCons, ATCons] = ExpectedGoalsAndCSOutcome(PMatrix)
        UpcomingFixtures['HTG'][index] = HTG
        UpcomingFixtures['ATG'][index] = ATG
        UpcomingFixtures['HTCS'][index] = HTCS*const.CleanSheetMultiplier
        UpcomingFixtures['ATCS'][index] = ATCS*const.CleanSheetMultiplier
        UpcomingFixtures['HTCons'][index] = HTCons
        UpcomingFixtures['ATCons'][index] = ATCons

        if LS[row['HomeTeam']] - LS[row['AwayTeam']] >= 5:
            UpcomingFixtures['HMP'][index] = HTCS*const.ManagerCS + HTG*const.ManagerGoal + D*( const.ManagerDraw + const.ManagerDrawBonus ) + HW*(const.ManagerWin + const.ManagerWinBonus)
            UpcomingFixtures['AMP'][index] = ATCS*const.ManagerCS + ATG*const.ManagerGoal + D*const.ManagerDraw + AW*const.ManagerWin
        elif LS[row['HomeTeam']] - LS[row['AwayTeam']] <= -5:
            UpcomingFixtures['HMP'][index] = HTCS*const.ManagerCS + HTG*const.ManagerGoal + D*const.ManagerDraw + HW*const.ManagerWin
            UpcomingFixtures['AMP'][index] = ATCS*const.ManagerCS + ATG*const.ManagerGoal + D*( const.ManagerDraw + const.ManagerDrawBonus ) + AW*(const.ManagerWin + const.ManagerWinBonus)
        else:
            UpcomingFixtures['HMP'][index] = HTCS*const.ManagerCS + HTG*const.ManagerGoal + D*const.ManagerDraw + HW*const.ManagerWin
            UpcomingFixtures['AMP'][index] = ATCS*const.ManagerCS + ATG*const.ManagerGoal + D*const.ManagerDraw + AW*const.ManagerWin

    return  UpcomingFixtures

def GetTables(UpcomingFixtures,Teams):
    # Setting up the dfs
    GWS = list(set(UpcomingFixtures['GW']))
    GWS.sort(key=float)
    AttackingData = {'Teams': Teams}
    AttackingData = pd.DataFrame(data=AttackingData)
    for GW in GWS:
        AttackingData[GW] = 0.0
    DefensiveData = AttackingData.copy()
    ManagerData = AttackingData.copy()
    DoubleGWData = AttackingData.copy()
    ConcededData = AttackingData.copy()
    # Adding the data we want
    for GW in GWS:
        GWData = UpcomingFixtures[UpcomingFixtures['GW']==GW]
        GWData = GWData.reset_index(drop = True)
        for TeamIndex,Team in enumerate(Teams):
            G = 0
            C = 0
            M = 0
            GP = 0
            Cons = 0
            # Search HomeTeam First
            HTData = GWData[GWData['HomeTeam'] == Team]
            Cons += sum(HTData['HTCons'])
            G += sum(HTData['HTG'])
            C +=sum(HTData['HTCS'])
            M +=sum(HTData['HMP'])
            GP += len(HTData)
            # Now do AwayTeam
            ATData = GWData[GWData['AwayTeam'] == Team]
            Cons += sum(ATData['ATCons'])
            G += sum(ATData['ATG'])
            C +=sum(ATData['ATCS'])
            M +=sum(ATData['AMP'])
            GP += len(ATData)
            # Now add it data
            AttackingData[GW][TeamIndex] = round(G,2)
            DefensiveData[GW][TeamIndex] = round(C,2)
            ManagerData[GW][TeamIndex] = round(M,2)
            DoubleGWData[GW][TeamIndex] = int(GP)
            ConcededData[GW][TeamIndex] = round(Cons,2)

    return AttackingData,DefensiveData,ManagerData, DoubleGWData, ConcededData

def AdjustManagerTable( ManagerData, Save = True):
    # Start at the right GW
    columns_to_remove = [str(i) for i in range(1, const.ManagerGWStart)]
    ManagerData = ManagerData.drop(columns=columns_to_remove, errors='ignore')

    # Define the new DataFrame
    result = []

    # Iterate over rows to create the desired structure
    for index, row in ManagerData.iterrows():
        for start_gw in range(const.ManagerGWStart, const.TotalGWs+1):  # Adjust the range as needed
            # Get the scores for the consecutive gameweeks
            scores = [row.get(str(start_gw + i), None) for i in range(const.ManagerGWs)]

            # Calculate total score (sum of the selected scores)
            total_score = round(sum([score for score in scores if score is not None]),2)

            # Prepare the new row
            new_row = {
                "Team": row["Teams"],
                "From GW": start_gw,
                **{f"GW {i+1} Score": scores[i] for i in range(const.ManagerGWs)},
                "Total Score": total_score
            }
            result.append(new_row)

    # Create the final DataFrame
    new_df = pd.DataFrame(result)

    if Save:
        new_df.to_csv("Data/ManagerData.csv", index=False)
    else:
        return new_df
    
def MakeDataJS(Teams, Res,DefensiveData, AttackingData):
    DefensfiveDataString = ''
    AttackingDataString = ''
    DCDataString = ''

    for Team in Teams:
        Team_Underscore = Team.replace(" ", "_")

        Dinst = DefensiveData[DefensiveData["Teams"] == Team].values.flatten().tolist()
        Dinst = str(Dinst[1:])

        Ainst = AttackingData[AttackingData["Teams"] == Team].values.flatten().tolist()
        Ainst = str(Ainst[1:])

        DCinst = Res[DefensiveData["Teams"] == Team].values.flatten().tolist()
        DCinst = [round(num, 2) if isinstance(num, (int, float)) else num for num in DCinst]
        DCinst = str(DCinst[1:-2])

        Dinst = f'"{Team}": {{ scores: {Dinst}, logo: "logos/{Team_Underscore}2.png", page: "{Team_Underscore}.html" }},\n'
        DefensfiveDataString += Dinst

        Ainst = f'"{Team}": {{ scores: {Ainst}, logo: "logos/{Team_Underscore}2.png", page: "{Team_Underscore}.html" }},\n'
        AttackingDataString += Ainst

        DCinst = f'"{Team}": {{ scores: {DCinst}, logo: "logos/{Team_Underscore}2.png", page: "{Team_Underscore}.html" }},\n'
        DCDataString += DCinst

    return DefensfiveDataString, AttackingDataString, DCDataString

def Makeplot(Data,UpcomingFixtures,Team,Attack,size = 0.035, shift = 0.02):
   TeamCols =['#EF0107',
            '#670E36',
            '#DA291C',
            '#0057B8',
            '#6C1D45',
            '#034694',
            '#1B458F',
            '#003399',
            '#1D428A',
            '#003090',
            '#C8102E',
            '#1C2C5B',
            '#DA291C',
            '#241F20',
            '#00A650',
            '#D71920',
            '#132257',
            '#ED2127',
            '#7A263A',
            '#FDB913',
            '#DA291C',
            '#3a64a3',
            '#000000',
            '#e53233',
            '#E2231A']
   Teams = ['Arsenal',
            'Aston Villa',
            'Brentford',
            'Brighton',
            'Burnley',
            'Chelsea',
            'Crystal Palace',
            'Everton',
            'Leeds',
            'Leicester',
            'Liverpool',
            'Man City',
            'Man United',
            'Newcastle',
            'Norwich',
            'Southampton',
            'Tottenham',
            'Watford',
            'West Ham',
            'Wolves',
            'Bournemouth',
            'Ipswich',
            'Fulham',
            "Nott'm Forest",
            "Sunderland"]
   Teamid = Teams.index(Team)
   col = TeamCols[Teamid]
   # Inputs
   Background = 'white'
   text_color = '#686868'
   #text_color = 'w'


   PlotData = Data[Data['Teams'] == Team].values.tolist()
   PlotData = PlotData[0]
   PlotData = PlotData[1:len(PlotData)]
   GWS = list(set(UpcomingFixtures['GW']))
   GWS = [int(i) for i in GWS]
   GWS = sorted(GWS)
    # Draw Plot
   fig, ax = plt.subplots(figsize=(16,10))
    #plt.figure(figsize=(16,10), dpi= 100)
   ax.plot(GWS, PlotData, color=col,zorder = 2)

    # Decoration
   yint = range(min(math.floor(min(PlotData)),1), max(math.ceil(max(PlotData))+1,5))
   plt.yticks(yint) # integer yticks
   plt.ylim(0, max(4,max(PlotData)))
   ax.patch.set_facecolor(Background)
   fig.set_facecolor(Background)
    #plt.ylim(50, 750)
    #xtick_location = df.index.tolist()[::12]
    #xtick_labels = [x[-4:] for x in df.date.tolist()[::12]]
   step = math.ceil( len(GWS) / 10 )
   xt = list(range(min(GWS), max(GWS) + 1, step))
   plt.xticks(xt, rotation=0, fontsize=24, horizontalalignment='center', color = text_color,fontname = "Radikal")
   plt.yticks(fontsize=24, color = text_color,fontname = "Radikal")
    #plt.title("Air Passengers Traffic (1949 - 1969)", fontsize=22)
   #plt.grid(axis='both', alpha=.3)
   ax.grid(ls='dotted', lw = '0.5', color = text_color,zorder = 1)
   ax.set_xlabel('Gameweek',color=text_color,fontsize=26,fontname = "Radikal")
   if Attack:
       ax.set_ylabel('Expected Goals',color=text_color,fontsize=26,fontname = "Radikal")
   else:
       ax.set_ylabel('Defensive Score',color=text_color,fontsize=26,fontname = "Radikal")

    # Remove borders
   ax.spines["top"].set_visible(False)
   ax.spines["right"].set_visible(False)
   ax.spines["bottom"].set_color(text_color)
   ax.spines["left"].set_color(text_color)

    # Add images
   inv = fig.transFigure.inverted()
   for i, GW in enumerate(GWS):
       OppTeams = Playing(UpcomingFixtures,Team,GW)
       OppTeams = OppTeams.split('/')
       if OppTeams[0] == '': # Not plating in this gamweek
           pass
       elif len(OppTeams) == 1: # only playing one team
           OppTeam = OppTeams[0];
           OppTeam = OppTeam.replace(" ", "_")
           pos =  ax.transData.transform((GW, PlotData[i]))
           pos = inv.transform(pos)
           ax2 = fig.add_axes([(pos[0]-size/2), (pos[1]-size/2), size, size])
           ax2.axis("off")
           img = mpimg.imread('logos/' + OppTeam + '2.png')
           ax2.imshow(img)
       else: # playing two teams or three
           for j,OppTeam in enumerate(OppTeams):
               OppTeam = OppTeam.replace(" ", "_")
               pos =  ax.transData.transform((GW, PlotData[i]))
               pos = inv.transform(pos)
               if j == 0:
                   ax2 = fig.add_axes([(pos[0]-size/2-shift), (pos[1]-size/2), size, size])
               elif j ==1:
                   ax2 = fig.add_axes([(pos[0]-size/2+shift), (pos[1]-size/2), size, size])
               elif j ==2:
                   ax2 = fig.add_axes([(pos[0]-size/2), (pos[1]-size/2+shift), size, size])
               ax2.axis("off")
               img = mpimg.imread('logos/' + OppTeam + '2.png')
               ax2.imshow(img)

    # save fig
   Team = Team.replace(" ", "_")
   if Attack:
        plt.savefig('Figures/'+ Team + 'Attack.png',dpi = 300, bbox_inches='tight', facecolor=Background)
   else:
        plt.savefig('Figures/'+ Team + 'Defens.png',dpi = 300, bbox_inches='tight', facecolor=Background)

   plt.close('all')

def MakeTeamPage(Team,base):
    Team = Team.replace(" ", "_")
    file = open(base)
    page = file.read()
    file.close()
    page = page.replace("TeamStrbefore", Team)
    page = page.replace("TeamStr", Team)
    Html_file= open(Team + ".html","w")
    Html_file.write(page)
    Html_file.close()

def LeagueStanding():
  # Define the API endpoint and headers
  url = const.API_url
  headers = {
      "X-Auth-Token": const.X_Auth_Token  # Replace with your actual API token
  }

  # Fetch the data
  response = requests.get(url, headers=headers)

  data = response.json()
  standings = data.get('standings', [])[0].get('table', [])

  TeamPositions = dict()
  for inst in standings:
      team = inst[ 'team' ][ 'shortName' ]
      for new_team in const.team_name_map:
          if team in const.team_name_map[new_team]:
              team = new_team
              break

      TeamPositions[ team ] = inst[ 'position' ]
  
  return( TeamPositions )

def git_push(pgr,cm):
#    try:
        repo = Repo(pgr)
        repo.git.add(update=True)
        repo.index.commit(cm)
        origin = repo.remote(name='origin')
        origin.push()
#    except:
#        print('Some error occured while pushing the code')
