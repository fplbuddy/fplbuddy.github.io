const expectedGoalsData = {
  "Arsenal": { scores: [1.94, 2.35, 2.38, 2.46, 1.66, 2.64, 2.82, 1.7, 1.85, 2.12, 2.12, 1.64, 2.59, 2.58, 2.11, 2.12, 1.37, 2.09, 2.93], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [2.42, 1.3, 0.82, 2.24, 1.95, 2.36, 1.68, 1.45, 1.78, 1.25, 1.54, 1.56, 2.33, 1.66, 1.14, 1.68, 1.46, 1.86, 1.47], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.31, 1.27, 1.25, 1.36, 1.09, 2.03, 1.96, 1.35, 1.41, 1.79, 2.06, 1.69, 1.47, 1.27, 1.48, 0.71, 1.64, 1.0, 2.11], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [2.2, 1.25, 1.18, 1.37, 1.76, 1.83, 1.98, 1.42, 1.78, 1.38, 1.36, 1.59, 0.77, 1.68, 1.28, 1.6, 1.94, 1.59, 1.84], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [0.78, 1.69, 1.21, 1.24, 1.11, 1.39, 1.92, 1.39, 1.39, 0.94, 1.56, 1.2, 2.0, 1.47, 1.84, 1.37, 1.61, 1.03, 1.33], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.82, 2.1, 2.81, 1.43, 2.8, 1.93, 2.04, 3.36, 3.03, 1.02, 2.33, 2.23, 2.96, 1.83, 1.87, 1.57, 1.8, 2.12, 1.69], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.33, 1.66, 1.54, 1.63, 1.16, 1.19, 1.16, 1.49, 1.87, 1.14, 1.85, 1.41, 0.91, 1.33, 0.65, 1.23, 1.28, 1.78, 0.86], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [0.8, 1.04, 1.02, 0.85, 1.33, 0.8, 0.93, 0.98, 1.07, 1.23, 0.6, 0.52, 0.74, 0.73, 0.8, 1.3, 0.8, 1.48, 0.79], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [2.04, 1.67, 1.81, 1.46, 1.24, 1.34, 1.45, 1.68, 1.33, 1.61, 0.71, 1.08, 1.26, 1.45, 2.01, 1.41, 1.29, 1.54, 1.14], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.99, 1.21, 0.9, 0.74, 1.82, 1.11, 1.26, 0.99, 0.99, 1.06, 0.99, 1.53, 0.99, 0.64, 0.97, 0.88, 1.39, 1.42, 1.52], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [1.09, 1.12, 1.12, 1.08, 0.87, 0.63, 1.37, 1.29, 0.97, 1.13, 0.76, 1.11, 1.03, 0.83, 1.3, 1.79, 0.9, 1.58, 0.97], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [2.34, 1.86, 2.46, 3.26, 2.02, 3.11, 1.58, 2.29, 3.7, 2.26, 2.07, 2.02, 3.09, 2.9, 2.57, 2.01, 1.3, 2.13, 2.32], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.73, 2.17, 2.5, 2.05, 1.0, 2.02, 1.53, 1.97, 1.65, 2.17, 2.95, 1.79, 2.05, 1.58, 2.3, 2.74, 2.84, 2.05, 1.78], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [0.88, 2.18, 1.44, 1.18, 1.36, 1.31, 1.05, 1.91, 0.76, 1.7, 1.09, 1.07, 1.16, 1.82, 1.18, 1.44, 1.81, 1.18, 1.53], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.88, 2.61, 1.95, 2.7, 1.96, 1.33, 1.81, 1.26, 2.25, 1.95, 2.39, 2.44, 1.97, 1.9, 2.75, 1.79, 1.95, 0.95, 1.74], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.53, 0.98, 2.11, 1.14, 1.4, 1.15, 1.13, 0.74, 1.04, 1.61, 1.33, 1.28, 1.18, 1.27, 1.61, 1.14, 1.9, 1.52, 1.32], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.95, 0.68, 0.63, 0.77, 0.95, 0.78, 0.83, 0.68, 0.5, 1.04, 0.78, 0.75, 0.87, 0.9, 0.78, 0.97, 0.61, 0.6, 0.44], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.96, 0.97, 1.53, 2.86, 2.1, 2.0, 2.42, 1.56, 1.99, 1.72, 1.72, 3.17, 2.3, 1.84, 1.28, 2.29, 1.98, 1.93, 2.1], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.94, 1.39, 1.38, 1.34, 1.2, 1.69, 0.67, 1.99, 1.36, 1.07, 1.6, 1.38, 0.89, 2.21, 1.27, 1.53, 1.21, 1.28, 1.69], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.36, 1.26, 1.27, 0.82, 1.65, 0.95, 1.27, 1.47, 1.31, 2.03, 1.95, 1.79, 1.63, 1.28, 2.11, 1.0, 1.56, 1.27, 1.79], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [2.3, 1.9, 2.21, 2.19, 1.84, 2.66, 2.55, 2.38, 2.33, 1.8, 2.47, 2.98, 2.31, 2.64, 2.61, 2.45, 1.36, 1.93, 3.23], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.68, 1.77, 0.46, 1.3, 0.96, 1.65, 0.65, 1.12, 0.84, 0.52, 1.06, 1.39, 2.09, 0.75, 0.5, 1.22, 0.97, 0.73, 1.09], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [2.24, 0.61, 0.71, 1.59, 0.67, 2.29, 1.4, 1.25, 0.69, 1.26, 1.86, 1.25, 1.42, 1.32, 1.54, 0.6, 1.16, 0.64, 1.89], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.93, 0.57, 0.43, 0.98, 0.61, 0.92, 1.27, 1.88, 0.84, 0.83, 0.46, 0.54, 0.38, 1.15, 1.0, 1.18, 1.24, 1.07, 0.83], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [0.71, 1.49, 1.18, 2.14, 1.24, 0.72, 2.19, 1.3, 1.32, 0.57, 1.07, 1.22, 1.79, 0.93, 1.41, 0.83, 1.06, 0.59, 0.61], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.32, 1.4, 1.4, 0.64, 1.51, 1.25, 0.93, 2.54, 1.89, 0.6, 0.9, 1.02, 1.86, 1.17, 2.24, 0.67, 0.71, 1.54, 1.34], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [0.81, 1.63, 1.26, 1.26, 1.29, 2.25, 1.17, 1.17, 1.87, 0.71, 2.3, 1.51, 0.65, 1.41, 0.6, 1.6, 0.69, 1.4, 0.49], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.35, 1.37, 1.08, 1.45, 2.1, 1.53, 1.75, 1.21, 1.35, 1.72, 0.63, 0.97, 1.54, 1.03, 0.77, 2.07, 1.37, 2.74, 0.88], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.86, 1.25, 1.63, 1.53, 0.71, 1.59, 1.57, 1.15, 1.25, 0.89, 0.6, 0.66, 1.15, 0.8, 2.29, 0.93, 2.24, 1.02, 0.84], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.65, 0.92, 0.41, 0.19, 1.93, 0.47, 0.44, 0.74, 0.77, 1.0, 0.64, 0.83, 0.26, 0.38, 0.32, 1.36, 0.72, 1.03, 0.93], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.44, 0.95, 0.82, 0.29, 1.32, 0.36, 0.69, 0.68, 0.24, 0.91, 0.26, 0.44, 0.68, 0.28, 0.6, 1.89, 0.75, 1.2, 0.61], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [2.08, 1.87, 1.53, 2.39, 1.68, 1.94, 1.08, 1.42, 3.02, 1.43, 2.75, 1.69, 2.05, 2.17, 1.39, 1.04, 1.27, 1.78, 2.12], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.95, 1.43, 2.04, 1.19, 0.95, 1.32, 1.03, 1.05, 1.77, 1.95, 2.33, 1.72, 2.02, 2.42, 1.59, 1.84, 2.71, 1.84, 1.6], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [0.48, 2.53, 1.49, 1.16, 1.56, 0.68, 1.97, 1.85, 0.79, 1.62, 1.32, 0.83, 0.7, 1.39, 1.14, 1.01, 1.5, 0.6, 1.15], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [0.71, 1.43, 1.43, 2.32, 1.44, 0.66, 1.62, 0.51, 1.28, 1.6, 1.28, 1.66, 1.56, 0.95, 1.89, 1.27, 0.83, 0.62, 2.27], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.28, 0.77, 2.67, 1.29, 1.64, 1.3, 0.82, 0.91, 0.96, 1.74, 1.68, 1.05, 2.38, 0.8, 1.4, 1.46, 2.03, 1.39, 0.92], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.55, 0.57, 0.61, 0.33, 0.81, 0.66, 0.73, 0.17, 0.12, 0.65, 0.79, 0.21, 0.49, 0.55, 0.67, 0.83, 0.29, 1.14, 0.27], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [0.77, 0.48, 1.79, 1.7, 0.86, 1.35, 1.41, 0.7, 1.22, 1.0, 0.49, 2.36, 0.98, 1.41, 0.38, 1.08, 1.39, 0.78, 1.32], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.33, 0.94, 1.08, 0.53, 0.3, 0.8, 0.3, 1.37, 0.53, 1.46, 0.71, 0.92, 0.23, 2.03, 0.79, 0.51, 0.82, 1.09, 1.1], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.08, 0.37, 0.3, 0.43, 0.71, 0.22, 0.7, 0.93, 1.71, 1.76, 1.01, 1.09, 0.5, 0.81, 1.36, 0.32, 1.0, 0.84, 0.79], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
