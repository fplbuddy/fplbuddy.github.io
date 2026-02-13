const expectedGoalsData = {
  "Arsenal": { scores: [1.9, 1.62, 1.69, 1.56, 0.0, 2.14, 1.22, 1.96, 2.08, 2.08, 2.86, 1.59], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [2.06, 1.65, 1.31, 1.37, 1.96, 1.31, 1.74, 1.44, 1.79, 1.98, 1.42, 0.98], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.84, 1.91, 1.69, 2.17, 1.76, 0.84, 1.48, 2.26, 1.64, 1.58, 1.26, 1.43], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.78, 2.21, 1.64, 2.14, 1.96, 1.4, 1.87, 1.53, 2.19, 1.1, 1.66, 1.36], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.32, 1.52, 0.9, 1.49, 1.42, 1.98, 1.53, 1.31, 1.35, 1.92, 1.76, 1.6], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Burnley": { scores: [0.7, 0.96, 0.67, 1.07, 0.9, 0.99, 0.81, 0.72, 1.1, 0.78, 0.48, 1.2], logo: "logos/Burnley2.png", page: "Burnley.html" },
"Chelsea": { scores: [2.65, 0.88, 1.23, 1.81, 1.24, 1.32, 1.84, 1.57, 1.75, 1.4, 2.05, 1.71], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.55, 1.1, 1.23, 1.66, 0.0, 1.27, 1.58, 0.98, 1.19, 1.01, 1.07, 0.72], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.19, 1.01, 1.72, 0.57, 0.97, 0.99, 1.06, 1.25, 0.86, 0.95, 1.3, 1.14], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.39, 1.67, 1.83, 1.22, 2.16, 1.14, 1.24, 1.17, 0.72, 1.61, 1.54, 1.47], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Leeds": { scores: [0.89, 0.95, 1.45, 1.06, 1.28, 1.14, 1.6, 1.23, 1.92, 1.27, 1.33, 1.4], logo: "logos/Leeds2.png", page: "Leeds.html" },
"Liverpool": { scores: [1.6, 2.41, 2.02, 2.19, 1.68, 2.06, 1.32, 1.83, 1.68, 1.6, 1.31, 1.9], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.07, 2.31, 1.99, 2.2, 0.0, 1.47, 1.18, 2.59, 1.41, 2.02, 1.93, 1.64], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.12, 1.55, 1.4, 1.29, 1.53, 2.13, 1.16, 1.6, 1.47, 1.54, 1.58, 1.41], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.05, 1.35, 1.71, 1.2, 1.86, 1.37, 1.84, 0.82, 1.7, 1.39, 2.1, 1.53], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.13, 1.09, 0.78, 1.34, 1.22, 1.0, 1.85, 1.19, 0.89, 1.26, 1.1, 1.38], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Sunderland": { scores: [1.13, 0.99, 1.18, 1.07, 0.91, 1.2, 0.72, 1.02, 1.11, 1.08, 0.73, 0.88], logo: "logos/Sunderland2.png", page: "Sunderland.html" },
"Tottenham": { scores: [0.86, 1.38, 1.43, 1.17, 1.46, 1.43, 1.53, 1.58, 1.03, 1.97, 1.07, 1.21], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.42, 1.01, 1.19, 0.95, 0.88, 1.59, 1.06, 1.04, 1.09, 0.74, 1.12, 1.7], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.82, 0.8, 0.91, 0.85, 0.0, 1.08, 1.13, 1.15, 1.12, 0.88, 1.07, 1.27], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [2.11, 2.07, 2.04, 2.82, 0.0, 2.15, 1.54, 2.2, 2.43, 2.38, 3.09, 2.43], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [2.05, 2.24, 1.46, 1.37, 2.06, 1.84, 2.43, 1.56, 1.79, 2.29, 1.34, 0.97], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.21, 1.85, 0.97, 1.71, 1.08, 0.59, 0.79, 1.47, 1.52, 1.0, 0.72, 1.26], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.33, 1.91, 0.92, 2.14, 1.38, 1.86, 1.45, 1.01, 1.68, 0.66, 1.72, 0.75], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [0.85, 1.68, 0.92, 1.71, 0.94, 1.85, 1.08, 1.04, 0.91, 2.08, 1.33, 1.22], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Burnley": { scores: [0.35, 0.55, 0.89, 0.57, 0.58, 0.69, 0.79, 0.37, 0.73, 0.69, 0.28, 1.4], logo: "logos/Burnley2.png", page: "Burnley.html" },
"Chelsea": { scores: [2.49, 0.99, 1.35, 1.51, 1.89, 1.15, 1.57, 1.36, 2.04, 1.0, 1.71, 2.08], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [2.2, 1.07, 1.19, 1.72, 0.0, 1.27, 1.74, 0.8, 0.97, 1.93, 0.95, 1.02], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.64, 1.3, 2.55, 1.05, 1.45, 1.23, 1.33, 1.77, 1.22, 1.81, 2.42, 1.49], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.62, 1.26, 1.53, 1.31, 2.04, 0.64, 0.77, 1.19, 0.63, 1.03, 1.71, 1.08], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Leeds": { scores: [0.64, 0.5, 1.53, 0.95, 0.7, 0.59, 1.61, 0.52, 1.66, 0.7, 0.86, 0.91], logo: "logos/Leeds2.png", page: "Leeds.html" },
"Liverpool": { scores: [1.61, 1.83, 2.01, 1.56, 1.21, 1.6, 1.73, 1.88, 1.15, 1.24, 1.21, 1.29], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.75, 1.93, 2.28, 1.94, 0.0, 1.34, 1.48, 2.44, 2.13, 1.67, 1.42, 1.87], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.52, 1.66, 0.9, 1.27, 0.86, 1.6, 0.8, 1.08, 0.93, 1.71, 1.67, 1.01], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [0.63, 1.82, 1.23, 0.82, 2.02, 1.4, 1.13, 0.71, 1.3, 1.42, 1.64, 1.14], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.01, 1.1, 0.68, 1.48, 1.16, 1.35, 2.22, 1.8, 0.87, 1.24, 1.04, 1.2], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Sunderland": { scores: [1.24, 0.74, 1.18, 1.13, 0.78, 1.2, 0.88, 1.52, 1.64, 1.07, 1.37, 0.9], logo: "logos/Sunderland2.png", page: "Sunderland.html" },
"Tottenham": { scores: [0.75, 0.94, 1.46, 0.56, 1.47, 1.5, 1.08, 1.59, 0.83, 1.4, 0.64, 1.6], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.79, 0.45, 0.8, 0.55, 0.7, 1.7, 1.03, 1.43, 0.56, 0.62, 0.61, 1.24], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.06, 0.96, 0.66, 0.59, 0.0, 1.02, 1.01, 1.03, 1.65, 0.73, 1.07, 1.5], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 27; i <= gameweeks + 27 - 1; i++) {
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
