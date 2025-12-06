const expectedGoalsData = {
  "Arsenal": { scores: [2.48, 1.31, 2.05, 1.56, 1.66, 1.76, 1.58, 1.92, 2.34, 2.31, 1.71, 1.86, 1.49, 1.76, 1.52, 2.13, 1.93, 1.32, 1.68, 1.99, 2.01, 2.68, 1.3], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.65, 1.58, 1.05, 0.71, 1.5, 1.07, 1.25, 1.19, 1.63, 1.36, 1.68, 2.23, 1.75, 1.22, 1.36, 1.92, 1.3, 1.9, 1.41, 1.77, 1.9, 1.44, 1.09], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.37, 2.21, 1.41, 1.06, 0.82, 1.78, 1.45, 1.45, 1.76, 1.28, 1.08, 1.66, 1.91, 1.64, 1.9, 1.59, 0.71, 1.19, 2.24, 1.24, 1.41, 1.27, 1.3], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [2.52, 1.98, 1.79, 2.01, 1.21, 2.15, 1.19, 1.7, 1.25, 1.35, 0.93, 1.9, 2.15, 1.54, 2.3, 2.17, 1.41, 1.85, 1.54, 2.17, 1.23, 1.4, 1.41], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.5, 2.29, 0.85, 1.99, 2.65, 1.31, 1.91, 1.69, 1.5, 1.49, 1.33, 1.69, 1.81, 0.99, 1.97, 1.74, 2.28, 1.84, 1.47, 1.43, 2.45, 2.31, 1.9], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Burnley": { scores: [1.04, 0.87, 0.79, 0.88, 0.92, 1.0, 0.79, 1.13, 1.04, 1.22, 0.68, 0.67, 1.04, 0.68, 1.01, 0.89, 1.07, 0.82, 0.8, 1.22, 0.81, 0.45, 1.29], logo: "logos/Burnley2.png", page: "Burnley.html" },
