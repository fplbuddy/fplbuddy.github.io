const expectedGoalsData = {
  "Arsenal": { scores: [1.99, 1.57, 1.65, 1.75, 1.55, 2.02, 2.24, 2.21, 1.66, 1.79, 1.38, 1.69, 1.48, 2.13, 1.94, 1.22, 1.67, 2.04, 1.96, 2.67, 1.31], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.03, 0.79, 1.61, 1.15, 1.3, 1.25, 1.72, 1.45, 1.75, 2.32, 1.88, 1.21, 1.5, 2.03, 1.36, 1.94, 1.52, 1.86, 1.99, 1.54, 1.07], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.44, 1.01, 0.91, 1.82, 1.46, 1.51, 1.84, 1.35, 1.08, 1.69, 1.91, 1.69, 1.96, 1.74, 0.77, 1.22, 2.28, 1.33, 1.49, 1.24, 1.34], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.72, 1.86, 1.11, 1.95, 1.03, 1.61, 1.18, 1.25, 0.93, 1.76, 2.0, 1.46, 2.22, 1.98, 1.31, 1.8, 1.51, 2.04, 1.07, 1.36, 1.31], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [0.85, 1.86, 2.54, 1.16, 1.85, 1.64, 1.41, 1.47, 1.26, 1.58, 1.74, 1.0, 1.78, 1.67, 2.15, 1.7, 1.31, 1.35, 2.39, 2.13, 1.92], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Burnley": { scores: [0.82, 0.92, 0.93, 1.11, 0.82, 1.16, 1.03, 1.27, 0.72, 0.64, 1.08, 0.69, 1.07, 0.95, 1.1, 0.85, 0.79, 1.24, 0.87, 0.49, 1.39], logo: "logos/Burnley2.png", page: "Burnley.html" },
