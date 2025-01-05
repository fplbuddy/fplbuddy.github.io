const expectedGoalsData = {
  "Arsenal": { scores: [2.38, 2.43, 2.49, 1.68, 2.68, 2.85, 1.72, 1.88, 2.18, 2.15, 1.66, 2.66, 2.52, 2.14, 2.14, 1.39, 2.05, 2.97], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.31, 0.83, 2.25, 1.96, 2.29, 1.71, 1.46, 1.82, 1.26, 1.56, 1.56, 2.35, 1.62, 1.15, 1.69, 1.47, 1.87, 1.48], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.29, 1.22, 1.36, 1.09, 2.04, 1.96, 1.36, 1.41, 1.82, 1.99, 1.69, 1.47, 1.27, 1.48, 0.72, 1.67, 1.0, 2.11], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.25, 1.19, 1.38, 1.77, 1.84, 2.0, 1.42, 1.81, 1.39, 1.33, 1.62, 0.78, 1.7, 1.28, 1.61, 1.88, 1.6, 1.85], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.66, 1.24, 1.25, 1.13, 1.43, 1.96, 1.41, 1.41, 0.96, 1.6, 1.22, 2.03, 1.51, 1.87, 1.35, 1.64, 1.05, 1.36], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [2.03, 2.71, 1.38, 2.7, 1.88, 2.0, 3.24, 2.92, 0.99, 2.25, 2.18, 2.75, 1.76, 1.81, 1.51, 1.69, 2.05, 1.63], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.67, 1.54, 1.65, 1.17, 1.19, 1.16, 1.51, 1.81, 1.11, 1.85, 1.42, 0.91, 1.33, 0.65, 1.23, 1.28, 1.78, 0.86], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.05, 1.03, 0.86, 1.33, 0.8, 0.94, 1.0, 1.07, 1.23, 0.6, 0.52, 0.74, 0.73, 0.82, 1.25, 0.8, 1.48, 0.77], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.68, 1.82, 1.47, 1.21, 1.35, 1.45, 1.69, 1.34, 1.61, 0.71, 1.08, 1.26, 1.48, 2.02, 1.43, 1.29, 1.56, 1.14], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [1.24, 0.91, 0.75, 1.86, 1.15, 1.29, 1.02, 1.01, 1.08, 1.01, 1.56, 1.03, 0.66, 0.97, 0.9, 1.44, 1.46, 1.55], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [1.12, 1.12, 1.08, 0.87, 0.63, 1.39, 1.3, 0.99, 1.13, 0.76, 1.07, 1.04, 0.83, 1.3, 1.79, 0.9, 1.52, 0.97], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [1.87, 2.5, 3.15, 2.02, 3.11, 1.58, 2.23, 3.7, 2.29, 2.07, 2.02, 3.09, 2.91, 2.58, 2.05, 1.31, 2.15, 2.32], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.21, 2.42, 2.08, 1.01, 1.97, 1.53, 1.98, 1.65, 2.18, 2.95, 1.8, 2.05, 1.59, 2.33, 2.74, 2.85, 2.05, 1.79], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [2.11, 1.41, 1.15, 1.32, 1.27, 1.02, 1.79, 0.75, 1.65, 1.06, 1.04, 1.1, 1.77, 1.15, 1.42, 1.76, 1.16, 1.5], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [2.62, 1.96, 2.72, 1.96, 1.34, 1.82, 1.27, 2.26, 1.95, 2.43, 2.45, 1.98, 1.93, 2.66, 1.81, 1.99, 0.96, 1.75], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [0.98, 2.11, 1.15, 1.41, 1.15, 1.1, 0.74, 1.04, 1.56, 1.34, 1.3, 1.18, 1.27, 1.64, 1.14, 1.9, 1.53, 1.34], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.69, 0.63, 0.75, 0.92, 0.78, 0.83, 0.69, 0.5, 1.04, 0.78, 0.75, 0.89, 0.9, 0.78, 0.98, 0.61, 0.6, 0.44], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [0.97, 1.54, 2.86, 2.14, 2.01, 2.34, 1.56, 1.99, 1.73, 1.75, 3.17, 2.31, 1.84, 1.28, 2.29, 1.98, 1.96, 2.11], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.39, 1.38, 1.36, 1.22, 1.71, 0.68, 1.99, 1.33, 1.07, 1.61, 1.38, 0.89, 2.21, 1.28, 1.53, 1.22, 1.28, 1.63], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.22, 1.3, 0.83, 1.67, 0.95, 1.28, 1.47, 1.31, 2.04, 1.96, 1.73, 1.63, 1.29, 2.12, 1.0, 1.57, 1.27, 1.82], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [1.89, 2.19, 2.18, 1.83, 2.66, 2.54, 2.37, 2.37, 1.85, 2.45, 2.97, 2.29, 2.59, 2.6, 2.44, 1.35, 1.91, 3.22], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.75, 0.44, 1.28, 0.94, 1.59, 0.68, 1.1, 0.82, 0.51, 1.01, 1.36, 2.06, 0.72, 0.49, 1.19, 0.94, 0.71, 1.11], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [0.66, 0.7, 1.59, 0.66, 2.29, 1.39, 1.22, 0.69, 1.25, 1.82, 1.25, 1.42, 1.32, 1.59, 0.59, 1.15, 0.64, 1.89], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [0.55, 0.41, 0.96, 0.59, 0.9, 1.25, 1.85, 0.81, 0.81, 0.44, 0.56, 0.35, 1.1, 0.97, 1.21, 1.18, 1.05, 0.81], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.45, 1.22, 2.13, 1.23, 0.77, 2.18, 1.29, 1.3, 0.56, 1.05, 1.21, 1.77, 0.91, 1.39, 0.82, 1.05, 0.58, 0.6], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.37, 1.37, 0.62, 1.48, 1.2, 0.9, 2.51, 1.86, 0.57, 0.87, 0.99, 1.79, 1.14, 2.21, 0.64, 0.68, 1.56, 1.31], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.63, 1.26, 1.25, 1.34, 2.24, 1.17, 1.16, 1.82, 0.71, 2.3, 1.48, 0.65, 1.4, 0.59, 1.59, 0.69, 1.4, 0.49], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.35, 1.08, 1.43, 2.1, 1.52, 1.8, 1.21, 1.35, 1.71, 0.63, 0.95, 1.54, 1.02, 0.82, 2.03, 1.37, 2.74, 0.87], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.25, 1.63, 1.58, 0.7, 1.58, 1.57, 1.15, 1.22, 0.89, 0.58, 0.66, 1.15, 0.86, 2.29, 0.92, 2.24, 1.01, 0.84], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.95, 0.45, 0.21, 2.0, 0.51, 0.48, 0.83, 0.82, 1.06, 0.68, 0.89, 0.32, 0.4, 0.35, 1.43, 0.76, 1.09, 0.98], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.94, 0.81, 0.29, 1.32, 0.34, 0.68, 0.68, 0.27, 0.96, 0.26, 0.43, 0.66, 0.27, 0.6, 1.88, 0.75, 1.16, 0.6], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [1.87, 1.52, 2.36, 1.68, 1.93, 1.09, 1.41, 3.02, 1.42, 2.75, 1.7, 2.04, 2.17, 1.39, 1.11, 1.25, 1.75, 2.11], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.43, 2.0, 1.26, 0.93, 1.31, 1.03, 1.05, 1.77, 1.92, 2.33, 1.77, 2.02, 2.42, 1.58, 1.84, 2.71, 1.84, 1.6], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [2.52, 1.45, 1.15, 1.55, 0.67, 1.96, 1.8, 0.76, 1.61, 1.31, 0.82, 0.69, 1.38, 1.13, 0.99, 1.48, 0.64, 1.13], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.47, 1.48, 2.37, 1.49, 0.7, 1.67, 0.54, 1.33, 1.65, 1.32, 1.71, 1.67, 0.99, 1.9, 1.3, 0.93, 0.64, 2.32], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [0.77, 2.67, 1.29, 1.61, 1.3, 0.81, 0.89, 0.96, 1.7, 1.73, 1.05, 2.38, 0.8, 1.39, 1.46, 2.03, 1.39, 0.98], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.6, 0.6, 0.33, 0.78, 0.65, 0.71, 0.2, 0.12, 0.65, 0.78, 0.21, 0.48, 0.55, 0.66, 0.83, 0.29, 1.14, 0.25], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [0.46, 1.79, 1.7, 0.85, 1.4, 1.38, 0.69, 1.22, 1.0, 0.53, 2.36, 0.98, 1.4, 0.38, 1.08, 1.39, 0.77, 1.29], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.93, 1.07, 0.53, 0.34, 0.79, 0.29, 1.37, 0.52, 1.46, 0.71, 0.92, 0.23, 2.03, 0.77, 0.5, 0.86, 1.09, 1.06], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.36, 0.33, 0.41, 0.7, 0.22, 0.7, 0.92, 1.71, 1.76, 1.0, 1.05, 0.5, 0.85, 1.36, 0.32, 0.97, 0.84, 0.78], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 21; i <= gameweeks + 21 - 1; i++) {
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
