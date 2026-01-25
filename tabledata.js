const expectedGoalsData = {
  "Arsenal": { scores: [2.06, 2.09, 1.61, 1.77, 1.49, 1.63, 1.51, 1.98, 2.16, 1.2, 1.76, 1.94, 2.02, 2.72, 1.45], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.7, 1.59, 1.73, 2.18, 1.75, 1.32, 1.45, 2.14, 1.39, 1.84, 1.43, 1.87, 2.0, 1.51, 1.06], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.75, 1.46, 1.11, 1.79, 1.85, 1.71, 2.01, 1.75, 0.78, 1.3, 2.18, 1.53, 1.43, 1.27, 1.39], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.3, 1.39, 0.99, 1.85, 2.14, 1.69, 2.23, 1.94, 1.42, 1.82, 1.55, 2.28, 1.13, 1.63, 1.34], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.35, 1.56, 1.24, 1.44, 1.69, 0.94, 1.56, 1.53, 2.03, 1.58, 1.34, 1.32, 2.13, 1.85, 1.77], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Burnley": { scores: [0.88, 1.23, 0.73, 0.63, 0.98, 0.64, 1.09, 0.82, 0.99, 0.8, 0.73, 1.04, 0.84, 0.44, 1.2], logo: "logos/Burnley2.png", page: "Burnley.html" },
