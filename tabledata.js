const expectedGoalsData = {
  "Arsenal": { scores: [1.28, 2.54, 1.36, 1.94, 1.5, 1.67, 1.77, 1.61, 1.95, 2.38, 2.4, 1.71, 1.87, 1.4, 1.66, 1.6, 2.17, 1.96, 1.2, 1.67, 1.86, 2.03, 2.74, 1.33], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [0.81, 1.57, 1.5, 0.92, 0.69, 1.46, 1.03, 1.23, 1.1, 1.55, 1.29, 1.5, 2.16, 1.67, 1.08, 1.28, 1.84, 1.24, 1.85, 1.22, 1.69, 1.8, 1.36, 0.93], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.19, 1.41, 2.33, 1.46, 1.01, 0.89, 1.86, 1.41, 1.5, 1.84, 1.28, 1.16, 1.73, 2.04, 1.71, 1.99, 1.66, 0.76, 1.21, 2.38, 1.33, 1.35, 1.2, 1.37], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.77, 2.66, 2.06, 1.87, 2.08, 1.3, 2.28, 1.13, 1.8, 1.22, 1.36, 0.99, 1.85, 2.22, 1.59, 2.42, 2.27, 1.52, 1.77, 1.58, 2.27, 1.14, 1.48, 1.43], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [2.29, 1.44, 2.31, 0.86, 1.95, 2.63, 1.16, 1.88, 1.52, 1.53, 1.5, 1.23, 1.64, 1.81, 1.0, 1.97, 1.69, 2.24, 1.79, 1.34, 1.37, 2.44, 2.29, 1.87], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Burnley": { scores: [0.77, 1.0, 0.9, 0.86, 0.9, 0.89, 1.05, 0.81, 1.17, 1.1, 1.28, 0.71, 0.64, 1.08, 0.73, 1.05, 0.85, 1.04, 0.87, 0.76, 1.28, 0.8, 0.48, 1.36], logo: "logos/Burnley2.png", page: "Burnley.html" },
