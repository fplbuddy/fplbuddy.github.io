#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Sep  3 14:23:51 2021

@author: philipwinchester
"""

import Functions as funcs
import os
import datetime
os.chdir("/Users/philipwinchester/Sites/fplbuddy.github.io")

files = [ 'Data/23_24.csv', 'Data/24_25.csv']
urls = [ 'https://www.football-data.co.uk/mmz4281/2324/E0.csv', 'https://www.football-data.co.uk/mmz4281/2425/E0.csv' ]
for url, file in zip(urls, files):
    funcs.GetData(url, file)

Match_Data = funcs.LoadData(files)
Match_Data= Match_Data.replace(['Luton', 'Burnley', 'Sheffield United'],['Ipswich', 'Leicester', 'Southampton'])
Teams = sorted(list(set(Match_Data['HomeTeam'])))
Res = funcs.Optimise2(Match_Data, Teams)

Fixes = dict()
Fixes["Before"] = [ {"GW": '8', "HomeTeam": "Leicester", "AwayTeam": "Nott'm Forest" } ]
Fixes["After"] = [ {"GW": '9', "HomeTeam": "Leicester", "AwayTeam": "Nott'm Forest"  } ]
Fixes["Before"] = [ {"GW": '12', "HomeTeam": "Southampton", "AwayTeam": "Brighton" } ]
Fixes["After"] = [ {"GW": '13', "HomeTeam": "Southampton", "AwayTeam": "Brighton"  } ]

UpcomingFixtures = funcs.GetUpcomingFixtures(5, Fixes)
UpcomingFixtures = funcs.AddtoUpcomingFixtures(UpcomingFixtures, Res,  Res['Gamma'][0],  Res['Rho'][0], Teams)
AttackingData,DefensiveData = funcs.GetTables(UpcomingFixtures,Teams)

AttackingData.to_csv('Data/AttackingData.csv', index = False)
DefensiveData.to_csv('Data/DefensiveData.csv', index = False)

UpcomingFixtures = funcs.GetUpcomingFixtures(Fixes = Fixes)
UpcomingFixtures = funcs.AddtoUpcomingFixtures(UpcomingFixtures, Res,  Res['Gamma'][0],  Res['Rho'][0], Teams)
AttackingData,DefensiveData = funcs.GetTables(UpcomingFixtures,Teams)

# Put data in the .js file
file = open("tabledata.txt")
Data = file.read()
file.close

DefensfiveDataString = ''
AttackingDataString = ''

for Team in Teams:
    Team_Underscore = Team.replace(" ", "_")
    Dinst = DefensiveData[DefensiveData["Teams"] == Team].values.flatten().tolist()
    Dinst = str(Dinst[1:-1])

    Ainst = AttackingData[AttackingData["Teams"] == Team].values.flatten().tolist()
    Ainst = str(Ainst[1:-1])

    Dinst = f'"{Team}": {{ scores: {Dinst}, logo: "logos/{Team_Underscore}2.png", page: "{Team_Underscore}.html" }},\n'
    DefensfiveDataString += Dinst

    Ainst = f'"{Team}": {{ scores: {Ainst}, logo: "logos/{Team_Underscore}2.png", page: "{Team_Underscore}.html" }},\n'
    AttackingDataString += Ainst

Data = Data.replace( "AttackingData", AttackingDataString )
Data = Data.replace( "DefensiveData", DefensfiveDataString )

GWS = list(set(UpcomingFixtures['GW']))
GWS.sort(key=float)
Data = Data.replace( "StartGWNumber", str(GWS[0]))

Html_file = open("tabledata.js", "w")
Html_file.write(Data)
Html_file.close()

file = open("htmlbase.txt")
thestring = file.read()
file.close()

now = datetime.datetime.today().strftime('%d-%b-%Y')
if now[0] == '0':
    day = now[1]
else:
    day = now[0:2]
thestring = thestring.replace('Time',day+ ' ' + now[3:6] + ' ' + now[7:13])
MaxSliderValue = min( 10, len(GWS) )
StartSliderValue = min( 5, MaxSliderValue )
thestring = thestring.replace('MaxSliderValue', str(MaxSliderValue))
thestring = thestring.replace('StartSliderValue', str(StartSliderValue))

Html_file = open("index.html", "w")
Html_file.write(thestring)
Html_file.close()

funcs.GKData(DefensiveData, Teams)
for Team in Teams:
    funcs.Makeplot(DefensiveData,UpcomingFixtures,Team,False)
    funcs.Makeplot(AttackingData,UpcomingFixtures,Team,True)
    
    
for Team in Teams:
    funcs.MakeTeamPage(Team,"TeamBase.txt")
    
        
funcs.git_push(r'/Users/philipwinchester/Sites/fplbuddy.github.io/.git','Auto')
