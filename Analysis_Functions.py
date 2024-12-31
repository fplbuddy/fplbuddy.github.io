#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Oct 16 21:42:15 2020

@author: philipwinchester
"""
import numpy as np
import pandas as pd
from itertools import combinations

def PickPlayers_Team(Data, GWHorizon, PlayingSpots, TotalSpots, LockedPositions, PotentialAdditions): 
    '''
    Could add something like the following to filter better
    Budget
    Current
    swap to me made
    '''    
    PositionsToPick = TotalSpots - sum(LockedPositions.values())

    PA_list = [key for key, count in PotentialAdditions.items() for _ in range(count)]
    LP_list = [key for key, count in LockedPositions.items() for _ in range(count)]

    PA_groups = list(combinations(PA_list, PositionsToPick))
    PA_groups = list(set(PA_groups))

    Data = Data.iloc[:, :GWHorizon+1]

    columns =  [f'Fixed {i+1}' for i in range(len(LP_list))] +  [f'PA {i+1}' for i in range(PositionsToPick)] +  [ "Score" ]

    # Create an empty DataFrame with these columns
    df = pd.DataFrame(columns=columns)

    arr = np.empty((TotalSpots, GWHorizon))

    # Get the locked positions
    for i in range( len(LP_list) ):
        arr[i] = Data[Data["Teams"] == LP_list[i]].values[0][1:]

    # Get the potential additions
    for i in range( len(PA_groups) ):
        for j in range( len(PA_groups[i]) ):
            arr[-(j+1)] = Data[Data["Teams"] == PA_groups[i][j]].values[0][1:]
        score = round(np.sum(np.sum(np.partition(arr, -PlayingSpots, axis=0)[-PlayingSpots:], axis=0)),2)

        
        df = df.append(pd.DataFrame([np.append(LP_list, PA_groups[i]).tolist() + [str(score)]], columns=columns))

    df.to_csv("Team_PlayerSelect.csv", index=False)

def PickPlayers(Data, GWHorizon, PlayingSpots, TotalSpots, LockedPlayers, PotentialAdditions): 
    '''
    Could add something like the following to filter better
    Budget
    Current
    swap to me made
    '''
    PositionsToPick = TotalSpots - len(LockedPlayers)

    PA_groups = list(combinations(PotentialAdditions, PositionsToPick))
    PA_groups = list(set(PA_groups))

    # Create a new DataFrame with only those columns
    columns_to_keep = [col for col in Data.columns if 'Player Name' in col or 'Tot Points' in col]
    Data = Data[columns_to_keep]
    
    Data = Data.iloc[:, :GWHorizon+1]

    columns =  [f'Fixed {i+1}' for i in range(len(LockedPlayers))] +  [f'PA {i+1}' for i in range(PositionsToPick)] +  [ "Score" ]

    # Create an empty DataFrame with these columns
    df = pd.DataFrame(columns=columns)

    arr = np.empty((TotalSpots, GWHorizon))

    # Get the locked positions
    for i in range( len(LockedPlayers) ):
        arr[i] = Data[Data["Player Name"] == LockedPlayers[i]].values[0][1:]
    print( len(PA_groups) )
    # Get the potential additions
    for i in range( len(PA_groups) ):
        if i % 1000 == 0:
            print(i)
        for j in range( len(PA_groups[i]) ):
            arr[-(j+1)] = Data[Data["Player Name"] == PA_groups[i][j]].values[0][1:]
        score = round(np.sum(np.sum(np.partition(arr, -PlayingSpots, axis=0)[-PlayingSpots:], axis=0)),2)

        
        df = df.append(pd.DataFrame([np.append(LockedPlayers, PA_groups[i]).tolist() + [str(score)]], columns=columns))

    df.to_csv("PlayerSelect.csv", index=False)