"Chelsea": { scores: [1.4, 1.74, 1.09, 1.55, 1.75, 1.17, 2.06, 1.91, 2.36, 2.39, 0.8, 1.19, 1.5, 1.12, 1.28, 1.8, 1.51, 1.63, 1.33, 1.89, 1.68], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.58, 1.53, 1.06, 1.18, 1.41, 1.03, 1.16, 1.27, 2.01, 1.89, 1.28, 1.34, 1.98, 0.91, 1.25, 1.73, 1.12, 1.24, 1.11, 1.25, 0.79], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.44, 0.98, 1.24, 1.59, 0.84, 1.67, 1.07, 1.09, 1.23, 1.28, 0.9, 1.69, 0.57, 0.87, 1.05, 1.11, 1.24, 0.91, 0.83, 1.4, 1.13], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.61, 1.07, 1.44, 1.13, 1.84, 1.64, 1.4, 1.22, 1.0, 1.54, 1.73, 1.89, 1.27, 2.2, 1.22, 1.37, 1.29, 0.73, 1.6, 1.75, 1.37], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Leeds": { scores: [1.19, 0.95, 1.29, 0.9, 1.3, 0.8, 0.67, 1.17, 0.74, 0.85, 0.91, 1.41, 0.83, 1.25, 1.09, 1.6, 1.05, 1.7, 1.14, 1.27, 1.25], logo: "logos/Leeds2.png", page: "Leeds.html" },
"Liverpool": { scores: [2.79, 2.93, 1.92, 0.99, 2.97, 1.83, 1.86, 1.59, 2.08, 1.72, 2.56, 2.37, 2.34, 1.88, 2.26, 1.39, 1.71, 1.9, 1.53, 1.48, 2.18], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.82, 2.2, 1.62, 2.34, 2.01, 2.95, 2.1, 1.74, 2.39, 1.96, 2.63, 2.14, 2.29, 1.81, 1.37, 1.24, 2.66, 1.47, 2.3, 1.93, 1.84], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.43, 2.15, 1.91, 1.93, 1.22, 0.76, 1.74, 1.8, 1.67, 1.07, 1.32, 1.21, 1.34, 1.41, 2.25, 1.0, 1.67, 1.5, 1.6, 1.56, 1.44], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.53, 2.03, 1.38, 2.36, 1.91, 1.4, 1.33, 1.75, 1.6, 1.09, 1.32, 1.8, 1.04, 1.97, 1.17, 1.74, 0.8, 1.78, 1.38, 2.06, 1.54], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.05, 1.09, 0.98, 1.44, 0.78, 1.22, 1.13, 1.65, 1.85, 1.29, 1.24, 0.89, 1.5, 1.32, 1.15, 1.96, 1.38, 0.86, 1.23, 1.26, 1.43], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Sunderland": { scores: [1.4, 0.76, 0.95, 0.88, 0.82, 1.03, 1.41, 0.47, 0.93, 1.08, 0.87, 1.18, 1.05, 0.75, 1.12, 0.7, 0.97, 1.13, 1.07, 0.66, 0.73], logo: "logos/Sunderland2.png", page: "Sunderland.html" },
"Tottenham": { scores: [1.16, 1.47, 1.95, 1.46, 2.04, 2.0, 1.27, 1.51, 1.48, 0.93, 1.53, 1.36, 1.31, 1.61, 1.65, 1.76, 1.88, 1.17, 2.33, 1.03, 1.31], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.41, 1.38, 1.47, 1.26, 1.24, 1.53, 0.81, 1.57, 1.39, 1.34, 1.03, 1.19, 0.99, 0.92, 1.74, 0.9, 1.02, 1.15, 0.73, 0.98, 1.83], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.87, 1.0, 1.35, 0.73, 0.98, 0.71, 1.14, 0.81, 0.91, 0.77, 0.92, 1.03, 0.97, 0.62, 1.14, 1.31, 1.24, 1.29, 0.99, 1.19, 1.33], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [2.14, 2.28, 2.01, 1.85, 2.3, 2.33, 2.55, 3.12, 1.97, 1.97, 2.25, 1.83, 2.84, 2.7, 2.31, 1.45, 2.25, 2.4, 2.41, 3.05, 2.27], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.23, 1.04, 1.88, 1.54, 2.15, 1.23, 1.54, 1.29, 1.41, 2.14, 2.0, 1.52, 1.31, 1.99, 1.58, 2.48, 1.38, 1.54, 2.11, 1.14, 0.79], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [0.9, 0.88, 0.96, 1.17, 0.79, 0.8, 1.6, 1.17, 1.46, 1.3, 2.09, 1.17, 1.71, 1.23, 0.72, 0.88, 1.75, 1.45, 1.01, 0.72, 1.2], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.19, 1.15, 1.44, 2.08, 0.87, 1.47, 0.89, 0.87, 0.95, 1.03, 1.7, 0.92, 1.89, 1.43, 1.74, 1.28, 0.94, 1.58, 0.5, 1.44, 0.57], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [0.68, 1.26, 1.97, 0.48, 1.16, 0.97, 1.71, 1.41, 0.87, 0.86, 1.44, 0.92, 1.74, 0.77, 1.67, 0.86, 1.1, 0.84, 1.86, 1.4, 1.18], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Burnley": { scores: [1.19, 0.66, 0.39, 0.72, 0.26, 0.68, 1.22, 1.04, 0.67, 0.46, 0.68, 0.92, 0.71, 0.56, 0.58, 0.7, 0.35, 0.91, 0.68, 0.34, 1.33], logo: "logos/Burnley2.png", page: "Burnley.html" },
"Chelsea": { scores: [1.79, 1.82, 0.99, 1.61, 1.78, 1.78, 2.23, 2.23, 2.37, 2.63, 1.26, 1.49, 1.76, 2.09, 1.27, 1.85, 1.35, 2.12, 1.08, 1.78, 2.41], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.58, 1.71, 1.26, 1.58, 2.21, 1.55, 1.61, 1.15, 2.43, 2.33, 1.34, 1.28, 2.17, 0.82, 1.55, 2.02, 0.9, 1.32, 2.18, 1.28, 1.35], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [2.21, 1.69, 1.65, 2.4, 1.36, 2.25, 1.23, 1.48, 1.69, 1.71, 1.33, 2.5, 1.14, 1.63, 1.35, 1.24, 1.8, 1.15, 1.65, 2.58, 1.35], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.22, 1.08, 0.73, 1.07, 1.36, 0.97, 0.88, 1.67, 0.46, 1.7, 1.09, 1.51, 1.12, 1.93, 0.52, 0.83, 1.09, 0.65, 1.12, 1.52, 1.07], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Leeds": { scores: [1.24, 0.27, 0.74, 0.47, 0.79, 0.94, 0.53, 0.96, 0.47, 0.49, 0.36, 1.53, 0.69, 0.69, 0.52, 1.35, 0.51, 1.45, 0.48, 0.59, 0.8], logo: "logos/Leeds2.png", page: "Leeds.html" },
"Liverpool": { scores: [2.1, 1.94, 1.19, 0.87, 2.2, 1.1, 1.33, 0.88, 1.98, 1.38, 1.79, 1.79, 1.35, 0.95, 1.48, 1.65, 1.64, 1.12, 1.32, 1.07, 1.35], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.74, 2.34, 1.68, 1.57, 1.47, 2.46, 1.41, 1.02, 1.84, 1.69, 2.0, 2.05, 1.86, 2.01, 1.39, 1.48, 2.27, 2.02, 1.71, 1.45, 1.72], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.08, 1.84, 1.38, 1.64, 0.67, 0.66, 1.23, 1.1, 1.24, 1.39, 1.39, 0.82, 1.11, 0.88, 1.68, 0.82, 1.1, 0.75, 1.72, 1.42, 0.74], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.2, 1.99, 1.73, 2.02, 1.88, 1.44, 0.78, 1.43, 1.14, 0.7, 2.04, 1.49, 1.12, 2.36, 1.43, 1.47, 0.94, 1.3, 1.46, 1.88, 1.27], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [0.81, 1.87, 1.0, 1.41, 1.06, 1.0, 1.56, 1.56, 2.02, 0.89, 0.88, 0.59, 1.4, 1.0, 1.28, 2.13, 1.9, 0.98, 1.25, 1.05, 1.31], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Sunderland": { scores: [1.51, 0.56, 0.71, 0.71, 1.23, 1.09, 1.78, 0.55, 0.62, 1.07, 0.74, 1.22, 0.84, 0.69, 0.96, 0.72, 1.26, 1.37, 1.01, 1.23, 0.94], logo: "logos/Sunderland2.png", page: "Sunderland.html" },
"Tottenham": { scores: [1.03, 0.77, 1.94, 0.81, 1.45, 1.56, 0.61, 0.83, 1.01, 0.83, 0.88, 1.3, 0.48, 1.34, 1.64, 0.91, 1.45, 0.78, 1.6, 0.76, 1.61], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.0, 0.78, 1.3, 1.19, 0.65, 1.78, 0.64, 1.4, 0.94, 0.92, 0.39, 0.75, 0.5, 0.66, 1.59, 0.89, 1.45, 0.65, 0.71, 0.64, 1.44], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.31, 0.58, 1.14, 1.02, 0.74, 0.26, 0.79, 0.74, 0.79, 0.76, 0.77, 0.47, 0.54, 0.59, 0.88, 1.01, 0.76, 1.62, 0.46, 0.87, 1.25], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
