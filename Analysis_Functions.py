#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Oct 16 21:42:15 2020

@author: philipwinchester
"""
import numpy as np
import pandas as pd
from itertools import combinations
import time

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

def PickPlayers(Data, GWHorizon, PlayingSpots, TotalSpots, LockedPlayers, PotentialAdditions, Captain = False, verbose=False): 
    """
    Optimized version of the PickPlayers function with vectorization.
    """

    # Remove locked players from potential additions
    PotentialAdditions = [player for player in PotentialAdditions if player not in LockedPlayers]

    PositionsToPick = TotalSpots - len(LockedPlayers)

    # Generate unique combinations of potential additions
    PA_groups = list(combinations(PotentialAdditions, PositionsToPick))
    PA_groups = np.array(PA_groups)

    # Filter relevant columns and rows from the DataFrame
    columns_to_keep = [col for col in Data.columns if 'Player Name' in col or 'Tot Points' in col or 'Cost' in col]
    Data = Data[columns_to_keep].iloc[:, :GWHorizon+2]

    # Map player names to their performance data for quick lookup
    player_data_map = {row[0]: row[2:].astype(float) for row in Data.to_numpy()}
    player_cost_map = {row[0]: row[Data.columns.get_loc("Cost (M)")] for row in Data.to_numpy()}

    if LockedPlayers:
        locked_scores = np.array([player_data_map[player] for player in LockedPlayers])
    else:
        locked_scores = np.empty((0, GWHorizon))

    # Initialize the scores array for potential additions
    all_scores = []
    start_time = time.time()

    # Vectorized processing
    for idx, group in enumerate(PA_groups):
        if verbose and idx % 1000 == 0:
            elapsed_time = time.time() - start_time
            print(f"Processed {idx}/{len(PA_groups)} combinations in {elapsed_time:.2f} seconds")
            start_time = time.time()

        # Get scores for the current group of potential additions
        addition_scores = np.array([player_data_map[player] for player in group])

        # Concatenate locked and potential addition scores
        total_scores = np.vstack((locked_scores, addition_scores))
        total_cost = sum(player_cost_map[player] for player in LockedPlayers + list(group))

        # Calculate the total score
        playing = np.partition(total_scores, -PlayingSpots, axis=0)[-PlayingSpots:]
        top_scores = np.sum(playing, axis=0)
        score = round(np.sum(top_scores), 2)
        if Captain:
            score += np.sum( np.max(playing, axis=0) )

        # Append to results
        all_scores.append([*LockedPlayers, *group, score, total_cost])

    # Create the final DataFrame
    columns = (
        [f'Fixed {i+1}' for i in range(len(LockedPlayers))] +
        [f'PA {i+1}' for i in range(PositionsToPick)] +
        ["Score", "Total Cost"]
    )
    df = pd.DataFrame(all_scores, columns=columns)

    return df

