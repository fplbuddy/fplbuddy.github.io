const expectedGoalsData = {
  "Arsenal": { scores: [1.89, 1.28, 1.99, 2.92], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.7, 1.45, 2.02, 1.5], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [0.75, 1.52, 1.02, 2.13], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.6, 2.13, 1.61, 1.69], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.56, 1.61, 1.13, 1.61], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.29, 1.58, 1.75, 1.48], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.32, 1.45, 1.65, 0.9], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.53, 0.9, 1.71, 0.91], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.31, 1.17, 1.36, 1.13], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.82, 1.21, 1.45, 1.39], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [1.46, 0.73, 1.3, 0.74], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [1.86, 1.29, 2.33, 2.25], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.51, 3.14, 2.04, 1.87], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.19, 1.54, 1.05, 1.3], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [2.11, 1.91, 1.03, 1.64], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.35, 2.2, 1.65, 1.44], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [1.04, 0.64, 0.58, 0.47], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.95, 1.81, 1.64, 2.12], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.5, 1.12, 1.21, 1.68], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.99, 1.67, 1.26, 1.52], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [2.36, 1.37, 1.78, 3.12], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.35, 1.09, 0.97, 1.36], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [0.75, 1.17, 0.65, 2.39], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.52, 1.49, 1.29, 1.1], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [0.61, 0.94, 0.49, 0.6], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [0.77, 0.74, 1.75, 1.19], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.29, 0.82, 1.41, 0.53], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [2.21, 1.55, 2.79, 0.97], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [0.91, 2.03, 1.0, 0.77], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [1.08, 0.59, 1.36, 0.93], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [1.77, 0.55, 1.17, 0.6], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [1.37, 1.39, 1.61, 2.03], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.86, 2.64, 1.79, 1.61], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.01, 1.63, 0.87, 1.11], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.05, 1.03, 0.68, 2.0], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.33, 2.41, 1.49, 1.14], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [1.17, 0.22, 0.9, 0.27], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.11, 1.17, 0.67, 1.0], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.71, 1.07, 0.96, 1.25], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.41, 1.0, 0.96, 0.93], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 35; i <= gameweeks + 35 - 1; i++) {
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