"Chelsea": { scores: [1.53, 1.46, 1.31, 1.37, 1.8, 1.1, 1.45, 1.84, 1.22, 2.18, 1.99, 2.56, 2.51, 0.82, 1.17, 1.53, 1.25, 1.29, 1.78, 1.52, 1.73, 1.38, 2.01, 1.88], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.21, 1.07, 1.81, 1.67, 1.41, 1.09, 1.14, 1.56, 1.06, 1.23, 1.26, 2.09, 1.93, 1.26, 1.42, 2.13, 0.92, 1.27, 1.81, 1.15, 1.27, 1.22, 1.3, 0.8], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.15, 0.72, 0.64, 1.42, 0.98, 1.22, 1.54, 0.78, 1.7, 1.01, 0.96, 1.19, 1.18, 0.87, 1.67, 0.54, 0.85, 1.04, 1.07, 1.24, 0.86, 0.81, 1.46, 1.13], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.14, 1.71, 1.38, 1.49, 0.97, 1.29, 1.02, 1.74, 1.42, 1.21, 1.17, 0.88, 1.5, 1.6, 1.74, 1.18, 2.0, 1.1, 1.25, 1.1, 0.65, 1.44, 1.58, 1.22], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Leeds": { scores: [0.98, 0.95, 0.86, 1.13, 0.83, 1.08, 0.79, 1.03, 0.75, 0.58, 1.04, 0.66, 0.71, 0.78, 1.33, 0.73, 1.11, 0.92, 1.4, 0.92, 1.51, 1.03, 1.07, 1.12], logo: "logos/Leeds2.png", page: "Leeds.html" },
"Liverpool": { scores: [2.67, 2.17, 2.09, 2.84, 3.12, 1.77, 1.0, 3.06, 1.87, 1.87, 1.58, 2.29, 1.8, 2.67, 2.42, 2.45, 1.85, 2.08, 1.53, 1.74, 1.86, 1.56, 1.43, 2.25], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.55, 1.41, 2.53, 1.71, 2.18, 1.48, 2.06, 1.76, 2.7, 1.98, 1.6, 1.97, 1.78, 2.53, 2.01, 2.16, 1.66, 1.27, 1.11, 2.48, 1.45, 2.14, 1.78, 1.59], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.66, 1.5, 0.98, 1.28, 1.94, 1.82, 1.79, 1.08, 0.68, 1.42, 1.67, 1.56, 1.04, 1.19, 1.09, 1.15, 1.28, 2.14, 0.91, 1.54, 1.35, 1.57, 1.45, 1.27], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [2.53, 1.89, 1.29, 1.53, 2.16, 1.44, 2.58, 2.0, 1.38, 1.39, 1.86, 1.72, 1.11, 1.48, 1.8, 1.1, 2.22, 1.23, 1.81, 0.82, 1.79, 1.49, 2.2, 1.46], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [0.99, 1.58, 1.15, 1.02, 1.16, 0.92, 1.47, 0.76, 1.24, 1.13, 1.72, 1.84, 1.28, 1.2, 0.87, 1.34, 1.35, 1.08, 1.98, 1.48, 0.86, 1.21, 1.2, 1.42], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Sunderland": { scores: [0.64, 0.89, 0.88, 1.48, 0.75, 0.99, 0.91, 0.83, 1.08, 1.46, 0.47, 0.94, 0.99, 0.89, 1.27, 1.03, 0.76, 1.16, 0.68, 1.0, 1.15, 1.03, 0.72, 0.74], logo: "logos/Sunderland2.png", page: "Sunderland.html" },
"Tottenham": { scores: [1.78, 1.43, 1.56, 1.18, 1.52, 2.12, 1.48, 2.11, 2.07, 1.25, 1.47, 1.48, 0.92, 1.4, 1.38, 1.33, 1.67, 1.81, 1.72, 1.92, 1.13, 2.47, 1.05, 1.41], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.1, 1.0, 0.8, 1.24, 1.29, 1.44, 1.26, 1.24, 1.6, 0.79, 1.56, 1.3, 1.31, 1.0, 1.06, 0.94, 0.85, 1.69, 0.89, 1.06, 1.14, 0.7, 0.95, 1.86], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.15, 0.53, 1.19, 0.89, 0.98, 1.41, 0.81, 0.99, 0.71, 1.16, 0.83, 0.95, 0.79, 0.89, 1.05, 1.01, 0.62, 1.2, 1.41, 1.3, 1.42, 0.98, 1.1, 1.38], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [2.23, 2.95, 2.65, 2.12, 2.51, 2.05, 1.84, 2.35, 2.53, 2.81, 3.11, 1.85, 1.98, 2.21, 1.83, 2.91, 2.69, 2.34, 1.65, 2.19, 2.6, 2.49, 3.1, 2.26], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.39, 1.84, 1.88, 1.27, 1.12, 1.98, 1.6, 2.3, 1.25, 1.48, 1.4, 1.47, 2.47, 2.06, 1.55, 1.59, 2.13, 1.69, 2.54, 1.67, 1.61, 2.24, 1.2, 1.02], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.08, 1.11, 2.04, 0.77, 0.83, 0.94, 1.14, 0.76, 0.77, 1.56, 1.37, 1.52, 1.35, 2.06, 1.02, 1.74, 1.39, 0.7, 0.82, 1.98, 1.4, 1.19, 0.84, 1.21], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [0.85, 1.94, 1.52, 1.16, 1.1, 1.47, 2.01, 0.79, 1.45, 1.06, 0.78, 0.9, 0.97, 1.7, 0.9, 1.81, 1.65, 1.76, 1.43, 1.07, 1.6, 0.59, 1.36, 0.53], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.66, 0.57, 2.08, 0.72, 1.37, 2.05, 0.64, 1.22, 1.21, 1.83, 1.42, 1.12, 0.79, 1.51, 0.95, 1.78, 0.78, 1.76, 0.9, 1.1, 0.83, 1.88, 1.71, 1.41], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Burnley": { scores: [0.4, 0.9, 0.49, 1.21, 0.58, 0.36, 0.84, 0.23, 0.63, 1.17, 1.05, 0.62, 0.41, 0.54, 0.95, 0.68, 0.67, 0.53, 0.69, 0.42, 1.1, 0.82, 0.32, 1.25], logo: "logos/Burnley2.png", page: "Burnley.html" },
"Chelsea": { scores: [1.52, 2.42, 1.38, 1.99, 1.81, 1.13, 1.8, 1.61, 1.73, 2.26, 2.19, 2.59, 2.64, 1.24, 1.7, 1.66, 2.14, 1.41, 2.01, 1.31, 2.11, 1.05, 1.74, 2.38], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.6, 1.22, 2.11, 1.54, 1.89, 1.19, 1.79, 2.19, 1.48, 1.62, 1.12, 2.45, 2.28, 1.52, 1.26, 2.4, 0.95, 1.47, 2.06, 0.87, 1.33, 2.23, 1.14, 1.32], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.87, 1.16, 1.28, 2.12, 1.57, 1.37, 2.23, 1.46, 2.36, 1.08, 1.55, 1.57, 1.76, 1.14, 2.41, 1.01, 1.43, 1.09, 1.09, 1.73, 1.18, 1.48, 2.43, 1.22], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.5, 1.84, 1.59, 1.45, 1.22, 0.85, 1.17, 1.79, 1.09, 1.21, 1.91, 0.69, 1.86, 1.23, 1.74, 1.3, 2.14, 0.63, 0.85, 1.47, 0.78, 1.3, 1.66, 1.16], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Leeds": { scores: [0.35, 0.35, 0.81, 1.13, 0.22, 0.81, 0.38, 0.87, 0.92, 0.46, 0.89, 0.39, 0.58, 0.4, 1.41, 0.6, 0.52, 0.59, 1.22, 0.46, 1.39, 0.42, 0.51, 0.78], logo: "logos/Leeds2.png", page: "Leeds.html" },
"Liverpool": { scores: [1.89, 1.18, 1.05, 2.05, 2.18, 1.37, 0.86, 2.23, 1.11, 1.24, 1.01, 1.96, 1.39, 1.83, 1.76, 1.32, 0.92, 1.66, 1.71, 1.59, 1.29, 1.26, 1.28, 1.19], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.64, 1.71, 2.24, 1.8, 2.36, 1.66, 1.58, 1.7, 2.45, 1.44, 1.03, 2.07, 1.65, 2.29, 2.09, 1.95, 2.0, 1.37, 1.5, 2.34, 2.12, 1.59, 1.5, 1.98], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.58, 1.22, 1.11, 1.08, 1.87, 1.71, 1.76, 0.86, 0.71, 1.48, 1.15, 1.37, 1.53, 1.41, 0.83, 1.39, 0.95, 2.0, 0.84, 1.03, 0.78, 1.78, 1.5, 0.77], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [2.33, 2.06, 1.35, 1.39, 2.04, 1.69, 2.27, 1.86, 1.67, 0.77, 1.29, 1.14, 0.85, 2.1, 1.68, 1.08, 2.35, 1.4, 1.49, 0.94, 1.27, 1.49, 1.93, 1.47], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.59, 1.2, 1.25, 0.9, 1.88, 1.16, 1.42, 1.0, 0.83, 1.47, 1.76, 1.92, 0.82, 0.82, 0.67, 1.54, 0.94, 1.44, 2.1, 1.83, 0.88, 1.13, 1.18, 1.27], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Sunderland": { scores: [0.39, 0.75, 0.5, 1.61, 0.57, 0.6, 0.51, 1.05, 1.01, 1.66, 0.45, 0.5, 1.12, 0.65, 1.33, 0.7, 0.54, 0.82, 0.78, 1.14, 1.21, 1.04, 1.16, 0.76], logo: "logos/Sunderland2.png", page: "Sunderland.html" },
"Tottenham": { scores: [0.85, 1.03, 0.62, 0.95, 0.62, 1.86, 0.78, 1.44, 1.54, 0.69, 0.94, 0.89, 0.77, 1.01, 1.21, 0.43, 1.3, 1.56, 0.83, 1.37, 0.92, 1.78, 0.67, 1.61], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.51, 1.04, 0.4, 1.13, 0.71, 1.22, 1.15, 0.61, 1.7, 0.56, 1.39, 1.06, 0.89, 0.35, 0.87, 0.58, 0.8, 1.5, 0.81, 1.45, 0.52, 0.65, 0.55, 1.63], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.95, 0.39, 0.64, 0.29, 0.72, 1.18, 1.07, 0.68, 0.34, 0.79, 0.69, 0.8, 0.72, 0.94, 0.44, 0.45, 0.57, 0.92, 1.23, 0.74, 1.58, 0.44, 1.02, 1.28], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 15; i <= gameweeks + 15 - 1; i++) {
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
