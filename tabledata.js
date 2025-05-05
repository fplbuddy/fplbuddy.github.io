const expectedGoalsData = {
  "Arsenal": { scores: [1.28, 1.99, 2.92], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.45, 2.02, 1.51], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.52, 1.03, 2.12], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [2.16, 1.62, 1.7], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.61, 1.13, 1.61], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.58, 1.75, 1.5], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.46, 1.65, 0.9], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [0.9, 1.71, 0.92], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.17, 1.32, 1.13], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [1.18, 1.45, 1.39], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.74, 1.3, 0.74], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [1.29, 2.33, 2.25], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [3.15, 2.04, 1.87], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.54, 1.05, 1.3], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.91, 1.04, 1.64], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [2.13, 1.6, 1.39], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.64, 0.58, 0.47], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.81, 1.65, 2.12], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.12, 1.22, 1.69], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.67, 1.26, 1.47], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [1.37, 1.77, 3.12], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.09, 0.96, 1.36], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.17, 0.65, 2.39], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.54, 1.34, 1.15], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [0.94, 0.49, 0.6], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [0.74, 1.75, 1.24], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [0.82, 1.41, 0.53], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.56, 2.79, 0.97], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [2.03, 0.99, 0.77], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.58, 1.36, 0.92], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.59, 1.17, 0.6], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [1.39, 1.62, 2.02], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.64, 1.79, 1.61], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.63, 0.87, 1.11], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.03, 0.68, 2.0], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [2.39, 1.47, 1.12], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.21, 0.9, 0.27], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.17, 0.67, 1.0], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.07, 1.01, 1.25], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.0, 0.96, 0.91], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

function updateTables(gameweeks) {
    document.getElementById("gameweekCount").innerText = gameweeks;
    updateTable("expectedGoalsTable", "expectedGoalsHeader", "expectedGoalsBody", expectedGoalsData, gameweeks);
    updateTable("defensiveScoreTable", "defensiveScoreHeader", "defensiveScoreBody", defensiveScoreData, gameweeks);

    sorttable.makeSortable(document.getElementById("expectedGoalsTable"));
    sorttable.makeSortable(document.getElementById("defensiveScoreTable"));
}

function updateTable(tableId, headerId, bodyId, data, gameweeks) {
    const header = document.getElementById(headerId);
    const body = document.getElementById(bodyId);
    gameweeks = Number(gameweeks)

    // Re-create the header row
    header.innerHTML = `<th>Club</th>`;
    for (let i = 36; i <= gameweeks + 36 - 1; i++) {
        header.innerHTML += `<th>GW ${i}</th>`;
    }
    header.innerHTML += `<th>Total</th>`

    // Re-create the body rows
    body.innerHTML = "";
    for (const team in data) {
        const row = document.createElement("tr");

        // Team cell with clickable link and hover effect
        const teamCell = document.createElement("td");
        teamCell.innerHTML = `
          <a style="text-decoration:none" href="${data[team].page}">
              <span style="float: left"><img class="logo" src="${data[team].logo}"> </span>
                  &nbsp; ${team}
          </a>`;
        row.appendChild(teamCell);

        const totalGoals = data[team].scores.slice(0, gameweeks).reduce((a, b) => a + b, 0);
        // Individual gameweek goals
        for (let i = 0; i < gameweeks; i++) {
            row.innerHTML += `<td>${data[team].scores[i].toFixed(2)}</td>`;
        }
        row.innerHTML += `<td>${totalGoals.toFixed(2)}</td>`;

        body.appendChild(row);
    }
}

document.addEventListener("DOMContentLoaded", () => updateTables(5));
