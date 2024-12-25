TotalGWs = 38

files = [ 'Data/23_24.csv', 'Data/24_25.csv']
urls = [ 'https://www.football-data.co.uk/mmz4281/2324/E0.csv', 'https://www.football-data.co.uk/mmz4281/2425/E0.csv' ]

team_name_map = {
    "Nott'm Forest": ["Nottingham", "Nottingham Forest"],
    "Brighton": ["Brighton Hove", "Brighton and Hove Albion"],
    "Wolves": [ "Wolverhampton" ],
    "Leicester": ["Leicester City"],
    "Ipswich": ["Ipswich Town"],
    "Tottenham": ["Tottenham Hotspur"],
    "Norwich": ["Norwich City"],
    "Man City": ["Manchester City"],
    "Man United": ["Manchester United"],
    "Newcastle": ["Newcastle United"],
    "Leeds": ["Leeds United"],
    "West Ham": ["West Ham United"],
    "Brentford": ["Brentford FC"],
}

X_Auth_Token = "4a28f5bd89ed4b91b21eff78c72038fd" 
API_url = "https://api.football-data.org/v4/competitions/PL/standings"

ManagerGWs = 3
ManagerGWStart = 24
ManagerGoal = 1
ManagerCS = 2
ManagerWin = 6
ManagerDraw = 3
ManagerWinBonus = 10
ManagerDrawBonus = 5