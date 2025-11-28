const expectedGoalsData = {
  "Arsenal": { scores: [1.2, 2.04, 1.32, 2.65, 1.25, 2.05, 1.57, 1.59, 1.86, 1.61, 2.0, 2.39, 2.42, 1.72, 1.84, 1.43, 1.72, 1.49, 2.23, 1.9, 1.15, 1.69, 1.93, 2.06, 2.77, 1.29], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [2.1, 1.36, 0.84, 1.63, 1.58, 0.95, 0.71, 1.51, 1.02, 1.18, 1.12, 1.62, 1.26, 1.62, 2.25, 1.76, 1.13, 1.33, 1.94, 1.27, 1.92, 1.28, 1.73, 1.84, 1.47, 0.91], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.7, 1.25, 1.2, 1.41, 2.32, 1.44, 1.01, 0.89, 1.84, 1.44, 1.55, 1.87, 1.32, 1.05, 1.73, 2.03, 1.71, 1.95, 1.68, 0.75, 1.19, 2.38, 1.28, 1.36, 1.15, 1.34], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [2.59, 0.84, 1.72, 2.66, 2.09, 1.77, 2.05, 1.17, 2.27, 1.12, 1.79, 1.24, 1.33, 1.0, 1.92, 2.18, 1.49, 2.48, 2.23, 1.39, 1.81, 1.57, 2.29, 1.08, 1.43, 1.46], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.52, 1.49, 2.33, 1.48, 2.3, 0.85, 1.96, 2.63, 1.09, 1.8, 1.54, 1.41, 1.45, 1.25, 1.63, 1.81, 1.01, 1.93, 1.76, 2.21, 1.75, 1.36, 1.35, 2.52, 2.26, 1.9], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Burnley": { scores: [0.91, 0.81, 0.76, 1.03, 0.85, 0.79, 0.9, 0.92, 1.06, 0.83, 1.17, 1.08, 1.3, 0.68, 0.64, 1.09, 0.67, 1.01, 0.86, 1.09, 0.85, 0.73, 1.27, 0.83, 0.48, 1.41], logo: "logos/Burnley2.png", page: "Burnley.html" },
