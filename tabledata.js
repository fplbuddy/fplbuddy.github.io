const expectedGoalsData = {
  "Arsenal": { scores: [1.56, 1.65, 1.73, 1.53, 2.03, 2.23, 2.13, 1.62, 1.79, 1.41, 1.66, 1.47, 2.14, 1.95, 1.19, 1.71, 1.98, 1.97, 2.62, 1.42], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [0.77, 1.6, 1.26, 1.31, 1.29, 1.7, 1.47, 1.74, 2.34, 1.9, 1.26, 1.53, 2.06, 1.36, 1.89, 1.5, 1.88, 1.98, 1.54, 1.06], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.01, 0.86, 1.79, 1.4, 1.46, 1.81, 1.32, 1.05, 1.66, 1.8, 1.62, 1.88, 1.72, 0.73, 1.22, 2.22, 1.41, 1.42, 1.18, 1.29], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.88, 1.11, 1.89, 1.07, 1.61, 1.18, 1.29, 0.91, 1.74, 1.98, 1.47, 2.24, 1.98, 1.31, 1.76, 1.54, 2.06, 1.06, 1.49, 1.3], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.8, 2.4, 1.09, 1.79, 1.54, 1.35, 1.53, 1.22, 1.49, 1.65, 0.94, 1.66, 1.59, 2.04, 1.64, 1.3, 1.33, 2.31, 2.05, 1.87], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Burnley": { scores: [0.95, 0.92, 1.13, 0.81, 1.17, 1.0, 1.29, 0.79, 0.66, 1.06, 0.69, 1.08, 0.93, 1.09, 0.85, 0.78, 1.24, 0.87, 0.48, 1.4], logo: "logos/Burnley2.png", page: "Burnley.html" },
