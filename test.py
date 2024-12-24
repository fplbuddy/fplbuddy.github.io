import requests

# Define the API endpoint and headers
url = "https://api.football-data.org/v4/competitions/PL/standings"
headers = {
    "X-Auth-Token": "4a28f5bd89ed4b91b21eff78c72038fd"  # Replace with your actual API token
}

# Fetch the data
response = requests.get(url, headers=headers)

if response.status_code == 200:
    data = response.json()
    standings = data.get('standings', [])[0].get('table', [])
    
    # Print the table
    print(f"{'Position':<10}{'Team':<30}{'Points':<10}")
    print("-" * 50)
    for team in standings:
        print(f"{team['position']:<10}{team['team']['name']:<30}{team['points']:<10}")
else:
    print("Failed to fetch data:", response.status_code, response.text)
