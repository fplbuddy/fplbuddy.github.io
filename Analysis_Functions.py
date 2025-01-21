#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Oct 16 21:42:15 2020

@author: philipwinchester
"""
import numpy as np
import pandas as pd
from itertools import combinations, product
import time
import requests
import constants as const
from unidecode import unidecode
from getters import *
import math

def GetFPLPlayerData():
    """ Retrieve the fpl player data from the hard-coded url
    """

    team_name_reverse_map = {variant: standard for standard, variants in const.team_name_map.items() for variant in variants}

    # FPL API endpoint
    url = "https://fantasy.premierleague.com/api/bootstrap-static/"

    # Send a GET request to the API
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        
        # Map team IDs to team names
        teams = {team['id']: team['name'] for team in data['teams']}
        
        # Map position IDs to position names
        positions = {pos['id']: pos['singular_name'] for pos in data['element_types']}
        
        # Extract player data
        players = data['elements']
        
        # Create a list of dictionaries for the DataFrame
        player_data = []
        for player in players:
            player_data.append({
                "Player ID": player['id'],
                "Player Name": f"{player['first_name']} {player['second_name']}",
                "Team": teams.get(player['team'], "Unknown"),
                "Position": positions.get(player['element_type'], "Unknown"),
                "xA/90": player['expected_assists_per_90'],  # Expected assists per 90 minutes
                "xG/90": player['expected_goals_per_90'],    # Expected goals per 90 minutes
                "Minutes": player['minutes'],
                "Goals": player['goals_scored'],
                "Assists": player['assists'],
                "G/90": ( player['goals_scored'] / max( player['minutes'], 45 ) ) * 90,  # Goals per 90 minutes
                "A/90": ( player['assists'] / max( player['minutes'], 45 ) ) * 90,       # Assists per 90 minutes
                "Cost": player['now_cost'],
                "Start Cost": ( player['now_cost'] - player['cost_change_start'] ),  # Start cost in millions
                "Selected By (%)": player['selected_by_percent'],
            })

        # Create DataFrame
        FPL_Data = pd.DataFrame(player_data)
        FPL_Data["Team"] = FPL_Data["Team"].replace(team_name_reverse_map)
        FPL_Data['Player Name'] = FPL_Data['Player Name'].apply(normalize_name)
    else:
        print(f"Failed to retrieve data. Status code: {response.status_code}")

    return FPL_Data

def normalize_name(name):
    if pd.isna(name):  # Handle NaN values
        return name
    return unidecode(name.replace('-', ' '))

def GetSquad( FPL_Data ):
    entry_data = get_entry_data( const.team_id )[ 'current' ]
    lastgw = len(entry_data)
    bank = entry_data[-1]['bank']

    last_gw_data = get_entry_gws_data( const.team_id, 1, lastgw )
    transfer_data = get_entry_transfers_data( const.team_id )

    current_squad_ids = list(last_gw_data['element'])

    # Check if there were any transfers made in this gameweek
    current_gw_transfers = transfer_data[transfer_data['event'] == lastgw+1]

    # updated current_squad_ids with transfers that have been made
    if len(current_gw_transfers) > 0:
        for _, transfer in current_gw_transfers.iterrows():
            # FIXME: This might not work if we transfer someone out and then in
            current_squad_ids.remove(transfer['element_out'])
            current_squad_ids.append(transfer['element_in'])
            bank += ( transfer['element_out_cost'] - transfer['element_in_cost'] ) 

    # Get player names from current_squad_ids, and get price if I sold player in squad
    current_squad_names = []
    current_player_values = []
    positions = []
    for id in current_squad_ids:
        current_squad_names.append( FPL_Data.loc[FPL_Data['Player ID'] == id, 'Player Name'].iloc[0] )
        positions.append( FPL_Data.loc[FPL_Data['Player ID'] == id, 'Position'].iloc[0] )
        current_value = FPL_Data.loc[FPL_Data['Player ID'] == id, 'Cost'].iloc[0]
        # Check if we transfered the player in
        if id in transfer_data['element_in'].values:
            start_value = transfer_data.loc[transfer_data['element_in'] == id, 'element_in_cost'].iloc[0]
        else:
            start_value = FPL_Data.loc[FPL_Data['Player ID'] == id, 'Start Cost'].iloc[0]
        
        # calculate the value is sold
        if current_value <= start_value:
            value_if_sold = current_value
        else:
            value_if_sold = math.floor( ( current_value - start_value )/2 )  + start_value 
            
        current_player_values.append( value_if_sold )

    Squad = dict()

    Squad['Players'] = pd.DataFrame( {'Player ID': current_squad_ids, 'Player Name': current_squad_names, 'Price if Sold': current_player_values, 'Position':  positions} )
    Squad['Bank'] = bank
    Squad['Total Money'] = Squad['Bank'] + sum( current_player_values )
    return Squad

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

def PickPlayers(Data, GWHorizon, PlayingSpots, TotalSpots, LockedPlayers, PotentialAdditions, 
                GK_count, DEF_count, MID_count, FWD_count, 
                Captain = False, verbose=False): 
    """
    Optimized version of the PickPlayers function with vectorization.
    """
    entry_data = get_entry_data( const.team_id )[ 'current' ]
    NextGW = len(entry_data) + 1

    # Identify locked players' positions
    locked_positions = {
        "Goalkeeper": [player for player in LockedPlayers if Data.loc[Data['Player Name'] == player, 'Position'].values[0] == 'Goalkeeper'],
        "Defender": [player for player in LockedPlayers if Data.loc[Data['Player Name'] == player, 'Position'].values[0] == 'Defender'],
        "Midfielder": [player for player in LockedPlayers if Data.loc[Data['Player Name'] == player, 'Position'].values[0] == 'Midfielder'],
        "Forward": [player for player in LockedPlayers if Data.loc[Data['Player Name'] == player, 'Position'].values[0] == 'Forward'],
    }

    # Adjust counts for positions based on locked players
    GK_count -= len(locked_positions["Goalkeeper"])
    DEF_count -= len(locked_positions["Defender"])
    MID_count -= len(locked_positions["Midfielder"])
    FWD_count -= len(locked_positions["Forward"])

    # Ensure no negative counts
    if GK_count < 0 or DEF_count < 0 or MID_count < 0 or FWD_count < 0:
        raise ValueError("Too many locked players in one or more positions relative to required counts.")

    # Remove locked players from potential additions
    PotentialAdditions = [player for player in PotentialAdditions if player not in LockedPlayers]

    PositionsToPick = TotalSpots - len(LockedPlayers)

    # Group potential additions by position
    goalkeepers = [player for player in PotentialAdditions if Data.loc[Data['Player Name'] == player, 'Position'].values[0] == 'Goalkeeper']
    defenders = [player for player in PotentialAdditions if Data.loc[Data['Player Name'] == player, 'Position'].values[0] == 'Defender']
    midfielders = [player for player in PotentialAdditions if Data.loc[Data['Player Name'] == player, 'Position'].values[0] == 'Midfielder']
    forwards = [player for player in PotentialAdditions if Data.loc[Data['Player Name'] == player, 'Position'].values[0] == 'Forward']

    # Generate position-constrained combinations for remaining slots
    GK_combinations = list(combinations(goalkeepers, GK_count))
    DEF_combinations = list(combinations(defenders, DEF_count))
    MID_combinations = list(combinations(midfielders, MID_count))
    FWD_combinations = list(combinations(forwards, FWD_count))
    
    # Combine the locked players with generated combinations
    PA_groups = list(product(GK_combinations, DEF_combinations, MID_combinations, FWD_combinations))
    PA_groups = [
        [player for group in combo for player in group]
        for combo in PA_groups
    ]
    PA_groups = np.array(PA_groups)

    # Filter relevant columns and rows from the DataFrame
    columns_to_keep = ["Cost", "Player Name"] + [f"GW{i} Tot Points" for i in range(NextGW, NextGW + GWHorizon)]
    Data = Data[columns_to_keep]

    # Map player names to their performance data for quick lookup
    score_starting = next((i for i, col in enumerate(Data.columns) if "Tot Points" in col), None)
    player_data_map = {
        row["Player Name"]: row.iloc[score_starting:].astype(float).values 
        for _, row in Data.iterrows()
    }
    player_cost_map = {
        row["Player Name"]: row["Cost"] 
        for _, row in Data.iterrows()
    }

    if LockedPlayers:
        locked_scores = np.array([player_data_map[player] for player in LockedPlayers])
    else:
        locked_scores = np.empty((0, GWHorizon))

    # Initialize the scores array for potential additions
    all_scores = []
    start_time = time.time()

    # Vectorized processing
    for idx, group in enumerate(PA_groups):
        if verbose and idx % 10000 == 0:
            elapsed_time = time.time() - start_time
            print(f"Processed {idx}/{len(PA_groups)} combinations in {elapsed_time:.2f} seconds")

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
        all_scores.append([*LockedPlayers, *group, round(score, 1), total_cost])

    # Create the final DataFrame
    columns = (
        [f'Fixed {i+1}' for i in range(len(LockedPlayers))] +
        [f'PA {i+1}' for i in range(PositionsToPick)] +
        ["Score", "Total Cost"]
    )
    df = pd.DataFrame(all_scores, columns=columns)
    df = df.sort_values(by='Score', ascending=False)

    return df

def efficient_frontier(data, x_col, y_col):
    # Sort data by cost, then by xG/90 in descending order
    sorted_data = data.sort_values(by=[y_col, x_col], ascending=[True, False])
    
    # Initialize an empty list for efficient players
    efficient_players = []
    max_xg90 = -np.inf
    
    # Traverse through sorted data to find efficient points
    for _, player in sorted_data.iterrows():
        if player[x_col] > max_xg90:
            efficient_players.append(player)
            max_xg90 = player[x_col]
    
    # Return the efficient players as a DataFrame
    return pd.DataFrame(efficient_players)

# Function to compute efficient frontier iteratively
def all_efficient_frontiers(data, x_col, y_col, n):
    """
    Compute the first `n` efficient frontiers and return as a single DataFrame.
    """
    frontiers = []
    remaining_data = data.copy()
    
    for _ in range(n):
        if remaining_data.empty:
            break
        
        # Compute the current efficient frontier
        frontier = efficient_frontier(remaining_data, x_col, y_col)
        
        # Append the current frontier with a label
        frontiers.append(frontier)
        
        # Remove players on the current frontier from remaining data
        remaining_data = remaining_data.drop(frontier.index)
    
    # Combine all frontiers into a single DataFrame
    combined_frontiers = pd.concat(frontiers, ignore_index=True)
    return combined_frontiers