"Chelsea": { scores: [2.19, 1.79, 2.24, 2.46, 0.79, 1.25, 1.6, 1.14, 1.3, 1.79, 1.48, 1.71, 1.29, 1.92, 1.58], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.06, 1.1, 1.83, 1.6, 1.11, 1.19, 1.66, 0.81, 1.19, 1.63, 0.96, 1.21, 1.01, 1.08, 0.71], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.01, 1.0, 1.34, 1.23, 0.91, 1.69, 0.54, 0.93, 1.0, 1.06, 1.25, 0.89, 0.9, 1.3, 1.1], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.29, 1.18, 0.94, 1.36, 1.66, 1.89, 1.23, 2.13, 1.12, 1.26, 1.29, 0.69, 1.68, 1.55, 1.38], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Leeds": { scores: [0.69, 1.24, 0.82, 0.91, 0.95, 1.38, 0.95, 1.27, 1.09, 1.56, 1.19, 1.79, 1.17, 1.29, 1.33], logo: "logos/Leeds2.png", page: "Leeds.html" },
"Liverpool": { scores: [1.78, 1.45, 1.76, 1.59, 2.45, 2.0, 2.14, 1.65, 1.96, 1.27, 1.76, 1.67, 1.51, 1.4, 1.95], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.91, 1.55, 2.1, 1.91, 2.23, 2.04, 2.19, 1.88, 1.35, 1.14, 2.46, 1.36, 2.09, 1.95, 1.79], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.59, 1.74, 1.66, 1.03, 1.42, 1.21, 1.36, 1.47, 2.02, 1.02, 1.58, 1.4, 1.43, 1.54, 1.34], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.3, 1.75, 1.61, 1.09, 1.37, 1.8, 1.13, 1.9, 1.31, 1.96, 0.8, 1.78, 1.43, 2.2, 1.47], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.2, 1.42, 1.63, 1.18, 1.13, 0.83, 1.33, 1.22, 1.14, 1.87, 1.2, 0.86, 1.21, 1.14, 1.48], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Sunderland": { scores: [1.55, 0.5, 0.97, 1.1, 1.02, 1.17, 1.11, 0.84, 1.2, 0.78, 1.07, 1.12, 1.12, 0.71, 0.85], logo: "logos/Sunderland2.png", page: "Sunderland.html" },
"Tottenham": { scores: [1.17, 1.34, 1.44, 0.86, 1.32, 1.41, 1.16, 1.53, 1.42, 1.6, 1.61, 1.12, 2.01, 1.01, 1.23], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.8, 1.47, 1.28, 1.39, 0.92, 1.04, 0.93, 0.89, 1.53, 0.94, 0.97, 1.04, 0.68, 0.95, 1.6], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.24, 0.86, 0.91, 0.84, 0.96, 0.99, 0.93, 0.61, 1.17, 1.19, 1.22, 1.21, 0.94, 1.12, 1.31], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [2.5, 3.04, 1.86, 2.12, 2.26, 1.95, 2.9, 2.72, 2.3, 1.6, 2.25, 2.52, 2.53, 3.21, 2.46], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.36, 1.16, 1.45, 2.01, 1.92, 1.43, 1.29, 2.05, 1.6, 2.28, 1.37, 1.62, 2.16, 1.24, 0.83], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.44, 1.02, 1.31, 1.24, 1.8, 0.92, 1.68, 1.15, 0.58, 0.71, 1.53, 1.49, 0.93, 0.71, 1.13], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [0.91, 0.87, 1.0, 1.18, 1.88, 0.91, 1.98, 1.4, 1.84, 1.42, 1.03, 1.77, 0.62, 1.69, 0.71], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.81, 1.66, 0.89, 0.79, 1.62, 0.98, 1.64, 0.96, 1.85, 1.01, 1.14, 0.84, 1.95, 1.37, 1.31], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Burnley": { scores: [1.07, 1.15, 0.8, 0.43, 0.59, 0.92, 0.67, 0.6, 0.65, 0.77, 0.43, 0.83, 0.67, 0.33, 1.35], logo: "logos/Burnley2.png", page: "Burnley.html" },
"Chelsea": { scores: [2.24, 2.11, 2.2, 2.66, 1.13, 1.34, 1.62, 1.98, 1.3, 1.8, 1.31, 2.12, 1.11, 1.82, 2.14], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.51, 1.06, 2.4, 2.17, 1.21, 1.22, 1.93, 0.76, 1.34, 1.96, 0.86, 1.08, 2.04, 0.98, 1.18], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.3, 1.54, 1.64, 1.78, 1.27, 2.65, 1.11, 1.6, 1.21, 1.4, 1.89, 1.28, 1.81, 2.45, 1.47], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.02, 1.83, 0.61, 1.66, 1.34, 1.76, 1.32, 2.21, 0.7, 0.81, 1.2, 0.72, 1.2, 1.64, 1.15], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Leeds": { scores: [0.64, 1.21, 0.53, 0.57, 0.54, 1.55, 0.95, 0.72, 0.66, 1.52, 0.56, 1.76, 0.67, 0.79, 1.01], logo: "logos/Leeds2.png", page: "Leeds.html" },
"Liverpool": { scores: [1.37, 1.07, 1.89, 1.54, 1.99, 1.86, 1.56, 1.08, 1.64, 1.73, 1.91, 1.23, 1.37, 1.1, 1.3], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.55, 1.17, 1.96, 1.68, 1.94, 2.19, 1.97, 2.23, 1.36, 1.51, 2.41, 2.05, 1.62, 1.4, 1.74], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.38, 1.31, 1.39, 1.47, 1.65, 0.83, 1.17, 0.87, 1.69, 0.83, 1.06, 0.94, 1.63, 1.61, 0.85], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [0.84, 1.25, 1.19, 0.74, 2.01, 1.5, 1.01, 2.17, 1.52, 1.36, 0.86, 1.34, 1.48, 1.93, 1.26], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.74, 1.44, 2.02, 1.02, 0.92, 0.65, 1.46, 1.08, 1.25, 2.26, 1.71, 0.91, 1.2, 1.07, 1.25], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Sunderland": { scores: [2.07, 0.62, 0.86, 1.28, 0.79, 1.26, 1.05, 0.75, 1.21, 0.79, 1.5, 1.5, 1.2, 1.37, 1.03], logo: "logos/Sunderland2.png", page: "Sunderland.html" },
"Tottenham": { scores: [0.74, 0.88, 1.0, 0.85, 0.95, 1.52, 0.59, 1.48, 1.5, 1.03, 1.47, 0.77, 1.56, 0.73, 1.67], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.56, 1.47, 0.95, 0.84, 0.43, 0.75, 0.56, 0.59, 1.56, 0.98, 1.43, 0.51, 0.66, 0.55, 1.32], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.87, 0.83, 0.98, 1.01, 0.87, 0.68, 0.54, 0.69, 1.08, 1.05, 1.0, 1.63, 0.6, 1.07, 1.51], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 24; i <= gameweeks + 24 - 1; i++) {
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
