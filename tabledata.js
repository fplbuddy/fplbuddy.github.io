const expectedGoalsData = {
  "Arsenal": { scores: [2.58, 1.26, 2.04, 1.54, 1.59, 1.84, 1.63, 1.93, 2.34, 2.33, 1.7, 1.78, 1.43, 1.74, 1.48, 2.2, 1.86, 1.28, 1.69, 2.02, 1.94, 2.66, 1.28], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.64, 1.63, 1.03, 0.76, 1.62, 1.09, 1.25, 1.22, 1.69, 1.34, 1.73, 2.32, 1.86, 1.21, 1.39, 1.93, 1.38, 1.97, 1.46, 1.76, 1.92, 1.56, 1.08], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.32, 2.14, 1.37, 0.98, 0.84, 1.68, 1.4, 1.48, 1.77, 1.24, 1.01, 1.56, 1.87, 1.6, 1.83, 1.55, 0.72, 1.16, 2.21, 1.21, 1.39, 1.21, 1.31], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [2.48, 1.98, 1.68, 1.88, 1.13, 2.1, 1.1, 1.72, 1.19, 1.3, 0.95, 1.84, 2.05, 1.43, 2.33, 2.11, 1.33, 1.82, 1.48, 2.06, 1.15, 1.36, 1.42], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.53, 2.26, 0.87, 1.89, 2.59, 1.24, 1.81, 1.67, 1.43, 1.46, 1.28, 1.65, 1.86, 1.02, 1.93, 1.79, 2.2, 1.72, 1.39, 1.4, 2.51, 2.27, 1.87], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Burnley": { scores: [1.07, 0.84, 0.78, 0.89, 0.92, 1.02, 0.83, 1.1, 1.05, 1.2, 0.68, 0.64, 1.05, 0.66, 0.98, 0.91, 1.07, 0.86, 0.79, 1.23, 0.81, 0.47, 1.36], logo: "logos/Burnley2.png", page: "Burnley.html" },
