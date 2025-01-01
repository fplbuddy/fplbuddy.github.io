const expectedGoalsData = {
  "Arsenal": { scores: [1.96, 2.35, 2.41, 2.46, 1.67, 2.65, 2.82, 1.7, 1.86, 2.16, 2.13, 1.64, 2.59, 2.49, 2.12, 2.12, 1.37, 2.04, 2.94], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [2.44, 1.3, 0.82, 2.25, 1.96, 2.29, 1.72, 1.46, 1.79, 1.26, 1.56, 1.57, 2.34, 1.62, 1.15, 1.7, 1.47, 1.88, 1.48], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.31, 1.29, 1.22, 1.36, 1.09, 2.03, 1.97, 1.35, 1.41, 1.8, 1.99, 1.69, 1.47, 1.27, 1.49, 0.71, 1.67, 1.0, 2.12], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [2.21, 1.25, 1.19, 1.38, 1.77, 1.84, 1.99, 1.42, 1.81, 1.38, 1.32, 1.62, 0.78, 1.7, 1.28, 1.61, 1.87, 1.6, 1.85], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [0.79, 1.66, 1.24, 1.26, 1.13, 1.43, 1.95, 1.41, 1.41, 0.96, 1.6, 1.22, 2.03, 1.49, 1.88, 1.35, 1.63, 1.05, 1.35], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.75, 2.03, 2.72, 1.38, 2.7, 1.87, 2.0, 3.24, 2.92, 0.99, 2.25, 2.15, 2.75, 1.76, 1.81, 1.51, 1.69, 2.05, 1.63], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.36, 1.67, 1.54, 1.63, 1.17, 1.19, 1.16, 1.52, 1.81, 1.11, 1.85, 1.42, 0.91, 1.34, 0.65, 1.24, 1.28, 1.79, 0.86], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [0.8, 1.05, 1.03, 0.85, 1.33, 0.8, 0.94, 0.98, 1.07, 1.23, 0.6, 0.52, 0.74, 0.73, 0.81, 1.26, 0.8, 1.48, 0.77], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.97, 1.68, 1.81, 1.47, 1.21, 1.35, 1.45, 1.69, 1.34, 1.61, 0.71, 1.08, 1.26, 1.48, 2.01, 1.43, 1.3, 1.54, 1.14], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [1.01, 1.24, 0.92, 0.75, 1.86, 1.15, 1.29, 1.02, 1.01, 1.08, 1.01, 1.56, 1.03, 0.65, 0.97, 0.9, 1.43, 1.45, 1.55], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [1.1, 1.12, 1.13, 1.08, 0.87, 0.63, 1.37, 1.29, 0.99, 1.14, 0.76, 1.08, 1.04, 0.84, 1.3, 1.79, 0.9, 1.52, 0.97], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [2.35, 1.87, 2.46, 3.15, 2.02, 3.11, 1.58, 2.23, 3.71, 2.29, 2.07, 2.02, 3.09, 2.9, 2.58, 2.05, 1.31, 2.15, 2.32], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.73, 2.17, 2.41, 2.09, 1.0, 1.97, 1.53, 1.97, 1.65, 2.19, 2.96, 1.8, 2.05, 1.59, 2.33, 2.75, 2.84, 2.06, 1.78], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [0.85, 2.11, 1.41, 1.15, 1.32, 1.27, 1.02, 1.79, 0.74, 1.65, 1.06, 1.04, 1.1, 1.77, 1.15, 1.4, 1.76, 1.16, 1.5], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.88, 2.63, 1.96, 2.72, 1.97, 1.33, 1.82, 1.27, 2.26, 1.96, 2.4, 2.45, 1.99, 1.93, 2.66, 1.81, 1.99, 0.95, 1.75], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.53, 0.98, 2.11, 1.15, 1.41, 1.15, 1.1, 0.74, 1.04, 1.55, 1.34, 1.3, 1.18, 1.27, 1.62, 1.14, 1.91, 1.52, 1.34], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.95, 0.68, 0.63, 0.75, 0.92, 0.78, 0.83, 0.69, 0.5, 1.04, 0.78, 0.75, 0.89, 0.9, 0.78, 0.97, 0.61, 0.6, 0.44], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.91, 0.97, 1.53, 2.86, 2.1, 2.01, 2.33, 1.56, 1.99, 1.73, 1.75, 3.17, 2.3, 1.84, 1.28, 2.29, 1.98, 1.96, 2.12], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.94, 1.39, 1.38, 1.36, 1.22, 1.69, 0.67, 2.0, 1.33, 1.07, 1.6, 1.39, 0.89, 2.21, 1.28, 1.54, 1.21, 1.28, 1.63], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.36, 1.22, 1.29, 0.83, 1.67, 0.95, 1.28, 1.48, 1.31, 2.04, 1.96, 1.73, 1.63, 1.29, 2.12, 1.0, 1.57, 1.27, 1.8], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [2.26, 1.9, 2.2, 2.19, 1.84, 2.66, 2.55, 2.38, 2.38, 1.86, 2.46, 2.97, 2.3, 2.6, 2.61, 2.45, 1.35, 1.92, 3.22], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.66, 1.75, 0.45, 1.28, 0.94, 1.59, 0.68, 1.1, 0.82, 0.51, 1.01, 1.36, 2.06, 0.72, 0.48, 1.19, 0.94, 0.71, 1.11], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [2.24, 0.66, 0.7, 1.59, 0.67, 2.29, 1.4, 1.22, 0.68, 1.26, 1.82, 1.25, 1.42, 1.31, 1.59, 0.6, 1.15, 0.64, 1.89], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.92, 0.57, 0.43, 0.98, 0.61, 0.92, 1.27, 1.88, 0.83, 0.83, 0.45, 0.58, 0.37, 1.12, 0.99, 1.23, 1.2, 1.07, 0.83], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [0.71, 1.44, 1.22, 2.13, 1.22, 0.77, 2.18, 1.29, 1.31, 0.56, 1.05, 1.21, 1.78, 0.92, 1.39, 0.82, 1.04, 0.58, 0.6], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.29, 1.37, 1.37, 0.62, 1.48, 1.19, 0.9, 2.52, 1.86, 0.58, 0.87, 0.99, 1.79, 1.14, 2.21, 0.65, 0.68, 1.56, 1.31], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [0.87, 1.63, 1.26, 1.26, 1.34, 2.25, 1.17, 1.16, 1.83, 0.71, 2.29, 1.48, 0.64, 1.41, 0.6, 1.6, 0.69, 1.4, 0.49], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.35, 1.36, 1.08, 1.42, 2.1, 1.52, 1.8, 1.21, 1.35, 1.72, 0.63, 0.97, 1.54, 1.02, 0.82, 2.03, 1.37, 2.74, 0.87], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.82, 1.25, 1.62, 1.59, 0.7, 1.59, 1.57, 1.14, 1.22, 0.89, 0.6, 0.66, 1.15, 0.86, 2.29, 0.92, 2.24, 1.01, 0.84], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.7, 0.95, 0.45, 0.21, 2.0, 0.5, 0.48, 0.83, 0.82, 1.06, 0.68, 0.89, 0.32, 0.41, 0.35, 1.42, 0.77, 1.09, 0.98], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.44, 0.95, 0.81, 0.29, 1.32, 0.35, 0.68, 0.68, 0.27, 0.96, 0.26, 0.43, 0.66, 0.27, 0.6, 1.89, 0.74, 1.17, 0.6], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [2.13, 1.87, 1.53, 2.36, 1.67, 1.94, 1.08, 1.41, 3.02, 1.42, 2.75, 1.69, 2.05, 2.17, 1.39, 1.1, 1.27, 1.75, 2.11], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.95, 1.43, 2.0, 1.26, 0.94, 1.32, 1.03, 1.05, 1.77, 1.92, 2.33, 1.77, 2.02, 2.42, 1.58, 1.84, 2.71, 1.84, 1.6], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [0.47, 2.52, 1.45, 1.15, 1.55, 0.67, 1.96, 1.8, 0.78, 1.61, 1.31, 0.83, 0.69, 1.38, 1.13, 1.0, 1.49, 0.64, 1.14], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [0.74, 1.47, 1.48, 2.37, 1.49, 0.7, 1.67, 0.54, 1.33, 1.65, 1.33, 1.7, 1.67, 0.99, 1.9, 1.29, 0.93, 0.65, 2.32], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.28, 0.77, 2.67, 1.28, 1.61, 1.3, 0.81, 0.91, 0.96, 1.7, 1.73, 1.04, 2.38, 0.79, 1.39, 1.45, 2.03, 1.39, 0.98], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.55, 0.6, 0.6, 0.33, 0.78, 0.65, 0.71, 0.19, 0.12, 0.65, 0.79, 0.21, 0.48, 0.55, 0.67, 0.83, 0.29, 1.14, 0.26], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [0.76, 0.47, 1.79, 1.7, 0.85, 1.4, 1.37, 0.7, 1.22, 1.0, 0.53, 2.36, 0.98, 1.4, 0.38, 1.08, 1.39, 0.77, 1.29], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.32, 0.94, 1.07, 0.53, 0.34, 0.8, 0.3, 1.37, 0.52, 1.46, 0.71, 0.92, 0.23, 2.03, 0.77, 0.51, 0.86, 1.09, 1.06], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.08, 0.36, 0.33, 0.43, 0.7, 0.22, 0.7, 0.93, 1.71, 1.76, 1.0, 1.05, 0.5, 0.85, 1.36, 0.32, 0.98, 0.84, 0.79], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 20; i <= gameweeks + 20 - 1; i++) {
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