"Chelsea": { scores: [0.97, 2.17, 1.45, 1.35, 1.29, 1.43, 1.72, 1.05, 1.47, 1.86, 1.17, 2.23, 2.03, 2.58, 2.51, 0.81, 1.2, 1.54, 1.14, 1.24, 1.82, 1.57, 1.74, 1.42, 1.99, 1.85], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.53, 1.78, 1.24, 1.05, 1.83, 1.68, 1.48, 1.09, 1.2, 1.56, 1.09, 1.23, 1.32, 2.12, 2.03, 1.29, 1.41, 2.17, 0.88, 1.29, 1.88, 1.19, 1.22, 1.14, 1.31, 0.82], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.02, 0.96, 1.15, 0.72, 0.64, 1.4, 0.97, 1.23, 1.6, 0.79, 1.71, 1.04, 0.98, 1.14, 1.2, 0.86, 1.67, 0.54, 0.86, 1.03, 1.12, 1.24, 0.82, 0.77, 1.46, 1.11], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.32, 0.98, 1.1, 1.67, 1.37, 1.48, 0.92, 1.33, 1.02, 1.71, 1.47, 1.2, 1.07, 0.82, 1.46, 1.57, 1.76, 1.15, 1.98, 1.12, 1.23, 1.13, 0.64, 1.36, 1.6, 1.21], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Leeds": { scores: [0.6, 0.75, 0.97, 0.9, 0.8, 1.06, 0.82, 1.05, 0.74, 1.01, 0.65, 0.56, 1.0, 0.63, 0.69, 0.72, 1.27, 0.67, 1.07, 0.88, 1.39, 0.83, 1.45, 0.96, 1.07, 1.08], logo: "logos/Leeds2.png", page: "Leeds.html" },
"Liverpool": { scores: [2.32, 2.73, 2.69, 2.31, 2.08, 2.99, 3.19, 1.83, 1.01, 3.12, 1.79, 1.91, 1.54, 2.29, 1.81, 2.76, 2.51, 2.47, 1.94, 2.17, 1.41, 1.72, 1.89, 1.61, 1.49, 2.3], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [3.0, 1.71, 2.56, 1.36, 2.59, 1.7, 2.15, 1.51, 2.17, 1.78, 2.8, 1.95, 1.65, 2.04, 1.79, 2.52, 2.02, 2.18, 1.62, 1.27, 1.13, 2.46, 1.32, 2.16, 1.68, 1.66], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [0.96, 1.82, 1.66, 1.41, 0.98, 1.26, 1.97, 1.77, 1.73, 1.02, 0.67, 1.44, 1.63, 1.53, 0.93, 1.14, 1.06, 1.17, 1.18, 2.11, 0.89, 1.52, 1.38, 1.51, 1.42, 1.28], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.08, 1.89, 2.38, 1.75, 1.23, 1.45, 2.0, 1.32, 2.44, 1.92, 1.35, 1.34, 1.76, 1.59, 0.99, 1.28, 1.72, 1.03, 2.09, 1.11, 1.63, 0.77, 1.77, 1.38, 2.11, 1.4], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.53, 1.67, 0.94, 1.64, 1.21, 1.03, 1.11, 0.99, 1.54, 0.8, 1.28, 1.15, 1.79, 1.99, 1.39, 1.29, 0.86, 1.44, 1.38, 1.18, 2.07, 1.52, 0.9, 1.27, 1.26, 1.42], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Sunderland": { scores: [0.92, 0.76, 0.56, 0.83, 0.84, 1.39, 0.67, 0.9, 0.84, 0.75, 1.01, 1.35, 0.44, 0.91, 0.94, 0.78, 1.16, 1.0, 0.69, 1.07, 0.64, 0.93, 1.09, 0.98, 0.61, 0.7], logo: "logos/Sunderland2.png", page: "Sunderland.html" },
"Tottenham": { scores: [1.72, 1.27, 1.82, 1.43, 1.66, 1.15, 1.53, 2.16, 1.42, 2.19, 2.08, 1.22, 1.5, 1.51, 0.95, 1.45, 1.37, 1.39, 1.71, 1.82, 1.83, 1.99, 1.18, 2.53, 1.07, 1.33], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.28, 1.16, 1.19, 1.08, 0.8, 1.33, 1.42, 1.54, 1.32, 1.27, 1.67, 0.83, 1.61, 1.38, 1.31, 1.08, 1.12, 0.95, 0.91, 1.83, 0.89, 1.03, 1.19, 0.74, 0.98, 1.96], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.8, 1.16, 1.22, 0.54, 1.24, 0.95, 1.02, 1.49, 0.76, 1.03, 0.7, 1.15, 0.87, 0.98, 0.78, 0.96, 1.13, 1.04, 0.65, 1.25, 1.45, 1.33, 1.47, 1.05, 1.17, 1.42], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [1.9, 2.16, 2.15, 2.9, 2.63, 2.14, 2.46, 2.05, 1.82, 2.25, 2.57, 2.86, 3.23, 1.84, 1.93, 2.22, 1.82, 2.92, 2.62, 2.36, 1.62, 2.31, 2.63, 2.4, 3.11, 2.21], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [2.24, 1.13, 1.33, 1.69, 1.87, 1.2, 1.04, 1.86, 1.5, 2.26, 1.29, 1.45, 1.34, 1.43, 2.51, 1.92, 1.51, 1.55, 2.01, 1.54, 2.63, 1.62, 1.54, 2.17, 1.13, 0.95], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.98, 1.92, 1.18, 1.22, 2.14, 0.85, 0.89, 1.02, 1.21, 0.83, 0.83, 1.58, 1.42, 1.6, 1.35, 2.3, 1.13, 1.83, 1.53, 0.75, 0.98, 2.17, 1.48, 1.29, 0.93, 1.21], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [2.01, 0.65, 0.81, 2.04, 1.44, 1.19, 1.08, 1.46, 2.16, 0.78, 1.38, 0.99, 0.86, 0.9, 0.98, 1.69, 0.9, 1.76, 1.72, 1.78, 1.46, 1.09, 1.53, 0.58, 1.34, 0.5], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.08, 1.28, 1.52, 0.5, 2.16, 0.64, 1.21, 2.0, 0.57, 1.18, 1.15, 1.77, 1.34, 0.99, 0.73, 1.38, 0.89, 1.84, 0.72, 1.68, 0.8, 1.04, 0.86, 1.75, 1.71, 1.39], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Burnley": { scores: [0.38, 0.84, 0.46, 0.94, 0.49, 1.23, 0.67, 0.36, 0.89, 0.22, 0.63, 1.3, 1.0, 0.6, 0.4, 0.57, 0.94, 0.71, 0.69, 0.55, 0.63, 0.43, 1.18, 0.79, 0.31, 1.21], logo: "logos/Burnley2.png", page: "Burnley.html" },
"Chelsea": { scores: [1.5, 2.37, 1.51, 2.43, 1.46, 1.93, 1.83, 1.11, 1.8, 1.63, 1.68, 2.18, 2.1, 2.67, 2.64, 1.2, 1.62, 1.78, 2.12, 1.41, 2.05, 1.29, 2.04, 1.0, 1.71, 2.49], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.92, 2.22, 1.67, 1.28, 2.24, 1.58, 1.99, 1.34, 1.81, 2.37, 1.55, 1.59, 1.17, 2.52, 2.29, 1.6, 1.27, 2.55, 0.99, 1.65, 2.06, 0.89, 1.39, 2.3, 1.19, 1.38], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.7, 1.44, 1.96, 1.29, 1.43, 2.27, 1.64, 1.55, 2.34, 1.54, 2.6, 1.22, 1.72, 1.75, 1.97, 1.39, 2.57, 1.13, 1.6, 1.24, 1.22, 1.79, 1.33, 1.6, 2.71, 1.32], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [0.89, 0.9, 1.45, 1.79, 1.48, 1.32, 1.14, 0.8, 1.15, 1.82, 1.07, 1.19, 1.88, 0.65, 1.95, 1.17, 1.63, 1.18, 2.11, 0.57, 0.82, 1.39, 0.73, 1.29, 1.55, 1.24], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Leeds": { scores: [0.25, 0.57, 0.34, 0.35, 0.81, 1.25, 0.2, 0.85, 0.43, 0.9, 0.91, 0.46, 0.84, 0.38, 0.53, 0.4, 1.56, 0.57, 0.54, 0.61, 1.17, 0.46, 1.41, 0.4, 0.52, 0.7], logo: "logos/Leeds2.png", page: "Leeds.html" },
"Liverpool": { scores: [1.39, 2.33, 1.89, 1.14, 0.95, 1.94, 2.21, 1.32, 0.78, 2.18, 1.06, 1.3, 0.96, 2.02, 1.25, 1.7, 1.62, 1.24, 0.86, 1.63, 1.64, 1.51, 1.26, 1.21, 1.15, 1.16], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.74, 1.87, 2.85, 1.75, 2.26, 1.79, 2.56, 1.76, 1.68, 1.81, 2.48, 1.47, 1.07, 2.19, 1.85, 2.44, 2.11, 1.94, 2.07, 1.44, 1.58, 2.41, 2.19, 1.7, 1.59, 2.01], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.08, 1.57, 1.48, 1.22, 1.03, 1.17, 1.8, 1.76, 1.73, 0.85, 0.68, 1.5, 1.11, 1.26, 1.5, 1.38, 0.89, 1.32, 0.94, 2.07, 0.81, 1.04, 0.75, 1.88, 1.42, 0.75], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.81, 1.4, 2.35, 2.19, 1.37, 1.42, 2.03, 1.68, 2.38, 1.79, 1.62, 0.74, 1.32, 1.1, 0.84, 2.12, 1.74, 1.08, 2.5, 1.37, 1.52, 0.92, 1.3, 1.41, 1.87, 1.49], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.09, 1.56, 1.58, 1.19, 1.27, 0.92, 1.9, 1.1, 1.34, 1.0, 0.84, 1.46, 1.84, 1.88, 0.82, 0.82, 0.66, 1.58, 0.91, 1.4, 2.13, 1.97, 0.88, 1.25, 1.21, 1.3], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Sunderland": { scores: [0.91, 0.33, 0.39, 0.87, 0.5, 1.72, 0.58, 0.58, 0.52, 1.05, 0.94, 1.7, 0.44, 0.5, 1.16, 0.66, 1.41, 0.72, 0.62, 0.81, 0.74, 1.09, 1.15, 1.1, 1.16, 0.79], logo: "logos/Sunderland2.png", page: "Sunderland.html" },
"Tottenham": { scores: [1.34, 0.76, 0.89, 0.97, 0.63, 0.93, 0.64, 2.03, 0.8, 1.4, 1.56, 0.71, 0.98, 1.02, 0.79, 1.04, 1.22, 0.42, 1.26, 1.71, 0.87, 1.32, 0.88, 1.91, 0.68, 1.65], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.49, 0.81, 0.49, 0.98, 0.37, 1.14, 0.71, 1.13, 1.07, 0.56, 1.83, 0.54, 1.36, 1.08, 0.89, 0.32, 0.86, 0.57, 0.72, 1.43, 0.77, 1.45, 0.5, 0.64, 0.6, 1.7], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.61, 0.94, 0.95, 0.35, 0.62, 0.25, 0.7, 1.07, 1.01, 0.73, 0.3, 0.77, 0.66, 0.69, 0.66, 0.86, 0.41, 0.42, 0.54, 0.8, 1.25, 0.68, 1.68, 0.4, 1.01, 1.22], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 13; i <= gameweeks + 13 - 1; i++) {
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
