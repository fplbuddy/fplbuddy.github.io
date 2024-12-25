#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Sep  3 14:23:51 2021

@author: philipwinchester
"""

import Functions as funcs
import os
import datetime
import constants as const
os.chdir("/Users/philipwinchester/Sites/fplbuddy.github.io")

for url, file in zip(const.urls, const.files):
    funcs.GetData(url, file)

Match_Data = funcs.LoadData(const.files)
Match_Data= Match_Data.replace(['Luton', 'Burnley', 'Sheffield United'],['Ipswich', 'Leicester', 'Southampton'])
Teams = sorted(list(set(Match_Data['HomeTeam'])))
Res = funcs.Optimise2(Match_Data, Teams)

Fixes = dict()
Fixes["Before"] = [ {"GW": '8', "HomeTeam": "Leicester", "AwayTeam": "Nott'm Forest" } ]
Fixes["After"] = [ {"GW": '9', "HomeTeam": "Leicester", "AwayTeam": "Nott'm Forest"  } ]
Fixes["Before"] = [ {"GW": '12', "HomeTeam": "Southampton", "AwayTeam": "Brighton" } ]
Fixes["After"] = [ {"GW": '13', "HomeTeam": "Southampton", "AwayTeam": "Brighton"  } ]

UpcomingFixtures = funcs.GetUpcomingFixtures(Fixes = Fixes)
UpcomingFixtures = funcs.AddtoUpcomingFixtures(UpcomingFixtures, Res,  Res['Gamma'][0],  Res['Rho'][0], Teams)
AttackingData,DefensiveData, ManagerData = funcs.GetTables(UpcomingFixtures,Teams)
funcs.AdjustManagerTable( ManagerData )

# Put data in the .js file
file = open("tabledata.txt")
Data = file.read()
file.close

file = open("parameterdata.txt")
DCData = file.read()
file.close

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

Data = Data.replace( "AttackingData", AttackingDataString )
Data = Data.replace( "DefensiveData", DefensfiveDataString )
DCData = DCData.replace( "DCData", DCDataString )

GWS = list(set(UpcomingFixtures['GW']))
GWS.sort(key=float)
Data = Data.replace( "StartGWNumber", str(GWS[0]))

Html_file = open("tabledata.js", "w")
Html_file.write(Data)
Html_file.close()

Html_file = open("parameterdata.js", "w")
Html_file.write(DCData)
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
