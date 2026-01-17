const expectedGoalsData = {
  "Arsenal": { scores: [2.07, 2.17, 2.11, 1.64, 1.78, 1.55, 1.69, 1.58, 2.08, 2.22, 1.2, 1.82, 1.97, 2.1, 2.82, 1.44], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.36, 1.71, 1.66, 1.77, 2.27, 1.84, 1.37, 1.54, 2.2, 1.47, 1.87, 1.47, 1.86, 2.11, 1.52, 1.06], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.49, 1.81, 1.45, 1.16, 1.82, 1.84, 1.69, 2.07, 1.8, 0.8, 1.34, 2.23, 1.48, 1.45, 1.23, 1.44], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.84, 1.32, 1.44, 1.02, 1.87, 2.23, 1.75, 2.31, 2.03, 1.48, 1.85, 1.64, 2.33, 1.12, 1.6, 1.36], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.48, 1.41, 1.51, 1.25, 1.45, 1.75, 0.97, 1.59, 1.53, 2.12, 1.58, 1.38, 1.37, 2.19, 1.93, 1.84], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Burnley": { scores: [1.03, 0.87, 1.21, 0.7, 0.64, 0.95, 0.65, 1.08, 0.81, 0.98, 0.81, 0.69, 1.06, 0.81, 0.45, 1.21], logo: "logos/Burnley2.png", page: "Burnley.html" },
