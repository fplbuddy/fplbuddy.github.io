const expectedGoalsData = {
  "Arsenal": { scores: [2.04, 2.02, 1.51, 2.21, 2.58, 1.79, 1.91, 1.27, 2.05, 3.01], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [0.0, 1.48, 1.51, 2.4, 1.63, 1.12, 1.61, 1.35, 1.71, 1.45], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.76, 2.3, 1.71, 1.61, 1.27, 1.62, 0.79, 1.73, 1.12, 2.28], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.35, 1.45, 1.62, 0.79, 1.66, 1.34, 1.62, 2.05, 1.61, 1.76], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.06, 1.65, 1.21, 2.17, 1.49, 1.83, 1.55, 1.68, 1.09, 1.45], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [0.94, 2.03, 1.87, 2.74, 1.71, 1.61, 1.36, 1.73, 1.94, 1.6], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [0.0, 2.12, 1.48, 2.27, 1.35, 0.7, 1.34, 1.34, 1.76, 0.9], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.32, 0.69, 0.61, 0.92, 0.86, 0.99, 1.58, 0.98, 1.85, 0.99], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.54, 0.71, 1.03, 1.22, 1.46, 2.16, 1.39, 1.22, 1.41, 1.13], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [1.06, 0.95, 1.39, 1.01, 0.62, 1.02, 0.84, 1.24, 1.43, 1.35], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.98, 0.67, 0.98, 0.89, 0.69, 1.06, 1.62, 0.81, 1.39, 0.82], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [0.0, 1.92, 2.04, 2.73, 2.88, 2.43, 2.05, 1.26, 2.11, 2.03], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.24, 3.06, 1.94, 1.91, 1.61, 2.33, 2.66, 3.21, 2.04, 1.92], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.72, 1.14, 1.07, 1.23, 1.69, 1.15, 1.33, 1.63, 1.23, 1.47], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [0.0, 2.11, 2.43, 3.65, 1.85, 2.76, 1.77, 1.94, 0.94, 1.62], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.97, 1.56, 1.48, 1.3, 1.46, 1.69, 1.22, 2.19, 1.64, 1.56], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [1.03, 0.74, 0.79, 0.9, 0.89, 0.83, 1.05, 0.65, 0.62, 0.46], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.72, 1.74, 3.24, 2.13, 1.82, 1.22, 2.06, 1.72, 1.86, 2.01], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.98, 1.44, 1.24, 0.83, 2.2, 1.21, 1.39, 1.18, 1.23, 1.67], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [2.04, 1.64, 1.74, 1.45, 1.23, 1.94, 0.95, 1.42, 1.08, 1.5], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [1.95, 2.46, 2.72, 2.28, 2.68, 2.49, 2.28, 1.42, 1.95, 3.16], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [0.0, 0.96, 1.13, 2.04, 0.79, 0.49, 1.25, 0.88, 0.78, 1.14], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.29, 1.93, 1.45, 1.48, 1.3, 1.58, 0.74, 1.29, 0.65, 2.21], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [0.86, 0.61, 0.77, 0.55, 1.12, 0.92, 1.32, 1.45, 1.22, 1.12], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [0.53, 1.14, 1.14, 2.05, 0.95, 1.49, 0.85, 1.21, 0.61, 0.67], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [0.65, 0.88, 0.99, 1.82, 1.16, 1.86, 0.64, 0.72, 1.47, 1.05], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [0.0, 2.39, 1.49, 1.65, 1.41, 0.83, 1.48, 0.9, 1.7, 0.66], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.88, 0.73, 1.1, 1.36, 1.0, 1.0, 2.15, 1.48, 2.68, 0.99], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [0.89, 0.66, 0.65, 1.0, 0.91, 2.17, 1.0, 1.87, 1.0, 0.73], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.7, 0.5, 0.87, 0.32, 0.38, 0.32, 1.03, 0.65, 1.25, 0.94], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.89, 0.23, 0.44, 0.57, 0.28, 0.72, 1.75, 0.56, 1.2, 0.51], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [0.0, 2.5, 1.79, 2.19, 2.52, 1.47, 1.29, 1.4, 1.69, 2.04], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.73, 2.55, 1.72, 1.86, 2.12, 1.64, 1.93, 2.61, 1.64, 1.62], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.88, 1.05, 0.72, 0.71, 1.46, 0.99, 0.99, 1.54, 0.72, 1.18], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [0.0, 1.17, 1.87, 2.84, 0.98, 1.8, 1.06, 0.89, 0.64, 1.85], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.73, 1.59, 1.1, 1.99, 0.81, 1.3, 1.31, 2.22, 1.46, 1.01], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.65, 0.6, 0.2, 0.45, 0.56, 0.58, 0.99, 0.2, 0.79, 0.25], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.08, 0.65, 2.28, 1.17, 1.16, 0.44, 1.25, 1.3, 0.91, 1.18], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.34, 0.97, 0.91, 0.32, 2.06, 0.8, 0.64, 0.98, 0.97, 1.29], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.79, 1.19, 1.24, 0.6, 0.93, 1.73, 0.35, 0.93, 0.86, 0.86], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
