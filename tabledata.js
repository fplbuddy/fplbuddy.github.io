const expectedGoalsData = {
  "Arsenal": { scores: [1.72, 3.14, 2.25, 1.9, 2.24, 2.43, 2.52, 1.66, 2.52, 2.92, 1.85, 1.75, 2.21, 2.25, 1.73, 2.74, 2.58, 2.1, 2.28, 1.24, 2.33, 2.91], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.33, 1.53, 1.86, 2.46, 1.38, 0.83, 2.34, 2.02, 2.52, 1.77, 1.38, 1.81, 1.21, 1.52, 1.8, 2.33, 1.87, 1.09, 1.8, 1.5, 1.8, 1.4], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.19, 1.43, 1.26, 1.44, 1.24, 1.31, 1.54, 1.04, 1.99, 2.1, 1.3, 1.26, 1.88, 2.15, 1.64, 1.54, 1.18, 1.45, 0.71, 1.66, 0.93, 2.1], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.77, 1.5, 0.99, 2.3, 1.31, 1.2, 1.36, 1.77, 1.9, 1.99, 1.66, 1.92, 1.48, 1.51, 1.74, 0.82, 1.83, 1.46, 1.68, 2.04, 1.77, 1.99], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.64, 1.88, 1.36, 0.86, 1.77, 1.19, 1.44, 1.26, 1.51, 1.99, 1.56, 1.54, 0.93, 1.66, 1.18, 2.09, 1.54, 2.0, 1.59, 1.72, 1.04, 1.26], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.79, 2.33, 2.68, 1.78, 2.37, 3.18, 1.41, 3.03, 1.97, 2.07, 3.67, 3.17, 1.07, 2.32, 2.34, 3.26, 1.91, 2.18, 1.57, 1.98, 2.21, 1.91], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [0.76, 1.14, 2.15, 1.34, 1.53, 1.46, 1.67, 1.06, 1.28, 1.12, 1.48, 1.91, 1.16, 1.77, 1.41, 0.83, 1.39, 0.63, 1.36, 1.12, 1.86, 0.75], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.01, 0.62, 1.03, 0.86, 1.11, 1.03, 0.87, 1.4, 0.79, 0.97, 1.03, 1.15, 1.34, 0.57, 0.58, 0.84, 0.76, 0.83, 1.44, 0.84, 1.62, 0.88], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [2.39, 1.22, 1.54, 2.12, 1.62, 1.7, 1.43, 1.29, 1.52, 1.41, 1.7, 1.28, 1.51, 0.7, 1.02, 1.26, 1.49, 1.96, 1.35, 1.42, 1.52, 1.12], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [1.29, 0.57, 1.22, 1.02, 1.28, 0.92, 0.69, 1.96, 1.1, 1.24, 0.96, 0.95, 1.24, 1.04, 1.7, 1.0, 0.7, 1.06, 0.95, 1.52, 1.39, 1.62], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [1.75, 0.71, 0.95, 1.14, 1.19, 1.28, 1.05, 0.98, 0.72, 1.56, 1.37, 1.03, 1.21, 0.78, 1.33, 1.08, 0.86, 1.44, 2.02, 1.05, 1.79, 1.07], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [1.83, 3.04, 2.38, 2.11, 1.83, 2.24, 3.12, 1.86, 3.04, 1.35, 2.31, 3.51, 1.98, 2.08, 1.83, 2.9, 2.5, 2.22, 1.8, 1.25, 1.89, 2.08], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.01, 2.12, 2.54, 2.95, 2.27, 2.6, 2.23, 1.04, 2.35, 1.53, 1.85, 1.86, 2.33, 3.09, 1.76, 2.11, 1.74, 2.45, 3.09, 2.93, 2.3, 1.86], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.51, 1.67, 1.54, 0.82, 2.35, 1.53, 1.22, 1.39, 1.22, 1.14, 2.09, 0.83, 1.67, 1.22, 1.1, 1.27, 2.04, 1.24, 1.49, 1.94, 1.2, 1.61], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [2.22, 2.08, 1.5, 1.58, 2.63, 1.96, 2.5, 1.93, 1.17, 1.93, 1.07, 2.06, 1.8, 2.35, 2.16, 1.82, 1.71, 2.7, 1.63, 1.89, 0.89, 1.8], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.34, 1.33, 1.02, 1.5, 0.9, 2.1, 1.11, 1.37, 1.09, 1.13, 0.75, 0.98, 1.53, 1.26, 1.18, 1.25, 1.09, 1.63, 1.02, 1.82, 1.42, 1.31], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.74, 1.17, 0.69, 1.1, 0.7, 0.74, 0.93, 1.04, 0.92, 0.93, 0.73, 0.5, 1.23, 0.84, 0.74, 0.98, 0.96, 0.9, 1.01, 0.67, 0.69, 0.51], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.37, 1.67, 2.78, 2.11, 0.94, 1.56, 2.77, 2.04, 1.92, 2.34, 1.5, 2.07, 1.67, 1.64, 3.21, 2.28, 2.03, 1.13, 2.17, 1.9, 1.81, 2.1], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.59, 1.99, 1.04, 0.93, 1.54, 1.44, 1.37, 1.24, 1.88, 0.71, 2.1, 1.6, 1.18, 1.73, 1.56, 0.85, 2.43, 1.3, 1.53, 1.2, 1.54, 1.77], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.67, 1.41, 1.22, 1.49, 1.27, 1.2, 0.84, 1.61, 0.83, 1.24, 1.49, 1.39, 1.93, 1.94, 1.71, 1.49, 1.16, 2.03, 0.9, 1.54, 1.14, 1.82], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [2.33, 2.83, 1.85, 2.12, 1.96, 2.18, 2.17, 1.76, 2.44, 2.46, 2.37, 2.17, 1.71, 2.49, 2.81, 2.21, 2.49, 2.67, 2.47, 1.43, 2.06, 3.02], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [0.67, 0.62, 1.28, 1.6, 1.64, 0.44, 1.27, 1.0, 1.66, 0.63, 1.14, 0.73, 0.69, 0.95, 1.53, 1.89, 0.9, 0.43, 1.3, 0.95, 0.82, 1.0], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.1, 1.6, 1.07, 2.12, 0.47, 0.71, 1.64, 0.78, 2.0, 1.44, 1.05, 0.63, 1.14, 1.78, 1.05, 1.41, 1.25, 1.44, 0.51, 1.11, 0.5, 1.72], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.31, 0.77, 0.52, 1.66, 0.52, 0.53, 0.94, 0.65, 0.76, 1.05, 1.78, 0.82, 0.77, 0.47, 0.48, 0.32, 1.07, 0.98, 1.12, 1.1, 1.09, 0.81], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.02, 1.12, 0.78, 0.75, 1.39, 1.08, 2.1, 1.27, 0.7, 1.97, 1.36, 1.39, 0.48, 1.09, 1.23, 1.69, 0.8, 1.36, 0.98, 1.08, 0.76, 0.62], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.82, 1.47, 1.48, 1.31, 1.45, 1.5, 0.54, 1.44, 1.11, 0.85, 2.42, 1.78, 0.55, 0.97, 0.87, 1.84, 1.13, 2.18, 0.83, 0.75, 1.5, 1.35], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [0.89, 1.19, 2.51, 0.84, 1.52, 1.19, 1.29, 1.25, 2.28, 1.22, 1.26, 1.93, 0.83, 2.16, 1.54, 0.61, 1.54, 0.61, 1.8, 0.75, 1.6, 0.63], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [0.84, 0.6, 1.8, 1.19, 1.26, 1.05, 1.19, 1.87, 1.4, 1.59, 0.95, 1.24, 1.53, 0.62, 0.89, 1.44, 0.88, 0.57, 1.93, 1.21, 2.5, 0.82], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [2.38, 0.49, 1.42, 1.8, 1.07, 1.39, 1.47, 0.73, 1.67, 1.63, 1.13, 1.08, 0.94, 0.53, 0.8, 1.08, 0.74, 2.03, 0.83, 2.15, 0.85, 0.78], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.55, 0.21, 0.34, 0.6, 0.86, 0.37, 0.22, 1.77, 0.4, 0.48, 0.62, 0.74, 1.08, 0.58, 0.9, 0.19, 0.38, 0.34, 1.19, 0.65, 0.83, 0.85], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.94, 0.24, 0.4, 0.43, 1.09, 0.92, 0.31, 1.23, 0.4, 0.69, 0.61, 0.21, 0.94, 0.23, 0.58, 0.62, 0.41, 0.65, 1.82, 0.81, 1.25, 0.62], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [1.27, 2.46, 1.77, 2.19, 2.04, 1.51, 2.52, 1.78, 2.19, 1.09, 1.72, 3.04, 1.49, 2.83, 1.8, 2.13, 2.11, 1.62, 1.04, 1.44, 1.78, 2.35], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.32, 2.68, 1.94, 1.97, 1.35, 2.0, 1.22, 0.95, 1.55, 1.29, 1.11, 1.87, 1.97, 2.3, 1.66, 2.19, 2.34, 1.68, 2.02, 2.57, 1.97, 1.63], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.52, 1.22, 1.12, 0.61, 2.48, 1.52, 1.19, 1.73, 0.73, 1.89, 1.91, 0.87, 1.49, 1.42, 0.86, 0.81, 1.57, 1.17, 0.93, 1.51, 0.55, 1.23], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.38, 1.08, 1.07, 0.61, 1.4, 1.35, 1.96, 1.38, 0.48, 1.61, 0.5, 1.01, 1.57, 1.1, 1.33, 1.41, 0.77, 1.74, 1.02, 0.69, 0.49, 2.08], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [0.85, 0.94, 1.79, 1.13, 0.8, 2.39, 1.08, 1.42, 1.1, 0.73, 0.79, 0.78, 1.45, 1.47, 0.83, 2.15, 0.65, 1.17, 1.28, 1.75, 1.07, 0.74], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.46, 0.68, 0.58, 0.5, 0.48, 0.61, 0.41, 0.71, 0.68, 0.68, 0.13, 0.15, 0.72, 0.85, 0.2, 0.48, 0.44, 0.7, 0.66, 0.27, 0.99, 0.27], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [0.81, 1.32, 1.47, 1.03, 0.53, 1.79, 1.75, 0.85, 1.48, 1.45, 0.78, 1.42, 1.1, 0.49, 2.39, 1.13, 1.68, 0.54, 1.08, 1.64, 0.83, 1.42], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.97, 1.55, 0.46, 0.26, 0.99, 1.16, 0.48, 0.24, 0.75, 0.27, 1.27, 0.64, 1.31, 0.72, 0.97, 0.27, 1.91, 0.68, 0.57, 0.72, 1.2, 0.99], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.87, 0.94, 0.31, 1.12, 0.36, 0.21, 0.4, 0.66, 0.24, 0.61, 0.91, 1.58, 1.46, 0.89, 0.92, 0.51, 0.65, 1.19, 0.23, 0.89, 0.77, 0.68], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 17; i <= gameweeks + 17 - 1; i++) {
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
