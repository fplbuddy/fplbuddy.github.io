const expectedGoalsData = {
  "Arsenal": { scores: [2.76, 1.82, 1.87, 2.22, 2.12, 1.58, 2.43, 2.65, 2.01, 2.01, 1.43, 2.17, 3.12], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.66, 1.32, 1.6, 0.0, 1.51, 1.54, 2.34, 1.63, 1.14, 1.59, 1.32, 1.72, 1.4], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [2.09, 1.55, 1.56, 1.87, 2.32, 1.87, 1.63, 1.36, 1.63, 0.8, 1.78, 1.17, 2.34], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.99, 1.33, 1.73, 1.32, 1.42, 1.66, 0.78, 1.71, 1.35, 1.58, 1.98, 1.58, 1.79], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [2.11, 1.36, 1.43, 1.03, 1.56, 1.19, 2.05, 1.44, 1.86, 1.46, 1.62, 1.09, 1.37], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.85, 3.22, 2.76, 0.95, 2.09, 1.94, 2.74, 1.7, 1.63, 1.47, 1.74, 1.93, 1.65], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.18, 1.46, 1.9, 0.0, 1.97, 1.45, 2.17, 1.27, 0.66, 1.3, 1.28, 1.72, 0.9], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.07, 1.07, 1.2, 1.39, 0.72, 0.6, 0.91, 0.87, 0.98, 1.51, 0.94, 1.78, 0.96], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.37, 1.64, 1.38, 1.57, 0.72, 1.11, 1.21, 1.52, 2.14, 1.39, 1.22, 1.46, 1.19], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [1.2, 0.98, 0.92, 1.08, 0.92, 1.42, 1.02, 0.62, 1.0, 0.82, 1.27, 1.4, 1.44], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [1.19, 1.19, 0.96, 1.04, 0.75, 1.06, 0.99, 0.79, 1.17, 1.74, 0.89, 1.48, 0.87], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [1.63, 2.32, 3.78, 0.0, 1.91, 2.0, 2.95, 2.86, 2.46, 2.09, 1.27, 2.16, 2.14], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.71, 2.15, 1.92, 2.43, 3.21, 1.98, 2.12, 1.67, 2.45, 2.88, 3.3, 2.13, 1.98], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [0.94, 1.81, 0.71, 1.6, 1.09, 1.04, 1.15, 1.63, 1.06, 1.28, 1.66, 1.17, 1.39], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.84, 1.27, 2.16, 0.0, 2.16, 2.38, 3.68, 1.81, 2.69, 1.8, 1.98, 0.93, 1.59], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.35, 0.84, 1.22, 1.87, 1.5, 1.44, 1.26, 1.43, 1.71, 1.24, 2.15, 1.71, 1.57], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.91, 0.78, 0.57, 1.08, 0.8, 0.81, 0.92, 0.97, 0.84, 1.07, 0.69, 0.63, 0.47], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [2.36, 1.54, 1.79, 1.66, 1.74, 3.15, 2.13, 1.84, 1.27, 2.16, 1.78, 1.81, 2.04], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.65, 1.88, 1.34, 0.98, 1.48, 1.25, 0.88, 2.2, 1.25, 1.43, 1.16, 1.28, 1.64], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.14, 1.36, 1.15, 2.0, 1.77, 1.7, 1.48, 1.2, 1.95, 0.98, 1.47, 1.13, 1.56], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [2.61, 2.16, 2.45, 1.93, 2.44, 2.75, 2.29, 2.69, 2.58, 2.24, 1.4, 1.97, 3.11], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [0.78, 1.16, 0.89, 0.0, 1.05, 1.19, 1.99, 0.81, 0.43, 1.24, 0.84, 0.82, 1.25], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.61, 1.29, 0.84, 1.34, 1.98, 1.44, 1.49, 1.41, 1.73, 0.67, 1.33, 0.6, 2.1], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.52, 1.71, 1.01, 0.77, 0.57, 0.71, 0.44, 1.18, 0.9, 1.39, 1.41, 1.16, 1.05], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [2.0, 1.06, 1.26, 0.44, 1.1, 1.18, 1.86, 0.9, 1.43, 0.83, 1.15, 0.58, 0.65], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [0.95, 2.29, 1.92, 0.54, 0.88, 0.95, 1.8, 1.09, 1.87, 0.62, 0.69, 1.55, 1.04], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.27, 1.33, 1.99, 0.0, 2.25, 1.52, 1.44, 1.29, 0.67, 1.44, 0.84, 1.61, 0.59], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.94, 1.32, 1.58, 1.88, 0.74, 1.03, 1.41, 0.94, 0.98, 2.2, 1.47, 2.67, 1.01], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.54, 1.28, 1.2, 0.95, 0.6, 0.68, 0.98, 0.92, 2.15, 1.02, 1.96, 1.03, 0.69], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.47, 0.82, 0.75, 0.77, 0.49, 0.91, 0.32, 0.35, 0.34, 1.1, 0.69, 1.14, 0.97], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.68, 0.76, 0.31, 1.0, 0.2, 0.46, 0.64, 0.29, 0.71, 1.72, 0.59, 1.24, 0.48], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [0.9, 1.4, 2.83, 0.0, 2.45, 1.65, 2.07, 2.26, 1.41, 1.15, 1.2, 1.68, 2.04], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [0.98, 1.07, 1.47, 1.78, 2.37, 1.77, 1.91, 2.09, 1.59, 1.88, 2.51, 1.55, 1.53], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.72, 1.88, 0.77, 1.77, 1.12, 0.69, 0.75, 1.51, 0.98, 1.03, 1.57, 0.72, 1.23], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.3, 0.49, 1.3, 0.0, 1.2, 1.73, 3.09, 0.98, 1.84, 1.16, 0.88, 0.57, 1.92], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [0.8, 0.81, 0.73, 1.7, 1.68, 1.07, 2.01, 0.8, 1.29, 1.36, 2.06, 1.39, 0.96], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.61, 0.2, 0.11, 0.67, 0.7, 0.21, 0.48, 0.56, 0.59, 0.88, 0.18, 0.84, 0.22], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.5, 0.59, 1.05, 1.04, 0.62, 2.23, 1.14, 1.2, 0.43, 1.2, 1.39, 0.89, 1.27], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.32, 1.52, 0.57, 1.25, 0.85, 0.77, 0.26, 1.9, 0.78, 0.57, 0.95, 0.9, 1.18], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.62, 0.97, 1.5, 1.69, 1.13, 1.21, 0.59, 0.98, 1.55, 0.28, 0.99, 0.9, 0.84], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 26; i <= gameweeks + 26 - 1; i++) {
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
