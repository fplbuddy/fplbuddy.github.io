team_id = "98266"

TotalGWs = 38
CleanSheetMultiplier = 5

files = [ 'Data/24_25.csv', 'Data/25_26.csv' ]
urls = [ 'https://www.football-data.co.uk/mmz4281/2425/E0.csv', 'https://www.football-data.co.uk/mmz4281/2526/E0.csv' ]

team_name_map = {
    "Nott'm Forest": ["Nottingham", "Nottingham Forest"],
    "Brighton": ["Brighton Hove", "Brighton and Hove Albion"],
    "Wolves": [ "Wolverhampton", "Wolverhampton Wanderers" ],
    "Leicester": ["Leicester City"],
    "Ipswich": ["Ipswich Town"],
    "Tottenham": ["Tottenham Hotspur", "Spurs"],
    "Norwich": ["Norwich City"],
    "Man City": ["Manchester City"],
    "Man United": ["Manchester United", "Man Utd"],
    "Newcastle": ["Newcastle United"],
    "Leeds": ["Leeds United"],
    "West Ham": ["West Ham United"],
    "Brentford": ["Brentford FC"],
}

name_corrections = {
    "Everton": {
        "Harrison": "Jack Harrison", # Before -> After
        "Beto": "Norberto Bercique Gomes Betuncal",
    },
    "Man United": {
        "Casemiro": "Carlos Henrique Casimiro",
    },
    "Nott'm Forest": {
        "Morato": "Felipe Rodrigues da Silva",
    },
    "West Ham": {
        "Lucas Paqueta": "Lucas Tolentino Coelho de Lima",
    },
    "Ipswich": {
        "Clarke": "Jack Clarke",
    },
    "Chelsea": {
        "Fofana": "Wesley Fofana",
    },
    "Leicester": {
        "Thomas": "Luke Thomas",
    },
    "Man City": {
        "Savinho": "Savio Moreira de Oliveira",
    },
}

lineup_corrections = {
    "Man City": {
        "Harrison": "Jack Harrison", # Before -> After
    },
}

X_Auth_Token = "4a28f5bd89ed4b91b21eff78c72038fd" 
API_url = "https://api.football-data.org/v4/competitions/PL/standings"

# Manager Points
ManagerGWs = 3
ManagerGWStart = 24
ManagerGoal = 1
ManagerCS = 2
ManagerWin = 6
ManagerDraw = 3
ManagerWinBonus = 10
ManagerDrawBonus = 5

# For Bonus Points
bonusPointLambda = 1.3

# Player Points
BasePoints = 2
AssistGoalRatio = 0.91
AssistPoints = 3
GKDEF_CleanSheetPoints = 4
DEF_GoalPoints = 6
MID_CleanSheetPoints = 1
MID_GoalPoints = 5
FWD_GoalPoints = 4

# Bayesian  Priors, used for players who have not played very much
PRIORS = {
    "Goalkeeper": {
        "G90": 0.0,
        "A90": 0.01,
        "DEF90": 0.0
    },
    "Defender": {
        "G90": 0.05,
        "A90": 0.07,
        "DEF90": 7.8
    },
    "Midfielder": {
        "G90": 0.15,
        "A90": 0.15,
        "DEF90": 8.4
    },
    "Forward": {
        "G90": 0.41,
        "A90": 0.05,
        "DEF90": 4.5
    }
}
priorMins = 360

# DEFCON
DEF_DEFCON = 10
MID_DEFCON = 13
DEFCON_Points = 2

# Other Game Rules
NGK = 2
NDEF = 5
NMID = 5
NFWD = 3

# Model parameters
ExpectedFrac = 0.7