"Chelsea": { scores: [1.29, 1.26, 1.35, 1.63, 1.12, 1.51, 1.74, 1.12, 1.99, 1.93, 2.4, 2.33, 0.78, 1.15, 1.48, 1.1, 1.31, 1.69, 1.52, 1.67, 1.38, 1.82, 1.74], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.15, 1.79, 1.59, 1.54, 1.1, 1.18, 1.52, 1.09, 1.24, 1.33, 2.03, 1.97, 1.25, 1.36, 2.1, 0.98, 1.29, 1.74, 1.2, 1.21, 1.13, 1.3, 0.8], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [0.78, 0.67, 1.45, 1.04, 1.28, 1.65, 0.84, 1.76, 1.11, 1.1, 1.19, 1.24, 0.93, 1.71, 0.57, 0.92, 1.09, 1.18, 1.25, 0.96, 0.82, 1.49, 1.14], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.79, 1.51, 1.54, 1.01, 1.46, 1.13, 1.85, 1.61, 1.3, 1.17, 1.01, 1.57, 1.65, 1.8, 1.29, 2.11, 1.24, 1.34, 1.22, 0.71, 1.47, 1.74, 1.34], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Leeds": { scores: [1.08, 0.95, 1.26, 1.0, 1.22, 0.92, 1.28, 0.8, 0.67, 1.21, 0.77, 0.83, 0.95, 1.48, 0.81, 1.26, 1.04, 1.64, 1.01, 1.69, 1.13, 1.29, 1.23], logo: "logos/Leeds2.png", page: "Leeds.html" },
"Liverpool": { scores: [2.26, 1.97, 2.86, 3.04, 1.91, 0.99, 2.94, 1.76, 1.87, 1.66, 2.19, 1.8, 2.52, 2.43, 2.31, 1.92, 2.24, 1.39, 1.67, 1.82, 1.58, 1.46, 2.21], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.46, 2.59, 1.85, 2.26, 1.63, 2.32, 1.87, 2.93, 2.02, 1.79, 2.3, 1.93, 2.66, 2.17, 2.21, 1.71, 1.39, 1.19, 2.58, 1.43, 2.27, 1.8, 1.75], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.48, 1.05, 1.35, 2.06, 1.87, 1.81, 1.2, 0.71, 1.61, 1.66, 1.55, 1.0, 1.2, 1.15, 1.23, 1.27, 2.19, 0.97, 1.59, 1.47, 1.58, 1.52, 1.39], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.82, 1.31, 1.51, 2.08, 1.38, 2.52, 2.02, 1.42, 1.44, 1.83, 1.63, 1.17, 1.35, 1.77, 1.12, 2.13, 1.18, 1.71, 0.82, 1.87, 1.49, 2.09, 1.58], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.46, 1.21, 1.05, 1.03, 0.92, 1.36, 0.74, 1.19, 1.06, 1.64, 1.81, 1.29, 1.22, 0.9, 1.42, 1.25, 1.08, 1.87, 1.39, 0.86, 1.19, 1.15, 1.3], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Sunderland": { scores: [0.89, 0.91, 1.44, 0.79, 0.93, 0.89, 0.79, 1.02, 1.39, 0.47, 0.97, 1.06, 0.83, 1.23, 1.07, 0.76, 1.09, 0.69, 1.0, 1.15, 1.01, 0.66, 0.75], logo: "logos/Sunderland2.png", page: "Sunderland.html" },
"Tottenham": { scores: [1.47, 1.66, 1.16, 1.53, 2.1, 1.43, 2.05, 2.05, 1.35, 1.48, 1.53, 0.95, 1.55, 1.36, 1.42, 1.72, 1.79, 1.84, 1.98, 1.19, 2.48, 1.1, 1.33], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.03, 0.85, 1.35, 1.36, 1.47, 1.27, 1.18, 1.55, 0.81, 1.51, 1.29, 1.24, 1.05, 1.15, 1.0, 0.88, 1.72, 0.86, 0.98, 1.13, 0.7, 0.96, 1.83], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.51, 1.14, 0.9, 0.94, 1.3, 0.72, 0.97, 0.73, 1.06, 0.82, 0.93, 0.73, 0.88, 1.05, 0.97, 0.6, 1.11, 1.34, 1.19, 1.33, 0.99, 1.16, 1.3], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [3.0, 2.55, 2.1, 2.35, 2.15, 1.86, 2.4, 2.45, 2.57, 3.13, 1.94, 1.94, 2.29, 1.81, 2.82, 2.75, 2.44, 1.52, 2.2, 2.47, 2.48, 3.12, 2.24], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.79, 1.75, 1.3, 1.07, 1.99, 1.54, 2.15, 1.21, 1.53, 1.44, 1.39, 2.17, 2.07, 1.58, 1.46, 2.08, 1.7, 2.51, 1.48, 1.53, 2.22, 1.17, 0.86], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.13, 2.17, 0.93, 0.98, 1.02, 1.2, 0.82, 0.86, 1.73, 1.31, 1.52, 1.45, 2.18, 1.2, 1.88, 1.41, 0.78, 0.91, 1.83, 1.49, 1.15, 0.82, 1.36], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.7, 1.6, 1.27, 1.08, 1.39, 2.05, 0.87, 1.52, 0.93, 0.8, 0.91, 0.96, 1.75, 1.01, 1.89, 1.41, 1.68, 1.3, 1.02, 1.61, 0.52, 1.37, 0.55], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [0.52, 2.01, 0.65, 1.28, 2.0, 0.49, 1.23, 1.0, 1.64, 1.32, 0.89, 0.79, 1.48, 0.88, 1.72, 0.73, 1.71, 0.79, 1.09, 0.77, 1.85, 1.37, 1.25], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Burnley": { scores: [0.83, 0.59, 1.17, 0.62, 0.38, 0.82, 0.26, 0.65, 1.24, 1.1, 0.65, 0.49, 0.65, 0.91, 0.8, 0.61, 0.55, 0.77, 0.38, 0.92, 0.73, 0.35, 1.37], logo: "logos/Burnley2.png", page: "Burnley.html" },
"Chelsea": { scores: [2.29, 1.34, 1.78, 1.87, 0.98, 1.61, 1.66, 1.68, 2.22, 2.21, 2.31, 2.63, 1.2, 1.49, 1.63, 2.0, 1.25, 1.89, 1.24, 2.13, 1.03, 1.66, 2.36], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.16, 1.92, 1.57, 1.81, 1.26, 1.69, 2.27, 1.63, 1.74, 1.16, 2.54, 2.4, 1.51, 1.29, 2.22, 0.9, 1.54, 2.13, 0.95, 1.49, 2.2, 1.29, 1.39], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.37, 1.42, 2.3, 1.78, 1.61, 2.44, 1.44, 2.25, 1.19, 1.56, 1.82, 1.83, 1.29, 2.58, 1.14, 1.66, 1.32, 1.24, 1.87, 1.2, 1.62, 2.59, 1.32], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.72, 1.49, 1.3, 1.07, 0.74, 1.11, 1.39, 0.94, 1.0, 1.66, 0.5, 1.73, 1.06, 1.58, 1.21, 2.02, 0.53, 0.81, 1.16, 0.66, 1.25, 1.57, 1.03], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Leeds": { scores: [0.42, 0.84, 1.19, 0.24, 0.77, 0.4, 0.78, 0.86, 0.48, 0.97, 0.45, 0.49, 0.35, 1.47, 0.61, 0.6, 0.56, 1.31, 0.55, 1.46, 0.42, 0.51, 0.8], logo: "logos/Leeds2.png", page: "Leeds.html" },
"Liverpool": { scores: [1.09, 0.95, 2.03, 1.84, 1.16, 0.79, 2.18, 1.13, 1.18, 0.84, 1.9, 1.37, 1.75, 1.74, 1.21, 0.83, 1.44, 1.53, 1.5, 1.15, 1.26, 1.05, 1.21], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.59, 2.13, 1.74, 2.28, 1.63, 1.44, 1.51, 2.4, 1.29, 0.95, 1.82, 1.54, 1.93, 2.04, 1.84, 1.88, 1.34, 1.39, 2.27, 1.91, 1.58, 1.49, 1.69], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.33, 0.98, 1.11, 1.95, 1.47, 1.81, 0.77, 0.73, 1.36, 1.14, 1.38, 1.45, 1.43, 0.85, 1.25, 1.06, 1.76, 0.93, 1.14, 0.81, 1.82, 1.58, 0.77], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [2.06, 1.41, 1.29, 2.05, 1.66, 2.0, 1.9, 1.47, 0.77, 1.36, 1.09, 0.73, 1.98, 1.58, 1.14, 2.35, 1.37, 1.56, 0.92, 1.23, 1.52, 1.91, 1.31], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.15, 1.1, 0.78, 1.76, 0.99, 1.4, 0.98, 0.89, 1.44, 1.49, 1.97, 0.83, 0.78, 0.57, 1.38, 0.89, 1.26, 2.12, 1.84, 0.94, 1.12, 1.09, 1.35], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Sunderland": { scores: [0.81, 0.52, 1.42, 0.52, 0.61, 0.61, 1.1, 1.06, 1.76, 0.49, 0.56, 1.04, 0.77, 1.14, 0.73, 0.59, 0.84, 0.7, 1.24, 1.32, 1.03, 1.13, 0.88], logo: "logos/Sunderland2.png", page: "Sunderland.html" },
"Tottenham": { scores: [1.16, 0.7, 1.02, 0.76, 1.97, 0.93, 1.53, 1.67, 0.66, 0.95, 0.98, 0.85, 0.96, 1.29, 0.5, 1.44, 1.68, 0.89, 1.52, 0.86, 1.62, 0.81, 1.6], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.97, 0.37, 1.08, 0.76, 1.36, 1.28, 0.64, 1.81, 0.68, 1.5, 1.06, 1.05, 0.4, 0.82, 0.55, 0.73, 1.65, 0.88, 1.44, 0.64, 0.72, 0.62, 1.46], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.38, 0.69, 0.29, 0.64, 1.15, 0.96, 0.66, 0.27, 0.85, 0.73, 0.82, 0.7, 0.78, 0.44, 0.49, 0.55, 0.89, 0.97, 0.69, 1.58, 0.41, 0.88, 1.28], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