"Chelsea": { scores: [1.78, 1.09, 1.54, 1.75, 1.3, 2.12, 1.96, 2.4, 2.4, 0.79, 1.21, 1.56, 1.14, 1.28, 1.86, 1.52, 1.65, 1.34, 1.93, 1.65], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.48, 1.08, 1.17, 1.35, 1.05, 1.14, 1.24, 1.96, 1.88, 1.29, 1.34, 1.96, 0.89, 1.28, 1.73, 1.09, 1.23, 1.1, 1.21, 0.76], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [0.95, 1.19, 1.57, 0.83, 1.64, 1.04, 1.05, 1.21, 1.27, 0.9, 1.64, 0.54, 0.88, 1.01, 1.08, 1.23, 0.87, 0.88, 1.33, 1.12], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.16, 1.41, 1.15, 1.82, 1.6, 1.41, 1.2, 0.97, 1.47, 1.72, 1.89, 1.25, 2.14, 1.19, 1.32, 1.28, 0.71, 1.59, 1.74, 1.39], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Leeds": { scores: [1.02, 1.42, 1.01, 1.38, 0.87, 0.71, 1.26, 0.83, 0.92, 0.97, 1.48, 0.99, 1.33, 1.2, 1.75, 1.15, 1.83, 1.25, 1.36, 1.37], logo: "logos/Leeds2.png", page: "Leeds.html" },
"Liverpool": { scores: [2.93, 1.88, 0.97, 2.93, 1.84, 1.91, 1.56, 2.02, 1.71, 2.59, 2.39, 2.36, 1.85, 2.21, 1.39, 1.87, 1.93, 1.58, 1.48, 2.14], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.14, 1.67, 2.32, 2.04, 2.98, 2.12, 1.74, 2.35, 2.02, 2.64, 2.14, 2.33, 1.98, 1.42, 1.21, 2.63, 1.47, 2.27, 1.96, 1.85], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [2.16, 1.91, 1.9, 1.2, 0.74, 1.7, 1.81, 1.68, 1.07, 1.43, 1.24, 1.34, 1.41, 2.25, 1.03, 1.64, 1.48, 1.55, 1.54, 1.42], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [2.04, 1.53, 2.41, 1.96, 1.43, 1.34, 1.75, 1.64, 1.09, 1.34, 1.86, 1.1, 1.95, 1.3, 1.78, 0.79, 1.79, 1.4, 2.12, 1.54], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.05, 0.95, 1.41, 0.73, 1.16, 1.19, 1.59, 1.8, 1.23, 1.19, 0.85, 1.42, 1.28, 1.12, 1.87, 1.29, 0.86, 1.22, 1.23, 1.39], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Sunderland": { scores: [0.72, 0.92, 0.84, 0.86, 1.01, 1.35, 0.45, 0.89, 1.02, 0.85, 1.15, 1.01, 0.75, 1.09, 0.68, 0.93, 1.1, 1.05, 0.64, 0.73], logo: "logos/Sunderland2.png", page: "Sunderland.html" },
"Tottenham": { scores: [1.43, 1.87, 1.45, 2.04, 1.95, 1.23, 1.52, 1.5, 0.9, 1.48, 1.47, 1.29, 1.58, 1.59, 1.72, 1.88, 1.17, 2.31, 1.05, 1.29], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.33, 1.45, 1.23, 1.22, 1.45, 0.81, 1.51, 1.38, 1.32, 1.0, 1.14, 0.95, 0.9, 1.71, 0.96, 1.0, 1.1, 0.69, 0.98, 1.79], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.98, 1.31, 0.71, 0.97, 0.67, 1.1, 0.8, 0.87, 0.8, 0.89, 0.98, 0.92, 0.58, 1.11, 1.26, 1.2, 1.21, 0.94, 1.12, 1.26], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [2.31, 2.11, 1.9, 2.41, 2.38, 2.45, 3.2, 2.01, 2.04, 2.26, 1.96, 2.91, 2.8, 2.4, 1.49, 2.26, 2.47, 2.5, 3.09, 2.33], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.05, 1.94, 1.55, 2.18, 1.19, 1.53, 1.33, 1.48, 1.98, 2.06, 1.48, 1.31, 2.03, 1.63, 2.53, 1.4, 1.56, 2.1, 1.14, 0.78], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [0.84, 0.96, 1.17, 0.84, 0.79, 1.66, 1.15, 1.48, 1.33, 2.14, 1.15, 1.7, 1.22, 0.71, 0.84, 1.58, 1.46, 1.02, 0.71, 1.24], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.2, 1.52, 2.17, 0.87, 1.57, 0.91, 0.87, 0.99, 1.13, 1.73, 0.99, 1.99, 1.32, 1.82, 1.33, 0.97, 1.66, 0.52, 1.49, 0.59], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.32, 1.99, 0.49, 1.23, 1.01, 1.78, 1.45, 0.88, 0.88, 1.53, 0.95, 1.83, 0.78, 1.69, 0.9, 1.1, 0.83, 1.95, 1.28, 1.21], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Burnley": { scores: [0.65, 0.45, 0.75, 0.27, 0.71, 1.3, 1.1, 0.71, 0.45, 0.69, 0.97, 0.76, 0.59, 0.65, 0.77, 0.36, 0.81, 0.69, 0.36, 1.42], logo: "logos/Burnley2.png", page: "Burnley.html" },
"Chelsea": { scores: [1.82, 0.94, 1.58, 1.72, 1.74, 2.21, 2.25, 2.17, 2.57, 1.22, 1.43, 1.67, 2.07, 1.21, 1.79, 1.37, 2.12, 1.03, 1.75, 2.42], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.57, 1.08, 1.42, 2.12, 1.37, 1.51, 1.08, 2.28, 2.24, 1.2, 1.15, 1.86, 0.69, 1.36, 1.91, 0.77, 1.22, 2.06, 1.13, 1.21], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.75, 1.65, 2.47, 1.36, 2.1, 1.3, 1.51, 1.75, 1.72, 1.3, 2.5, 1.15, 1.6, 1.35, 1.24, 1.84, 1.14, 1.67, 2.63, 1.38], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.14, 0.76, 1.07, 1.26, 1.07, 0.92, 1.75, 0.48, 1.8, 1.14, 1.59, 1.21, 1.97, 0.55, 0.86, 1.12, 0.69, 1.21, 1.62, 1.07], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Leeds": { scores: [0.27, 0.74, 0.45, 0.81, 0.97, 0.54, 1.02, 0.45, 0.48, 0.36, 1.59, 0.7, 0.69, 0.53, 1.41, 0.54, 1.45, 0.5, 0.65, 0.84], logo: "logos/Leeds2.png", page: "Leeds.html" },
"Liverpool": { scores: [1.8, 1.22, 0.89, 2.22, 1.16, 1.31, 0.88, 2.06, 1.46, 1.85, 1.88, 1.38, 1.02, 1.51, 1.7, 1.67, 1.14, 1.31, 1.08, 1.36], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.43, 1.69, 1.68, 1.51, 2.55, 1.46, 1.05, 1.9, 1.69, 1.89, 2.14, 1.93, 2.06, 1.39, 1.53, 2.3, 2.09, 1.74, 1.53, 1.74], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.88, 1.21, 1.62, 0.65, 0.65, 1.22, 1.1, 1.25, 1.41, 1.38, 0.78, 1.08, 0.9, 1.5, 0.78, 1.08, 0.73, 1.76, 1.46, 0.77], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.94, 1.69, 1.82, 1.9, 1.38, 0.74, 1.38, 1.12, 0.66, 2.02, 1.45, 1.05, 2.37, 1.4, 1.47, 0.91, 1.32, 1.48, 1.87, 1.24], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.92, 1.01, 1.47, 1.08, 1.0, 1.59, 1.42, 2.1, 0.91, 0.96, 0.59, 1.44, 1.03, 1.28, 2.14, 1.98, 0.96, 1.23, 1.07, 1.37], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Sunderland": { scores: [0.59, 0.77, 0.75, 1.3, 1.18, 1.84, 0.6, 0.67, 1.15, 0.83, 1.14, 0.95, 0.71, 1.02, 0.75, 1.38, 1.5, 1.07, 1.32, 0.96], logo: "logos/Sunderland2.png", page: "Sunderland.html" },
"Tottenham": { scores: [0.76, 1.99, 0.84, 1.48, 1.55, 0.6, 0.82, 0.97, 0.83, 0.89, 1.31, 0.47, 1.39, 1.69, 0.97, 1.51, 0.76, 1.43, 0.72, 1.63], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.82, 1.34, 1.23, 0.65, 1.82, 0.6, 1.38, 0.93, 0.95, 0.38, 0.76, 0.49, 0.64, 1.64, 0.88, 1.47, 0.64, 0.7, 0.6, 1.27], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.58, 1.17, 1.04, 0.71, 0.25, 0.82, 0.71, 0.83, 0.76, 0.75, 0.46, 0.53, 0.59, 0.9, 0.86, 0.77, 1.66, 0.5, 0.88, 1.24], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 19; i <= gameweeks + 19 - 1; i++) {
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
