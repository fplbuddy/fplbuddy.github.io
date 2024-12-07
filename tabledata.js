const expectedGoalsData = {
  "Arsenal": { scores: [2.15, 1.75, 3.22, 2.3, 1.92, 2.18, 2.54, 2.6, 1.65, 2.58, 3.04, 1.87, 1.7, 2.2, 2.35, 1.77, 2.8, 2.65, 2.13, 2.35, 1.27, 2.27, 3.08], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.53, 1.35, 1.54, 1.92, 2.57, 1.45, 0.87, 2.49, 2.13, 2.64, 1.8, 1.44, 1.89, 1.27, 1.58, 1.86, 2.53, 1.87, 1.11, 1.93, 1.59, 1.79, 1.4], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [2.04, 1.14, 1.43, 1.3, 1.44, 1.21, 1.26, 1.52, 1.04, 2.07, 2.12, 1.29, 1.2, 1.88, 2.16, 1.68, 1.58, 1.18, 1.39, 0.71, 1.71, 0.91, 2.1], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.34, 1.68, 1.43, 0.95, 2.29, 1.22, 1.15, 1.3, 1.62, 1.86, 1.91, 1.6, 1.89, 1.44, 1.39, 1.63, 0.78, 1.74, 1.39, 1.54, 1.97, 1.75, 1.93], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.43, 1.68, 1.87, 1.4, 0.86, 1.78, 1.14, 1.44, 1.25, 1.47, 2.07, 1.58, 1.57, 0.91, 1.7, 1.18, 2.1, 1.54, 2.04, 1.52, 1.74, 1.04, 1.2], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [2.76, 1.75, 2.32, 2.62, 1.73, 2.32, 3.12, 1.34, 3.0, 1.9, 2.07, 3.69, 3.09, 1.04, 2.15, 2.27, 3.18, 1.91, 2.12, 1.53, 1.85, 2.05, 1.84], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.12, 0.75, 1.13, 2.19, 1.28, 1.5, 1.46, 1.63, 0.99, 1.26, 1.13, 1.49, 1.88, 1.09, 1.8, 1.36, 0.79, 1.37, 0.62, 1.32, 1.05, 1.84, 0.74], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [0.48, 0.99, 0.61, 1.02, 0.87, 1.15, 0.98, 0.87, 1.41, 0.79, 0.93, 1.04, 1.17, 1.37, 0.57, 0.58, 0.84, 0.74, 0.82, 1.45, 0.87, 1.69, 0.84], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [0.85, 2.49, 1.2, 1.56, 2.14, 1.66, 1.71, 1.38, 1.24, 1.51, 1.42, 1.73, 1.28, 1.45, 0.7, 1.03, 1.29, 1.46, 2.05, 1.39, 1.43, 1.53, 1.1], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [1.42, 1.25, 0.58, 1.21, 1.06, 1.28, 0.9, 0.7, 2.05, 1.15, 1.19, 0.93, 0.96, 1.24, 1.06, 1.73, 0.99, 0.7, 1.03, 0.97, 1.53, 1.41, 1.67], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [1.03, 1.74, 0.7, 0.91, 1.15, 1.17, 1.29, 0.99, 0.97, 0.71, 1.54, 1.38, 1.0, 1.14, 0.75, 1.25, 1.06, 0.85, 1.43, 2.06, 1.03, 1.77, 1.07], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [2.3, 1.75, 3.06, 2.45, 2.02, 1.83, 2.25, 3.15, 1.89, 3.08, 1.33, 2.22, 3.65, 2.05, 2.1, 1.89, 2.97, 2.52, 2.13, 1.77, 1.25, 1.88, 2.08], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.05, 2.07, 2.12, 2.55, 3.0, 2.27, 2.62, 2.17, 1.04, 2.25, 1.53, 1.77, 1.84, 2.31, 3.09, 1.68, 2.11, 1.75, 2.51, 3.12, 3.04, 2.32, 1.91], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [0.87, 1.51, 1.67, 1.46, 0.82, 2.41, 1.5, 1.24, 1.37, 1.15, 1.14, 2.07, 0.82, 1.66, 1.2, 1.06, 1.2, 2.03, 1.25, 1.48, 1.96, 1.16, 1.64], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [2.64, 2.23, 2.14, 1.44, 1.51, 2.66, 1.98, 2.6, 1.98, 1.14, 1.91, 1.07, 2.11, 1.8, 2.36, 2.17, 1.74, 1.76, 2.71, 1.62, 1.85, 0.89, 1.81], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.41, 1.27, 1.2, 0.98, 1.44, 0.86, 2.07, 1.07, 1.29, 1.07, 1.04, 0.71, 0.91, 1.47, 1.14, 1.16, 1.19, 0.99, 1.55, 0.97, 1.73, 1.38, 1.22], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.9, 0.8, 1.25, 0.72, 1.15, 0.7, 0.77, 0.94, 1.09, 0.97, 0.96, 0.74, 0.52, 1.3, 0.88, 0.74, 1.05, 1.03, 0.97, 1.06, 0.68, 0.73, 0.53], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [2.69, 1.35, 1.63, 2.76, 1.99, 0.92, 1.55, 2.74, 2.01, 1.81, 2.32, 1.44, 2.06, 1.69, 1.58, 3.27, 2.27, 1.98, 1.11, 2.19, 1.86, 1.83, 2.04], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.32, 1.59, 2.1, 1.05, 0.92, 1.6, 1.45, 1.42, 1.23, 1.9, 0.72, 2.13, 1.55, 1.2, 1.77, 1.6, 0.87, 2.55, 1.31, 1.48, 1.16, 1.54, 1.8], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [2.14, 1.71, 1.37, 1.19, 1.5, 1.24, 1.2, 0.85, 1.69, 0.85, 1.28, 1.56, 1.43, 2.04, 2.02, 1.76, 1.44, 1.13, 2.08, 0.9, 1.55, 1.16, 1.85], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [3.11, 2.37, 2.81, 1.93, 2.12, 1.99, 2.11, 2.14, 1.76, 2.47, 2.44, 2.46, 2.19, 1.76, 2.48, 2.81, 2.28, 2.48, 2.7, 2.46, 1.43, 2.06, 2.95], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.22, 0.63, 0.59, 1.23, 1.58, 1.59, 0.39, 1.2, 0.93, 1.59, 0.63, 1.13, 0.76, 0.65, 0.91, 1.57, 1.76, 0.86, 0.4, 1.24, 0.91, 0.8, 0.97], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.34, 1.1, 1.61, 1.05, 2.09, 0.49, 0.69, 1.71, 0.75, 1.9, 1.39, 1.03, 0.64, 1.19, 1.73, 1.01, 1.38, 1.27, 1.44, 0.48, 1.02, 0.49, 1.72], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [0.32, 1.4, 0.77, 0.5, 1.58, 0.51, 0.53, 0.98, 0.67, 0.75, 1.07, 1.77, 0.76, 0.77, 0.47, 0.51, 0.31, 1.07, 1.06, 1.14, 1.08, 1.08, 0.78], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.63, 1.02, 1.2, 0.74, 0.73, 1.39, 1.11, 2.1, 1.37, 0.75, 1.91, 1.38, 1.39, 0.5, 1.03, 1.28, 1.73, 0.88, 1.35, 0.99, 1.06, 0.76, 0.65], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.3, 1.86, 1.5, 1.5, 1.38, 1.48, 1.51, 0.57, 1.46, 1.15, 0.82, 2.38, 1.85, 0.55, 1.03, 0.98, 1.85, 1.16, 2.21, 0.85, 0.78, 1.56, 1.48], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.2, 0.87, 1.2, 2.43, 0.88, 1.55, 1.17, 1.36, 1.27, 2.27, 1.21, 1.19, 1.91, 0.83, 2.08, 1.54, 0.61, 1.54, 0.59, 1.9, 0.78, 1.56, 0.62], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [0.58, 0.87, 0.6, 1.88, 1.18, 1.17, 1.06, 1.18, 1.89, 1.42, 1.6, 1.01, 1.2, 1.5, 0.61, 0.85, 1.52, 0.87, 0.6, 1.9, 1.2, 2.42, 0.82], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [0.5, 2.26, 0.49, 1.37, 1.73, 1.01, 1.37, 1.44, 0.69, 1.72, 1.62, 1.05, 1.04, 0.92, 0.48, 0.75, 1.03, 0.74, 1.9, 0.73, 2.09, 0.87, 0.74], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.59, 0.54, 0.2, 0.36, 0.59, 0.85, 0.36, 0.21, 1.68, 0.36, 0.49, 0.63, 0.76, 1.15, 0.58, 0.86, 0.21, 0.35, 0.33, 1.17, 0.7, 0.85, 0.83], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.36, 0.91, 0.23, 0.39, 0.38, 1.11, 0.9, 0.32, 1.22, 0.38, 0.74, 0.59, 0.23, 0.95, 0.23, 0.57, 0.61, 0.4, 0.63, 1.73, 0.89, 1.22, 0.61], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [2.14, 1.29, 2.48, 1.74, 2.2, 2.12, 1.58, 2.49, 1.77, 2.15, 1.08, 1.71, 2.96, 1.4, 2.82, 1.79, 2.1, 2.13, 1.64, 1.08, 1.4, 1.77, 2.38], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.09, 1.29, 2.71, 2.02, 1.99, 1.47, 2.03, 1.31, 0.96, 1.59, 1.33, 1.18, 2.01, 2.01, 2.37, 1.73, 2.26, 2.38, 1.64, 2.03, 2.54, 2.01, 1.67], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [0.65, 1.59, 1.27, 1.19, 0.66, 2.48, 1.6, 1.26, 1.85, 0.82, 1.97, 1.97, 0.91, 1.6, 1.59, 0.93, 0.87, 1.62, 1.25, 1.07, 1.57, 0.65, 1.24], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.78, 1.44, 1.08, 1.16, 0.68, 1.44, 1.42, 1.96, 1.44, 0.53, 1.78, 0.54, 1.06, 1.68, 1.24, 1.43, 1.5, 0.77, 1.79, 1.09, 0.79, 0.51, 2.15], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.08, 0.93, 0.98, 1.8, 1.11, 0.81, 2.32, 1.09, 1.43, 1.11, 0.74, 0.77, 0.79, 1.44, 1.5, 0.78, 2.16, 0.69, 1.25, 1.33, 1.79, 1.07, 0.79], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.34, 0.42, 0.62, 0.56, 0.51, 0.45, 0.63, 0.37, 0.64, 0.63, 0.63, 0.12, 0.13, 0.65, 0.83, 0.19, 0.4, 0.39, 0.65, 0.64, 0.24, 0.93, 0.23], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [2.04, 0.87, 1.5, 1.52, 1.1, 0.57, 1.87, 1.86, 0.99, 1.58, 1.51, 0.85, 1.5, 1.18, 0.58, 2.39, 1.18, 1.86, 0.59, 1.14, 1.75, 0.84, 1.5], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.65, 0.94, 1.43, 0.43, 0.25, 0.95, 1.16, 0.41, 0.25, 0.78, 0.24, 1.26, 0.61, 1.27, 0.67, 0.93, 0.26, 1.79, 0.65, 0.56, 0.71, 1.25, 0.95], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.2, 0.88, 0.94, 0.32, 1.19, 0.35, 0.22, 0.37, 0.59, 0.23, 0.6, 0.89, 1.55, 1.37, 0.85, 0.89, 0.52, 0.66, 1.2, 0.22, 0.88, 0.79, 0.73], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 16; i <= gameweeks + 16 - 1; i++) {
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
