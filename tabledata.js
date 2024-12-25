const expectedGoalsData = {
  "Arsenal": { scores: [3.15, 2.34, 2.03, 2.4, 2.39, 2.58, 1.73, 2.72, 2.83, 1.83, 1.85, 2.13, 2.19, 1.65, 2.72, 2.71, 2.21, 2.19, 1.42, 2.21, 3.03], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.5, 1.86, 2.5, 1.3, 0.85, 2.23, 2.04, 2.49, 1.68, 1.5, 1.85, 1.3, 1.6, 1.68, 2.39, 1.74, 1.17, 1.72, 1.48, 1.89, 1.46], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.5, 1.28, 1.3, 1.24, 1.29, 1.45, 1.12, 2.06, 2.04, 1.38, 1.4, 1.85, 2.14, 1.65, 1.49, 1.29, 1.46, 0.73, 1.63, 1.01, 2.15], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.51, 0.93, 2.26, 1.29, 1.23, 1.42, 1.79, 1.81, 2.03, 1.43, 1.79, 1.4, 1.41, 1.59, 0.8, 1.76, 1.37, 1.61, 2.02, 1.63, 1.93], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.79, 1.35, 0.82, 1.78, 1.22, 1.26, 1.2, 1.4, 1.99, 1.44, 1.44, 0.97, 1.57, 1.25, 2.08, 1.54, 1.86, 1.45, 1.7, 1.08, 1.35], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [2.14, 2.65, 1.86, 2.14, 2.94, 1.45, 2.77, 1.98, 2.01, 3.44, 3.09, 1.05, 2.34, 2.29, 3.08, 1.84, 1.87, 1.61, 1.85, 2.11, 1.79], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.18, 2.21, 1.33, 1.7, 1.52, 1.71, 1.16, 1.2, 1.18, 1.5, 1.97, 1.19, 1.9, 1.48, 0.93, 1.37, 0.67, 1.34, 1.29, 1.88, 0.89], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [0.64, 0.92, 0.81, 1.03, 1.03, 0.87, 1.36, 0.82, 0.93, 1.01, 1.11, 1.22, 0.61, 0.54, 0.79, 0.74, 0.79, 1.35, 0.81, 1.51, 0.82], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.18, 1.41, 2.03, 1.57, 1.75, 1.39, 1.22, 1.37, 1.43, 1.67, 1.31, 1.55, 0.69, 1.06, 1.21, 1.37, 1.95, 1.33, 1.23, 1.51, 1.11], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.57, 1.13, 1.0, 1.25, 0.92, 0.75, 1.87, 1.09, 1.27, 0.98, 1.01, 1.13, 1.0, 1.6, 0.97, 0.66, 1.01, 0.87, 1.45, 1.45, 1.5], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.74, 0.9, 1.07, 1.15, 1.14, 1.08, 0.86, 0.65, 1.42, 1.27, 0.95, 1.12, 0.77, 1.15, 1.06, 0.86, 1.35, 1.84, 0.96, 1.64, 0.98], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [3.26, 2.51, 2.22, 1.89, 2.42, 3.25, 1.94, 3.1, 1.53, 2.28, 3.62, 2.12, 1.98, 1.94, 2.92, 2.81, 2.47, 1.89, 1.29, 2.09, 2.28], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.84, 2.61, 2.71, 2.24, 2.6, 2.04, 1.03, 2.11, 1.58, 1.98, 1.76, 2.26, 3.03, 1.77, 2.12, 1.58, 2.29, 2.88, 2.9, 2.1, 1.8], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.67, 1.42, 0.91, 2.27, 1.52, 1.21, 1.43, 1.33, 1.06, 2.03, 0.81, 1.76, 1.18, 1.11, 1.22, 1.94, 1.21, 1.51, 1.83, 1.18, 1.55], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [2.11, 1.63, 1.82, 2.65, 1.93, 2.67, 1.93, 1.31, 1.88, 1.25, 2.14, 1.95, 2.4, 2.4, 1.9, 1.81, 2.78, 1.79, 1.87, 0.95, 1.69], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.43, 0.98, 1.54, 0.98, 2.1, 1.12, 1.41, 1.12, 1.13, 0.75, 1.03, 1.62, 1.29, 1.23, 1.14, 1.23, 1.63, 1.14, 1.89, 1.45, 1.27], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [1.05, 0.7, 1.01, 0.68, 0.68, 0.82, 1.0, 0.81, 0.87, 0.68, 0.52, 1.11, 0.82, 0.76, 0.89, 0.9, 0.81, 1.01, 0.64, 0.61, 0.46], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.73, 2.84, 2.09, 1.01, 1.56, 2.99, 2.22, 2.04, 2.56, 1.63, 2.07, 1.78, 1.73, 3.33, 2.45, 2.02, 1.34, 2.3, 2.09, 1.95, 2.23], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [2.0, 1.09, 0.98, 1.44, 1.46, 1.36, 1.21, 1.8, 0.71, 2.09, 1.46, 1.09, 1.71, 1.44, 0.93, 2.33, 1.34, 1.58, 1.22, 1.41, 1.79], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.41, 1.35, 1.4, 1.24, 1.2, 0.82, 1.57, 0.93, 1.23, 1.43, 1.26, 1.98, 1.85, 1.78, 1.57, 1.21, 2.07, 0.97, 1.55, 1.25, 1.79], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [2.83, 1.97, 2.2, 1.81, 2.15, 2.21, 1.79, 2.61, 2.46, 2.37, 2.23, 1.75, 2.5, 2.92, 2.25, 2.58, 2.55, 2.41, 1.38, 1.94, 3.15], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [0.61, 1.29, 1.71, 1.79, 0.46, 1.28, 1.04, 1.67, 0.67, 1.12, 0.84, 0.6, 1.04, 1.46, 2.06, 0.81, 0.5, 1.33, 0.98, 0.71, 1.07], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.54, 1.22, 2.23, 0.59, 0.73, 1.63, 0.72, 2.23, 1.46, 1.19, 0.63, 1.23, 1.84, 1.18, 1.49, 1.27, 1.49, 0.56, 1.13, 0.61, 1.87], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [0.84, 0.48, 1.83, 0.53, 0.45, 0.91, 0.55, 0.83, 1.21, 1.83, 0.79, 0.78, 0.45, 0.51, 0.33, 1.07, 0.98, 1.1, 1.18, 1.1, 0.84], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.1, 0.78, 0.66, 1.43, 1.09, 2.09, 1.22, 0.69, 2.09, 1.26, 1.35, 0.52, 1.01, 1.14, 1.74, 0.86, 1.31, 0.84, 1.06, 0.62, 0.54], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.54, 1.62, 1.32, 1.44, 1.51, 0.65, 1.5, 1.24, 0.93, 2.54, 1.93, 0.6, 0.89, 1.02, 1.89, 1.27, 2.28, 0.76, 0.77, 1.54, 1.4], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.11, 2.48, 0.78, 1.58, 1.16, 1.21, 1.2, 2.21, 1.2, 1.12, 1.82, 0.71, 2.21, 1.43, 0.6, 1.37, 0.55, 1.61, 0.62, 1.44, 0.51], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [0.8, 1.87, 1.36, 1.36, 1.05, 1.42, 2.12, 1.51, 1.73, 1.2, 1.42, 1.69, 0.69, 0.96, 1.59, 1.03, 0.77, 2.08, 1.46, 2.72, 0.92], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [0.59, 1.39, 1.84, 1.18, 1.6, 1.49, 0.73, 1.63, 1.54, 1.19, 1.19, 0.85, 0.56, 0.72, 1.13, 0.8, 2.23, 0.89, 2.23, 0.98, 0.83], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.21, 0.35, 0.66, 0.84, 0.37, 0.19, 1.84, 0.42, 0.39, 0.65, 0.69, 0.99, 0.59, 0.85, 0.23, 0.33, 0.31, 1.29, 0.66, 0.97, 0.84], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.19, 0.37, 0.41, 0.91, 0.87, 0.25, 1.28, 0.33, 0.66, 0.62, 0.23, 0.86, 0.24, 0.45, 0.63, 0.3, 0.63, 1.83, 0.76, 1.18, 0.58], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [2.39, 1.69, 2.0, 1.87, 1.46, 2.36, 1.63, 1.98, 1.03, 1.44, 2.96, 1.36, 2.72, 1.73, 1.96, 2.12, 1.31, 1.0, 1.21, 1.7, 2.06], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.64, 2.03, 1.88, 1.38, 2.0, 1.17, 0.89, 1.35, 1.08, 0.98, 1.78, 1.89, 2.31, 1.64, 1.97, 2.38, 1.55, 1.89, 2.64, 1.82, 1.64], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.22, 0.98, 0.54, 2.52, 1.48, 1.25, 1.57, 0.65, 1.98, 1.87, 0.78, 1.63, 1.38, 0.85, 0.75, 1.48, 1.16, 1.0, 1.47, 0.61, 1.16], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.12, 1.2, 0.62, 1.44, 1.38, 2.21, 1.47, 0.6, 1.61, 0.51, 1.17, 1.52, 1.22, 1.58, 1.47, 0.88, 1.83, 1.18, 0.78, 0.55, 2.21], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [0.88, 2.0, 1.24, 0.75, 2.54, 1.17, 1.5, 1.26, 0.76, 0.8, 0.86, 1.61, 1.53, 0.93, 2.27, 0.67, 1.27, 1.31, 1.92, 1.22, 0.83], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.68, 0.55, 0.52, 0.51, 0.61, 0.35, 0.77, 0.64, 0.68, 0.16, 0.13, 0.69, 0.75, 0.18, 0.46, 0.49, 0.71, 0.8, 0.27, 1.1, 0.24], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.19, 1.29, 0.81, 0.45, 1.78, 1.71, 0.84, 1.32, 1.4, 0.69, 1.23, 1.07, 0.48, 2.33, 1.04, 1.46, 0.42, 1.03, 1.37, 0.75, 1.29], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.76, 0.41, 0.33, 1.04, 1.09, 0.54, 0.31, 0.81, 0.3, 1.41, 0.59, 1.48, 0.78, 0.96, 0.27, 2.03, 0.78, 0.5, 0.8, 1.17, 1.11], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.94, 0.29, 1.07, 0.35, 0.26, 0.38, 0.65, 0.22, 0.65, 0.94, 1.65, 1.64, 0.91, 1.01, 0.43, 0.72, 1.3, 0.28, 0.92, 0.76, 0.73], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 18; i <= gameweeks + 18 - 1; i++) {
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
