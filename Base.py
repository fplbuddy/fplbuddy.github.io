import Functions as funcs
import datetime
import constants as const

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