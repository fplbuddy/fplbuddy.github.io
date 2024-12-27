#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Sep  3 14:23:51 2021

@author: philipwinchester
"""

import os
os.chdir("/Users/philipwinchester/Sites/fplbuddy.github.io")

with open('Base.py') as file:
    exec(file.read(), globals())

funcs.AdjustManagerTable( ManagerData )

# Put data in the .js file
file = open("tabledata.txt")
Data = file.read()
file.close

file = open("parameterdata.txt")
DCData = file.read()
file.close

DefensfiveDataString, AttackingDataString, DCDataString = funcs.MakeDataJS(Teams, Res,DefensiveData, AttackingData)

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