"Chelsea": { scores: [1.36, 1.3, 1.4, 1.74, 1.19, 1.54, 1.78, 1.17, 2.1, 1.92, 2.44, 2.41, 0.77, 1.21, 1.51, 1.17, 1.38, 1.73, 1.59, 1.65, 1.36, 1.94, 1.79], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.15, 1.75, 1.61, 1.49, 1.08, 1.16, 1.49, 1.11, 1.18, 1.32, 2.01, 1.85, 1.24, 1.39, 2.03, 0.99, 1.26, 1.75, 1.13, 1.24, 1.13, 1.28, 0.75], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [0.78, 0.6, 1.4, 0.95, 1.2, 1.5, 0.81, 1.64, 1.07, 1.04, 1.17, 1.16, 0.88, 1.62, 0.52, 0.9, 1.03, 1.06, 1.22, 0.93, 0.79, 1.4, 1.12], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.83, 1.45, 1.59, 1.03, 1.39, 1.18, 1.85, 1.62, 1.31, 1.2, 1.04, 1.57, 1.71, 1.85, 1.25, 2.12, 1.2, 1.35, 1.23, 0.68, 1.52, 1.69, 1.33], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Leeds": { scores: [1.01, 0.9, 1.18, 0.9, 1.14, 0.86, 1.18, 0.77, 0.59, 1.09, 0.76, 0.8, 0.91, 1.37, 0.77, 1.18, 0.98, 1.47, 0.99, 1.59, 1.1, 1.22, 1.19], logo: "logos/Leeds2.png", page: "Leeds.html" },
"Liverpool": { scores: [2.23, 2.02, 2.7, 2.96, 1.87, 0.94, 2.92, 1.81, 1.83, 1.67, 2.17, 1.72, 2.55, 2.32, 2.35, 1.92, 2.17, 1.42, 1.64, 1.8, 1.62, 1.46, 2.16], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.46, 2.64, 1.78, 2.24, 1.68, 2.31, 1.87, 2.79, 2.1, 1.71, 2.24, 1.9, 2.64, 2.07, 2.27, 1.7, 1.44, 1.13, 2.6, 1.47, 2.24, 1.87, 1.75], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.45, 1.0, 1.26, 1.86, 1.75, 1.73, 1.15, 0.64, 1.49, 1.62, 1.51, 0.98, 1.13, 1.09, 1.17, 1.25, 2.04, 0.96, 1.49, 1.32, 1.49, 1.37, 1.32], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.83, 1.37, 1.53, 2.13, 1.39, 2.5, 1.97, 1.43, 1.4, 1.83, 1.71, 1.22, 1.4, 1.77, 1.18, 2.13, 1.2, 1.78, 0.79, 1.89, 1.45, 2.15, 1.58], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.54, 1.22, 1.1, 1.08, 0.96, 1.44, 0.71, 1.22, 1.08, 1.67, 1.77, 1.26, 1.26, 0.94, 1.42, 1.33, 1.11, 1.92, 1.42, 0.92, 1.2, 1.18, 1.38], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Sunderland": { scores: [0.9, 0.94, 1.45, 0.82, 0.99, 0.91, 0.81, 1.08, 1.43, 0.46, 0.94, 1.06, 0.89, 1.25, 1.1, 0.77, 1.15, 0.72, 0.98, 1.14, 1.03, 0.7, 0.8], logo: "logos/Sunderland2.png", page: "Sunderland.html" },
"Tottenham": { scores: [1.41, 1.58, 1.16, 1.53, 2.07, 1.49, 2.09, 2.07, 1.38, 1.48, 1.51, 0.89, 1.53, 1.35, 1.36, 1.64, 1.78, 1.83, 1.91, 1.2, 2.43, 1.15, 1.36], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.04, 0.88, 1.33, 1.37, 1.43, 1.22, 1.24, 1.54, 0.86, 1.54, 1.28, 1.29, 1.01, 1.14, 1.03, 0.9, 1.66, 0.87, 1.01, 1.14, 0.67, 0.97, 1.81], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.49, 1.13, 0.86, 0.94, 1.33, 0.74, 0.96, 0.75, 1.1, 0.85, 0.9, 0.74, 0.89, 1.0, 0.97, 0.57, 1.15, 1.33, 1.23, 1.32, 1.0, 1.13, 1.32], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [3.06, 2.73, 2.14, 2.47, 2.2, 1.96, 2.45, 2.63, 2.77, 3.16, 1.98, 2.05, 2.31, 1.86, 2.97, 2.83, 2.46, 1.62, 2.26, 2.54, 2.57, 3.19, 2.37], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.77, 1.83, 1.23, 1.05, 1.92, 1.56, 2.22, 1.19, 1.44, 1.39, 1.33, 2.26, 2.06, 1.5, 1.56, 2.04, 1.64, 2.44, 1.46, 1.51, 2.22, 1.16, 0.86], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.18, 2.1, 0.83, 0.88, 0.95, 1.13, 0.74, 0.82, 1.67, 1.28, 1.56, 1.38, 2.06, 1.07, 1.83, 1.44, 0.73, 0.84, 1.87, 1.44, 1.09, 0.77, 1.26], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.81, 1.61, 1.22, 1.08, 1.5, 2.01, 0.84, 1.48, 0.98, 0.8, 0.91, 0.92, 1.78, 0.97, 1.89, 1.54, 1.78, 1.3, 1.13, 1.6, 0.53, 1.39, 0.58], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [0.54, 1.95, 0.65, 1.27, 1.99, 0.5, 1.17, 0.99, 1.72, 1.34, 0.93, 0.75, 1.42, 0.86, 1.67, 0.73, 1.72, 0.8, 1.02, 0.76, 1.83, 1.48, 1.33], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Burnley": { scores: [0.81, 0.55, 1.24, 0.6, 0.35, 0.88, 0.27, 0.63, 1.19, 1.07, 0.67, 0.45, 0.58, 0.99, 0.74, 0.6, 0.51, 0.74, 0.37, 1.02, 0.75, 0.34, 1.34], logo: "logos/Burnley2.png", page: "Burnley.html" },
"Chelsea": { scores: [2.3, 1.27, 1.75, 1.74, 0.93, 1.54, 1.52, 1.64, 2.12, 2.14, 2.34, 2.56, 1.13, 1.47, 1.54, 2.03, 1.18, 1.91, 1.15, 2.0, 0.99, 1.59, 2.26], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.16, 2.04, 1.56, 1.79, 1.25, 1.72, 2.23, 1.55, 1.7, 1.12, 2.54, 2.39, 1.61, 1.3, 2.31, 0.91, 1.51, 2.1, 0.97, 1.44, 2.28, 1.23, 1.36], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.28, 1.36, 2.27, 1.69, 1.49, 2.38, 1.44, 2.3, 1.12, 1.51, 1.7, 1.88, 1.24, 2.53, 1.1, 1.54, 1.22, 1.21, 1.82, 1.15, 1.61, 2.49, 1.29], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.77, 1.47, 1.32, 1.13, 0.77, 1.07, 1.54, 0.92, 1.13, 1.77, 0.53, 1.73, 1.08, 1.59, 1.21, 2.04, 0.57, 0.79, 1.22, 0.68, 1.22, 1.61, 1.03], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Leeds": { scores: [0.4, 0.87, 1.17, 0.26, 0.87, 0.41, 0.79, 0.97, 0.48, 0.94, 0.43, 0.54, 0.36, 1.43, 0.66, 0.57, 0.65, 1.32, 0.53, 1.48, 0.44, 0.5, 0.81], logo: "logos/Leeds2.png", page: "Leeds.html" },
"Liverpool": { scores: [1.12, 1.03, 2.11, 2.03, 1.24, 0.86, 2.27, 1.17, 1.24, 0.91, 1.95, 1.42, 1.82, 1.84, 1.29, 0.88, 1.51, 1.72, 1.61, 1.34, 1.28, 1.18, 1.22], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.59, 2.07, 1.67, 2.2, 1.52, 1.35, 1.58, 2.35, 1.26, 0.94, 1.76, 1.48, 2.01, 1.94, 1.79, 1.86, 1.26, 1.33, 2.24, 1.97, 1.46, 1.41, 1.69], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.28, 1.03, 1.09, 1.95, 1.6, 1.83, 0.77, 0.73, 1.35, 1.13, 1.38, 1.56, 1.45, 0.85, 1.28, 1.02, 1.87, 0.89, 1.07, 0.82, 1.79, 1.53, 0.75], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [2.03, 1.36, 1.42, 2.08, 1.69, 2.12, 1.92, 1.52, 0.8, 1.3, 1.11, 0.75, 2.08, 1.69, 1.1, 2.31, 1.42, 1.52, 0.93, 1.19, 1.5, 1.9, 1.32], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.22, 1.18, 0.84, 1.93, 1.11, 1.47, 1.03, 0.91, 1.54, 1.69, 2.04, 0.9, 0.82, 0.63, 1.44, 0.97, 1.37, 2.2, 1.88, 0.96, 1.17, 1.27, 1.36], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Sunderland": { scores: [0.8, 0.51, 1.53, 0.53, 0.63, 0.58, 1.13, 1.07, 1.77, 0.5, 0.57, 1.04, 0.74, 1.27, 0.7, 0.59, 0.84, 0.75, 1.21, 1.34, 1.12, 1.23, 0.83], logo: "logos/Sunderland2.png", page: "Sunderland.html" },
"Tottenham": { scores: [1.07, 0.66, 1.0, 0.67, 1.85, 0.84, 1.44, 1.62, 0.61, 0.99, 0.9, 0.78, 0.91, 1.25, 0.48, 1.32, 1.58, 0.8, 1.46, 0.85, 1.66, 0.72, 1.62], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.96, 0.36, 1.02, 0.68, 1.32, 1.19, 0.62, 1.7, 0.61, 1.48, 1.11, 0.95, 0.39, 0.79, 0.52, 0.73, 1.59, 0.87, 1.48, 0.57, 0.67, 0.58, 1.51], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.42, 0.69, 0.34, 0.78, 1.2, 1.12, 0.7, 0.31, 0.86, 0.73, 0.85, 0.78, 0.87, 0.49, 0.5, 0.59, 0.95, 1.15, 0.74, 1.6, 0.43, 0.93, 1.37], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
