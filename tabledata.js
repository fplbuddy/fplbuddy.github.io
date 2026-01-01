const expectedGoalsData = {
  "Arsenal": { scores: [1.82, 1.81, 1.65, 2.05, 2.24, 2.18, 1.69, 1.83, 1.56, 1.76, 1.46, 2.17, 2.14, 1.24, 1.76, 2.01, 2.05, 2.83, 1.48], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.69, 1.29, 1.27, 1.31, 1.73, 1.59, 1.8, 2.29, 1.9, 1.36, 1.52, 2.09, 1.44, 1.9, 1.49, 1.87, 2.11, 1.58, 1.09], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [0.9, 1.76, 1.45, 1.49, 1.79, 1.41, 1.02, 1.69, 1.79, 1.63, 1.99, 1.68, 0.76, 1.24, 2.16, 1.42, 1.41, 1.2, 1.36], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.11, 1.95, 1.18, 1.73, 1.3, 1.34, 0.97, 1.84, 2.15, 1.63, 2.27, 2.0, 1.3, 1.79, 1.56, 2.14, 1.11, 1.54, 1.38], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [2.51, 1.1, 1.9, 1.52, 1.29, 1.53, 1.3, 1.5, 1.72, 0.97, 1.65, 1.6, 2.14, 1.62, 1.38, 1.33, 2.26, 1.99, 1.82], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Burnley": { scores: [0.85, 0.99, 0.74, 1.03, 0.9, 1.16, 0.71, 0.64, 0.96, 0.6, 1.03, 0.83, 1.0, 0.8, 0.7, 1.08, 0.83, 0.45, 1.23], logo: "logos/Burnley2.png", page: "Burnley.html" },