"Chelsea": { scores: [1.26, 2.18, 1.83, 2.25, 2.47, 0.81, 1.24, 1.6, 1.17, 1.24, 1.81, 1.48, 1.72, 1.27, 1.85, 1.56], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.02, 1.09, 1.11, 1.85, 1.62, 1.15, 1.17, 1.69, 0.79, 1.2, 1.63, 0.95, 1.23, 1.04, 1.08, 0.72], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.55, 1.02, 1.0, 1.34, 1.25, 0.93, 1.7, 0.55, 0.93, 0.99, 1.03, 1.26, 0.85, 0.87, 1.27, 1.07], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.58, 1.38, 1.26, 0.95, 1.41, 1.67, 1.97, 1.32, 2.24, 1.15, 1.3, 1.32, 0.73, 1.76, 1.65, 1.44], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Leeds": { scores: [0.87, 0.7, 1.27, 0.85, 0.91, 0.92, 1.37, 0.93, 1.26, 1.13, 1.6, 1.21, 1.83, 1.15, 1.29, 1.36], logo: "logos/Leeds2.png", page: "Leeds.html" },
"Liverpool": { scores: [1.9, 1.84, 1.44, 1.81, 1.68, 2.52, 2.11, 2.13, 1.71, 2.0, 1.35, 1.73, 1.77, 1.57, 1.43, 1.96], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.67, 1.93, 1.57, 2.14, 1.97, 2.35, 2.13, 2.27, 1.84, 1.42, 1.18, 2.58, 1.45, 2.1, 2.03, 1.81], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [0.72, 1.55, 1.65, 1.65, 1.05, 1.34, 1.21, 1.31, 1.47, 2.01, 1.03, 1.52, 1.35, 1.4, 1.54, 1.32], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.52, 1.32, 1.77, 1.62, 1.09, 1.44, 1.88, 1.19, 1.92, 1.31, 2.02, 0.84, 1.82, 1.51, 2.26, 1.52], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.12, 1.16, 1.48, 1.68, 1.17, 1.15, 0.82, 1.34, 1.21, 1.14, 1.92, 1.22, 0.89, 1.24, 1.19, 1.51], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Sunderland": { scores: [1.12, 1.51, 0.49, 0.92, 1.06, 1.0, 1.16, 1.07, 0.82, 1.13, 0.75, 1.05, 1.12, 1.11, 0.72, 0.83], logo: "logos/Sunderland2.png", page: "Sunderland.html" },
"Tottenham": { scores: [1.93, 1.15, 1.41, 1.47, 0.88, 1.35, 1.38, 1.17, 1.59, 1.44, 1.62, 1.69, 1.14, 2.08, 1.06, 1.28], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.3, 0.81, 1.47, 1.27, 1.37, 0.89, 1.03, 0.87, 0.87, 1.52, 0.89, 0.98, 1.01, 0.67, 0.95, 1.58], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.69, 1.28, 0.89, 0.96, 0.83, 0.96, 0.99, 0.94, 0.63, 1.21, 1.25, 1.21, 1.22, 0.97, 1.14, 1.37], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [2.43, 2.47, 3.06, 1.8, 2.07, 2.23, 1.9, 2.88, 2.67, 2.25, 1.54, 2.17, 2.41, 2.56, 3.19, 2.44], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.09, 1.34, 1.17, 1.43, 2.01, 1.91, 1.45, 1.35, 2.1, 1.6, 2.35, 1.33, 1.6, 2.21, 1.2, 0.82], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [0.75, 1.39, 0.95, 1.31, 1.28, 1.83, 0.87, 1.69, 1.15, 0.54, 0.66, 1.49, 1.46, 0.86, 0.66, 1.1], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.64, 0.9, 0.86, 0.97, 1.17, 1.94, 0.93, 1.95, 1.42, 1.87, 1.37, 1.09, 1.82, 0.61, 1.7, 0.7], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.03, 1.81, 1.65, 0.86, 0.77, 1.58, 0.93, 1.71, 0.91, 1.88, 0.99, 1.14, 0.81, 1.89, 1.37, 1.33], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Burnley": { scores: [0.73, 1.1, 1.15, 0.78, 0.42, 0.54, 0.91, 0.63, 0.53, 0.6, 0.73, 0.38, 0.8, 0.61, 0.3, 1.27], logo: "logos/Burnley2.png", page: "Burnley.html" },
"Chelsea": { scores: [1.8, 2.23, 2.04, 2.14, 2.64, 1.06, 1.27, 1.52, 1.96, 1.21, 1.79, 1.26, 2.05, 1.04, 1.73, 2.18], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.42, 1.56, 1.1, 2.48, 2.18, 1.31, 1.26, 1.97, 0.79, 1.35, 2.06, 0.89, 1.14, 2.1, 1.01, 1.19], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [2.1, 1.22, 1.42, 1.56, 1.75, 1.18, 2.6, 1.03, 1.55, 1.13, 1.29, 1.89, 1.18, 1.76, 2.44, 1.39], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.14, 1.06, 1.83, 0.59, 1.74, 1.3, 1.79, 1.3, 2.22, 0.68, 0.79, 1.15, 0.7, 1.17, 1.6, 1.1], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Leeds": { scores: [1.07, 0.57, 1.14, 0.53, 0.52, 0.48, 1.56, 0.92, 0.66, 0.67, 1.43, 0.54, 1.73, 0.63, 0.73, 1.03], logo: "logos/Leeds2.png", page: "Leeds.html" },
"Liverpool": { scores: [1.12, 1.33, 1.04, 1.99, 1.55, 2.05, 1.86, 1.55, 1.09, 1.58, 1.78, 1.93, 1.3, 1.4, 1.09, 1.29], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.51, 1.59, 1.19, 1.94, 1.68, 2.0, 2.21, 2.09, 2.28, 1.44, 1.51, 2.5, 2.13, 1.63, 1.46, 1.74], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [0.63, 1.25, 1.22, 1.4, 1.44, 1.59, 0.76, 1.07, 0.83, 1.61, 0.81, 0.97, 0.85, 1.65, 1.52, 0.8], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.28, 0.79, 1.18, 1.14, 0.7, 1.98, 1.5, 1.01, 2.19, 1.51, 1.31, 0.81, 1.27, 1.44, 1.94, 1.18], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [0.79, 1.68, 1.4, 1.92, 0.93, 0.87, 0.6, 1.34, 1.02, 1.15, 2.22, 1.74, 0.89, 1.1, 1.07, 1.18], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Sunderland": { scores: [1.36, 2.09, 0.61, 0.82, 1.22, 0.8, 1.27, 1.02, 0.73, 1.18, 0.77, 1.48, 1.48, 1.23, 1.4, 1.05], logo: "logos/Sunderland2.png", page: "Sunderland.html" },
"Tottenham": { scores: [1.79, 0.73, 0.96, 0.99, 0.85, 0.94, 1.55, 0.59, 1.49, 1.62, 1.03, 1.48, 0.78, 1.58, 0.79, 1.71], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.62, 0.57, 1.48, 0.96, 0.81, 0.4, 0.7, 0.52, 0.56, 1.49, 0.98, 1.41, 0.49, 0.61, 0.52, 1.28], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.34, 0.82, 0.8, 0.93, 0.99, 0.79, 0.61, 0.49, 0.62, 1.09, 1.01, 0.92, 1.64, 0.56, 0.96, 1.5], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 23; i <= gameweeks + 23 - 1; i++) {
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
