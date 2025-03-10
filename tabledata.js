const expectedGoalsData = {
  "Arsenal": { scores: [2.03, 2.01, 1.51, 2.2, 2.58, 1.78, 1.9, 1.27, 2.1, 3.02], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [0.0, 1.49, 1.51, 2.41, 1.67, 1.12, 1.6, 1.36, 1.7, 1.45], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.75, 2.29, 1.74, 1.6, 1.26, 1.62, 0.79, 1.72, 1.11, 2.27], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.35, 1.49, 1.61, 0.79, 1.66, 1.34, 1.62, 2.05, 1.6, 1.77], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.06, 1.65, 1.21, 2.17, 1.5, 1.86, 1.59, 1.69, 1.08, 1.45], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [0.94, 2.02, 1.87, 2.74, 1.71, 1.6, 1.35, 1.78, 1.93, 1.6], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [0.0, 2.13, 1.47, 2.31, 1.34, 0.7, 1.33, 1.35, 1.75, 0.9], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.34, 0.7, 0.6, 0.92, 0.86, 0.99, 1.58, 0.98, 1.84, 1.02], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.53, 0.71, 1.02, 1.22, 1.45, 2.16, 1.39, 1.21, 1.41, 1.12], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [1.06, 0.95, 1.39, 1.01, 0.62, 1.05, 0.85, 1.23, 1.43, 1.37], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.97, 0.67, 1.0, 0.89, 0.68, 1.06, 1.62, 0.81, 1.38, 0.82], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [0.0, 1.91, 2.04, 2.77, 2.89, 2.41, 2.05, 1.25, 2.11, 2.01], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.23, 3.04, 1.94, 1.9, 1.62, 2.32, 2.65, 3.22, 2.03, 1.92], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.73, 1.14, 1.06, 1.27, 1.68, 1.15, 1.33, 1.66, 1.23, 1.47], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [0.0, 2.13, 2.47, 3.7, 1.88, 2.8, 1.81, 1.96, 0.96, 1.64], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.98, 1.56, 1.48, 1.29, 1.46, 1.68, 1.22, 2.18, 1.68, 1.55], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [1.02, 0.73, 0.79, 0.89, 0.9, 0.83, 1.05, 0.65, 0.62, 0.46], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.72, 1.74, 3.23, 2.13, 1.81, 1.22, 2.1, 1.7, 1.86, 2.0], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.01, 1.49, 1.28, 0.85, 2.26, 1.25, 1.43, 1.22, 1.27, 1.73], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [2.05, 1.66, 1.75, 1.44, 1.23, 1.93, 0.95, 1.41, 1.08, 1.49], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [1.95, 2.46, 2.73, 2.28, 2.69, 2.49, 2.28, 1.43, 1.92, 3.17], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [0.0, 0.96, 1.13, 2.05, 0.76, 0.49, 1.25, 0.89, 0.78, 1.15], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.29, 1.93, 1.4, 1.48, 1.31, 1.58, 0.74, 1.29, 0.65, 2.21], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [0.87, 0.59, 0.77, 0.55, 1.12, 0.93, 1.32, 1.46, 1.22, 1.13], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [0.54, 1.13, 1.15, 2.05, 0.95, 1.43, 0.82, 1.22, 0.61, 0.68], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [0.66, 0.88, 1.0, 1.81, 1.17, 1.86, 0.64, 0.7, 1.47, 1.06], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [0.0, 2.4, 1.49, 1.64, 1.41, 0.84, 1.48, 0.91, 1.7, 0.67], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.82, 0.74, 1.1, 1.37, 0.99, 1.01, 2.14, 1.49, 2.68, 0.97], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [0.89, 0.67, 0.65, 1.01, 0.91, 2.18, 1.01, 1.87, 1.01, 0.73], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.69, 0.5, 0.87, 0.32, 0.38, 0.3, 1.03, 0.64, 1.25, 0.89], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.89, 0.24, 0.42, 0.57, 0.28, 0.72, 1.75, 0.56, 1.2, 0.52], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [0.0, 2.49, 1.8, 2.13, 2.53, 1.48, 1.29, 1.4, 1.7, 2.04], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.72, 2.55, 1.73, 1.86, 2.12, 1.64, 1.93, 2.62, 1.64, 1.63], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.89, 1.05, 0.72, 0.7, 1.46, 0.99, 0.99, 1.48, 0.73, 1.17], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [0.0, 1.13, 1.83, 2.74, 0.94, 1.75, 1.02, 0.84, 0.61, 1.8], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.74, 1.59, 1.11, 1.99, 0.82, 1.3, 1.32, 2.23, 1.41, 1.01], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.65, 0.59, 0.2, 0.45, 0.52, 0.57, 0.99, 0.2, 0.79, 0.24], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.09, 0.66, 2.28, 1.18, 1.16, 0.45, 1.2, 1.3, 0.91, 1.17], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.31, 0.95, 0.88, 0.31, 2.03, 0.78, 0.61, 0.95, 0.94, 1.27], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.8, 1.13, 1.25, 0.6, 0.93, 1.73, 0.35, 0.93, 0.87, 0.86], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 29; i <= gameweeks + 29 - 1; i++) {
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
