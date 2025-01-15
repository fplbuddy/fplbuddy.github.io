TotalGWs = 38
CleanSheetMultiplier = 5

files = [ 'Data/23_24.csv', 'Data/24_25.csv']
urls = [ 'https://www.football-data.co.uk/mmz4281/2324/E0.csv', 'https://www.football-data.co.uk/mmz4281/2425/E0.csv' ]

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

# Player Points
BasePoints = 2
AssistGoalRatio = 0.91
AssistPoints = 3
GKDEF_CleanSheetPoints = 4
DEF_GoalPoints = 6
MID_CleanSheetPoints = 1
MID_GoalPoints = 5
FWD_GoalPoints = 4

# Other Game Rules
NGK = 2
NDEF = 5
NMID = 5
NFWD = 3

# Model parameters
ExpectedFrac = 0.7

