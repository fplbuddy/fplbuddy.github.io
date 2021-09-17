#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Sep  3 14:23:51 2021

@author: philipwinchester
"""

import Functions as funcs

url = 'https://www.football-data.co.uk/mmz4281/2122/E0.csv' 
funcs.GetData(url,'Data/21_22.csv')
url = 'https://www.football-data.co.uk/mmz4281/2021/E0.csv'
funcs.GetData(url,'Data/20_21.csv')

files = ['Data/21_22.csv', 'Data/20_21.csv']
Match_Data = funcs.LoadData(files)
Match_Data= Match_Data.replace(['West Brom', 'Sheffield United', 'Fulham'],['Norwich', 'Watford', 'Brentford'])
Teams = sorted(list(set(Match_Data['HomeTeam'])))
Res = funcs.Optimise2(Match_Data, Teams)



UpcomingFixtures = funcs.GetUpcomingFixtures(5)
UpcomingFixtures = funcs.AddtoUpcomingFixtures(UpcomingFixtures, Res,  Res['Gamma'][0],  Res['Rho'][0], Teams)
AttackingData,DefensiveData = funcs.GetTables(UpcomingFixtures,Teams)

AttackingData.to_csv('Data/AttackingData.csv', index = False)
DefensiveData.to_csv('Data/DefensiveData .csv', index = False)

#hej = funcs.ProbMatrix("Man United", "Man City", Res,  Res['Gamma'][0],  Res['Rho'][0], Teams)
#ehhh = funcs.ExpectedGoalsAndCS(hej)
#jev = funcs.Prob(hej, "Man United", "Man City")

file = open("htmlbase.txt")
thestring = file.read()
file.close()
# Fix Gameweeks
thestring = funcs.FixGWsAndTime(UpcomingFixtures,thestring)
# Make content1
thestring = funcs.MakeContent(thestring,Teams,UpcomingFixtures,AttackingData,"content1","contentbase.txt")
# Make content 2
thestring = funcs.MakeContent(thestring,Teams,UpcomingFixtures,DefensiveData,"content2","contentbase.txt")

Html_file= open("index.html","w")
Html_file.write(thestring)
Html_file.close()

# Make figures
UpcomingFixtures = funcs.GetUpcomingFixtures()
UpcomingFixtures = funcs.AddtoUpcomingFixtures(UpcomingFixtures, Res,  Res['Gamma'][0],  Res['Rho'][0], Teams)
AttackingData,DefensiveData = funcs.GetTables(UpcomingFixtures,Teams)
for Team in Teams:
    funcs.Makeplot(DefensiveData,UpcomingFixtures,Team,False)
    funcs.Makeplot(AttackingData,UpcomingFixtures,Team,True)
    
    
for Team in Teams:
    funcs.MakeTeamPage(Team,"TeamBase.txt")
    
    
funcs.git_push('/Users/philipwinchester/Sites/fplbuddy.github.io','Auto')

    
        