"Chelsea": { scores: [1.09, 1.5, 1.73, 1.29, 2.1, 1.9, 2.29, 2.47, 0.81, 1.28, 1.54, 1.09, 1.27, 1.79, 1.54, 1.69, 1.35, 1.87, 1.63], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.03, 1.18, 1.28, 1.07, 1.14, 1.21, 1.95, 1.75, 1.2, 1.26, 1.8, 0.86, 1.21, 1.65, 1.06, 1.25, 1.0, 1.16, 0.75], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.17, 1.5, 0.86, 1.55, 1.04, 1.01, 1.26, 1.21, 0.89, 1.67, 0.55, 0.92, 1.0, 1.07, 1.21, 0.86, 0.87, 1.29, 1.08], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.39, 1.2, 1.72, 1.59, 1.34, 1.12, 0.96, 1.43, 1.64, 1.84, 1.27, 2.18, 1.19, 1.3, 1.32, 0.71, 1.64, 1.67, 1.35], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Leeds": { scores: [1.28, 0.94, 1.25, 0.78, 0.68, 1.21, 0.83, 0.92, 0.91, 1.36, 0.92, 1.24, 1.09, 1.59, 1.14, 1.77, 1.14, 1.29, 1.28], logo: "logos/Leeds2.png", page: "Leeds.html" },
"Liverpool": { scores: [1.81, 0.98, 2.99, 1.93, 1.86, 1.54, 1.97, 1.74, 2.53, 2.3, 2.26, 1.86, 2.12, 1.31, 1.83, 1.84, 1.64, 1.54, 2.09], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.77, 2.35, 1.99, 2.9, 2.08, 1.76, 2.28, 2.01, 2.55, 2.2, 2.33, 1.97, 1.51, 1.24, 2.75, 1.42, 2.26, 2.08, 1.95], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.77, 1.91, 1.16, 0.74, 1.59, 1.69, 1.62, 0.98, 1.37, 1.19, 1.36, 1.45, 2.08, 1.05, 1.57, 1.43, 1.47, 1.53, 1.4], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.5, 2.28, 1.89, 1.49, 1.34, 1.72, 1.58, 1.08, 1.26, 1.78, 1.15, 1.89, 1.28, 1.85, 0.81, 1.79, 1.43, 2.08, 1.48], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [0.98, 1.38, 0.73, 1.14, 1.16, 1.5, 1.71, 1.21, 1.18, 0.84, 1.35, 1.23, 1.15, 1.9, 1.25, 0.89, 1.18, 1.17, 1.44], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Sunderland": { scores: [1.02, 0.95, 0.97, 1.14, 1.58, 0.52, 1.01, 1.12, 1.02, 1.25, 1.15, 0.84, 1.2, 0.82, 1.08, 1.22, 1.14, 0.69, 0.87], logo: "logos/Sunderland2.png", page: "Sunderland.html" },
"Tottenham": { scores: [1.82, 1.52, 2.0, 2.02, 1.22, 1.46, 1.47, 0.91, 1.43, 1.44, 1.29, 1.62, 1.55, 1.72, 1.82, 1.22, 2.19, 1.11, 1.22], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.39, 1.24, 1.17, 1.39, 0.85, 1.54, 1.31, 1.36, 0.98, 1.09, 0.93, 0.93, 1.63, 0.94, 0.93, 1.08, 0.69, 0.96, 1.67], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.31, 0.68, 0.96, 0.68, 1.17, 0.85, 0.9, 0.81, 0.94, 0.99, 0.93, 0.6, 1.12, 1.22, 1.17, 1.19, 0.96, 1.1, 1.32], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [2.04, 1.88, 2.41, 2.4, 2.53, 2.98, 1.89, 2.02, 2.22, 1.9, 2.89, 2.76, 2.33, 1.45, 2.23, 2.45, 2.5, 3.19, 2.37], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.87, 1.54, 2.11, 1.13, 1.36, 1.22, 1.37, 2.0, 1.96, 1.39, 1.29, 1.96, 1.58, 2.21, 1.34, 1.47, 2.18, 1.07, 0.71], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [0.81, 1.09, 0.75, 0.73, 1.55, 1.02, 1.42, 1.28, 1.8, 0.98, 1.78, 1.18, 0.59, 0.78, 1.6, 1.43, 0.97, 0.63, 1.19], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.55, 1.94, 0.88, 1.6, 0.89, 0.89, 0.92, 1.11, 1.92, 0.98, 1.98, 1.45, 1.84, 1.36, 1.04, 1.7, 0.52, 1.56, 0.62], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [2.13, 0.48, 1.17, 1.02, 1.77, 1.49, 0.82, 0.79, 1.53, 0.86, 1.58, 0.78, 1.84, 0.89, 1.07, 0.83, 1.91, 1.37, 1.24], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Burnley": { scores: [0.41, 0.74, 0.25, 0.67, 1.03, 1.07, 0.71, 0.42, 0.58, 0.94, 0.69, 0.57, 0.59, 0.75, 0.32, 0.85, 0.61, 0.29, 1.33], logo: "logos/Burnley2.png", page: "Burnley.html" },
"Chelsea": { scores: [0.85, 1.51, 1.53, 1.71, 2.14, 2.13, 2.18, 2.63, 1.05, 1.29, 1.58, 2.0, 1.1, 1.75, 1.26, 2.05, 0.97, 1.65, 2.1], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.11, 1.38, 1.9, 1.38, 1.56, 1.08, 2.45, 2.23, 1.27, 1.18, 1.99, 0.7, 1.39, 1.95, 0.8, 1.2, 2.09, 1.07, 1.14], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.65, 2.53, 1.4, 2.3, 1.37, 1.63, 1.8, 1.87, 1.41, 2.74, 1.16, 1.69, 1.36, 1.35, 1.97, 1.21, 1.84, 2.5, 1.48], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [0.82, 1.12, 1.43, 1.1, 1.02, 1.82, 0.51, 1.63, 1.2, 1.68, 1.3, 2.19, 0.6, 0.84, 1.12, 0.67, 1.22, 1.67, 1.13], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Leeds": { scores: [0.85, 0.51, 0.89, 1.06, 0.53, 1.11, 0.5, 0.51, 0.39, 1.43, 0.82, 0.68, 0.63, 1.47, 0.58, 1.7, 0.56, 0.69, 0.94], logo: "logos/Leeds2.png", page: "Leeds.html" },
"Liverpool": { scores: [1.25, 0.82, 2.37, 1.13, 1.31, 0.86, 1.82, 1.49, 1.87, 1.86, 1.38, 1.01, 1.53, 1.72, 1.73, 1.2, 1.3, 1.03, 1.26], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.68, 1.66, 1.57, 2.53, 1.48, 1.07, 1.92, 1.7, 2.01, 2.17, 1.97, 2.12, 1.4, 1.44, 2.47, 2.11, 1.65, 1.51, 1.69], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.39, 1.86, 0.68, 0.65, 1.31, 1.16, 1.35, 1.49, 1.5, 0.85, 1.09, 0.93, 1.68, 0.84, 1.05, 0.79, 1.59, 1.55, 0.81], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.78, 1.95, 1.91, 1.35, 0.78, 1.31, 1.15, 0.67, 2.06, 1.52, 1.07, 2.16, 1.49, 1.45, 0.86, 1.32, 1.53, 1.91, 1.29], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [0.92, 1.45, 0.96, 0.89, 1.61, 1.49, 2.03, 0.87, 0.9, 0.55, 1.4, 0.99, 1.18, 2.25, 1.7, 0.92, 1.19, 1.08, 1.28], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Sunderland": { scores: [0.81, 0.71, 1.39, 1.24, 2.03, 0.56, 0.7, 1.2, 0.83, 1.28, 0.96, 0.75, 1.06, 0.75, 1.43, 1.52, 1.14, 1.38, 0.98], logo: "logos/Sunderland2.png", page: "Sunderland.html" },
"Tottenham": { scores: [1.8, 0.86, 1.56, 1.78, 0.63, 0.92, 1.03, 0.81, 0.97, 1.42, 0.52, 1.47, 1.51, 0.99, 1.55, 0.77, 1.6, 0.77, 1.7], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.35, 1.26, 0.67, 1.59, 0.61, 1.57, 0.99, 0.93, 0.4, 0.79, 0.49, 0.62, 1.63, 0.96, 1.49, 0.59, 0.64, 0.62, 1.39], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.25, 1.11, 0.76, 0.28, 0.84, 0.75, 0.9, 0.87, 0.75, 0.5, 0.52, 0.57, 0.98, 1.02, 0.81, 1.48, 0.52, 0.94, 1.46], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
