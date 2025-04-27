const expectedGoalsData = {
  "Arsenal": { scores: [1.89, 1.29, 2.03, 2.94], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.69, 1.46, 1.93, 1.52], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [0.76, 1.53, 1.04, 2.12], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.61, 2.15, 1.6, 1.72], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.55, 1.61, 1.11, 1.52], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.3, 1.63, 1.78, 1.5], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.32, 1.4, 1.66, 0.91], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.57, 0.92, 1.75, 0.96], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.32, 1.18, 1.37, 1.13], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.85, 1.24, 1.48, 1.4], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [1.5, 0.75, 1.34, 0.76], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [1.85, 1.25, 2.24, 2.18], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.54, 3.16, 2.04, 1.87], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.2, 1.51, 1.08, 1.3], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [2.09, 1.94, 1.04, 1.66], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.36, 2.17, 1.63, 1.46], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [1.03, 0.64, 0.59, 0.47], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.92, 1.8, 1.65, 2.08], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.41, 1.12, 1.19, 1.67], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.98, 1.62, 1.25, 1.49], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [2.33, 1.43, 1.76, 3.14], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.33, 1.08, 0.96, 1.36], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [0.75, 1.16, 0.65, 2.33], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.51, 1.45, 1.28, 1.13], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [0.62, 0.99, 0.53, 0.62], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [0.78, 0.72, 1.7, 1.16], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.29, 0.82, 1.44, 0.57], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [2.14, 1.53, 2.77, 0.95], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [0.92, 1.98, 1.01, 0.77], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [1.04, 0.58, 1.31, 0.94], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [1.79, 0.57, 1.14, 0.6], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [1.36, 1.38, 1.66, 2.02], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.88, 2.65, 1.77, 1.61], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.0, 1.64, 0.84, 1.09], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.06, 0.98, 0.66, 1.91], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.34, 2.35, 1.53, 1.11], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [1.12, 0.21, 0.87, 0.26], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.22, 1.23, 0.73, 1.1], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.73, 1.1, 0.98, 1.24], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.39, 1.0, 0.95, 0.9], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
