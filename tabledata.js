const expectedGoalsData = {
  "Arsenal": { scores: [1.84, 1.71, 2.09, 2.15, 2.13, 1.7, 1.78, 1.57, 1.76, 1.62, 2.15, 2.25, 1.23, 1.78, 2.05, 2.12, 2.88, 1.51], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.33, 1.43, 1.31, 1.79, 1.66, 1.85, 2.25, 1.89, 1.38, 1.54, 2.23, 1.5, 1.87, 1.51, 1.86, 2.13, 1.62, 1.08], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.75, 1.46, 1.53, 1.78, 1.46, 1.13, 1.76, 1.76, 1.68, 2.0, 1.73, 0.81, 1.24, 2.12, 1.49, 1.42, 1.21, 1.41], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.91, 1.18, 1.82, 1.33, 1.34, 1.04, 1.88, 2.17, 1.7, 2.29, 1.93, 1.46, 1.84, 1.57, 2.27, 1.1, 1.62, 1.39], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.06, 1.95, 1.49, 1.41, 1.56, 1.28, 1.48, 1.76, 1.01, 1.55, 1.6, 2.1, 1.54, 1.36, 1.29, 2.22, 1.86, 1.81], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Burnley": { scores: [0.96, 0.71, 0.97, 0.82, 1.16, 0.7, 0.61, 0.93, 0.63, 1.04, 0.79, 0.97, 0.79, 0.67, 0.99, 0.81, 0.45, 1.18], logo: "logos/Burnley2.png", page: "Burnley.html" },
"Chelsea": { scores: [1.48, 1.74, 1.3, 2.18, 1.85, 2.2, 2.48, 0.84, 1.27, 1.53, 1.17, 1.26, 1.8, 1.52, 1.75, 1.33, 1.82, 1.54], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.16, 1.17, 1.03, 1.12, 1.16, 1.89, 1.68, 1.15, 1.17, 1.68, 0.81, 1.17, 1.66, 1.02, 1.24, 1.07, 1.12, 0.76], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.52, 0.88, 1.52, 1.05, 1.02, 1.34, 1.24, 0.89, 1.72, 0.58, 0.93, 1.01, 1.1, 1.26, 0.87, 0.9, 1.27, 1.06], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.19, 1.63, 1.6, 1.33, 1.23, 0.93, 1.36, 1.61, 1.92, 1.3, 2.19, 1.18, 1.29, 1.34, 0.74, 1.71, 1.63, 1.35], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Leeds": { scores: [0.89, 1.22, 0.81, 0.69, 1.21, 0.78, 0.88, 0.87, 1.27, 0.9, 1.21, 1.04, 1.52, 1.13, 1.72, 1.06, 1.25, 1.26], logo: "logos/Leeds2.png", page: "Leeds.html" },
"Liverpool": { scores: [0.98, 2.89, 1.89, 1.78, 1.46, 1.79, 1.71, 2.53, 2.15, 2.12, 1.77, 2.05, 1.36, 1.81, 1.75, 1.57, 1.48, 2.03], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.26, 1.88, 2.75, 1.91, 1.66, 2.2, 1.91, 2.31, 2.19, 2.28, 1.94, 1.41, 1.25, 2.6, 1.46, 2.18, 2.03, 1.89], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.85, 1.12, 0.74, 1.56, 1.61, 1.62, 1.04, 1.38, 1.14, 1.34, 1.44, 1.95, 1.0, 1.55, 1.41, 1.37, 1.55, 1.35], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [2.2, 1.85, 1.51, 1.33, 1.74, 1.53, 1.06, 1.4, 1.79, 1.13, 1.83, 1.3, 1.94, 0.84, 1.8, 1.47, 2.17, 1.48], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.4, 0.76, 1.12, 1.18, 1.41, 1.68, 1.21, 1.16, 0.81, 1.35, 1.17, 1.16, 1.89, 1.17, 0.86, 1.17, 1.15, 1.48], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Sunderland": { scores: [0.91, 0.97, 1.14, 1.55, 0.52, 0.99, 1.1, 1.01, 1.15, 1.13, 0.8, 1.13, 0.79, 1.09, 1.15, 1.12, 0.73, 0.84], logo: "logos/Sunderland2.png", page: "Sunderland.html" },
"Tottenham": { scores: [1.48, 1.97, 1.89, 1.14, 1.37, 1.39, 0.91, 1.34, 1.41, 1.21, 1.59, 1.4, 1.64, 1.68, 1.15, 2.0, 1.03, 1.27], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.23, 1.07, 1.29, 0.79, 1.46, 1.26, 1.36, 0.93, 1.04, 0.88, 0.89, 1.54, 0.91, 0.98, 1.03, 0.7, 0.9, 1.54], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.76, 1.0, 0.69, 1.26, 0.88, 0.96, 0.85, 0.99, 1.03, 0.95, 0.65, 1.19, 1.2, 1.18, 1.19, 0.99, 1.15, 1.36], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [1.89, 2.33, 2.38, 2.51, 2.97, 1.77, 2.02, 2.16, 1.83, 2.8, 2.61, 2.23, 1.44, 2.16, 2.38, 2.48, 3.19, 2.33], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.57, 2.07, 1.1, 1.33, 1.16, 1.39, 2.07, 1.86, 1.4, 1.3, 2.05, 1.57, 2.26, 1.31, 1.58, 2.22, 1.14, 0.75], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.14, 0.71, 0.75, 1.42, 0.95, 1.31, 1.28, 1.81, 0.92, 1.77, 1.18, 0.53, 0.72, 1.62, 1.44, 0.9, 0.66, 1.14], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [2.01, 0.87, 1.63, 0.84, 0.87, 0.91, 1.14, 1.97, 0.93, 1.93, 1.5, 1.82, 1.37, 1.06, 1.79, 0.57, 1.63, 0.66], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [0.52, 1.16, 1.01, 1.75, 1.57, 0.79, 0.76, 1.57, 0.86, 1.62, 0.86, 1.9, 0.97, 1.1, 0.82, 1.86, 1.43, 1.3], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Burnley": { scores: [0.79, 0.28, 0.76, 1.07, 1.16, 0.75, 0.42, 0.57, 0.9, 0.67, 0.56, 0.61, 0.75, 0.37, 0.9, 0.59, 0.28, 1.29], logo: "logos/Burnley2.png", page: "Burnley.html" },
"Chelsea": { scores: [1.52, 1.53, 1.79, 2.26, 2.08, 2.28, 2.73, 1.04, 1.26, 1.61, 1.97, 1.22, 1.83, 1.28, 2.11, 1.04, 1.79, 2.16], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.32, 1.9, 1.36, 1.53, 1.05, 2.49, 2.14, 1.26, 1.22, 2.03, 0.72, 1.36, 2.0, 0.82, 1.12, 2.03, 0.99, 1.1], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [2.33, 1.2, 2.22, 1.22, 1.46, 1.62, 1.77, 1.24, 2.67, 0.99, 1.55, 1.17, 1.28, 1.88, 1.16, 1.72, 2.41, 1.41], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.14, 1.48, 1.13, 1.05, 1.8, 0.55, 1.67, 1.31, 1.77, 1.3, 2.27, 0.64, 0.8, 1.1, 0.64, 1.2, 1.59, 1.14], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Leeds": { scores: [0.56, 0.98, 1.09, 0.58, 1.22, 0.55, 0.53, 0.5, 1.58, 0.93, 0.73, 0.71, 1.5, 0.6, 1.86, 0.68, 0.78, 1.07], logo: "logos/Leeds2.png", page: "Leeds.html" },
"Liverpool": { scores: [0.79, 2.46, 1.09, 1.32, 0.95, 1.86, 1.49, 1.97, 1.78, 1.5, 1.01, 1.54, 1.67, 1.81, 1.23, 1.32, 0.99, 1.25], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.72, 1.64, 2.51, 1.6, 1.16, 1.97, 1.74, 2.09, 2.23, 2.07, 2.23, 1.42, 1.46, 2.55, 2.1, 1.66, 1.49, 1.7], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.92, 0.76, 0.62, 1.32, 1.27, 1.42, 1.45, 1.58, 0.83, 1.07, 0.89, 1.76, 0.83, 1.04, 0.87, 1.63, 1.58, 0.82], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [2.06, 1.85, 1.34, 0.84, 1.31, 1.25, 0.74, 2.06, 1.6, 1.08, 2.24, 1.55, 1.45, 0.84, 1.37, 1.55, 2.03, 1.29], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.46, 0.91, 0.81, 1.63, 1.49, 1.92, 0.9, 0.86, 0.56, 1.37, 1.02, 1.11, 2.28, 1.68, 0.87, 1.15, 1.06, 1.22], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Sunderland": { scores: [0.74, 1.55, 1.38, 2.2, 0.59, 0.83, 1.28, 0.86, 1.41, 1.06, 0.8, 1.24, 0.77, 1.54, 1.52, 1.28, 1.41, 1.07], logo: "logos/Sunderland2.png", page: "Sunderland.html" },
"Tottenham": { scores: [0.87, 1.71, 1.89, 0.74, 1.0, 1.09, 0.85, 1.0, 1.56, 0.6, 1.56, 1.61, 1.07, 1.53, 0.78, 1.74, 0.81, 1.74], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.24, 0.69, 1.6, 0.57, 1.56, 0.99, 0.86, 0.4, 0.73, 0.51, 0.54, 1.52, 0.95, 1.41, 0.52, 0.6, 0.57, 1.41], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.09, 0.79, 0.32, 0.84, 0.79, 0.93, 0.93, 0.76, 0.58, 0.5, 0.58, 1.07, 1.09, 0.94, 1.58, 0.54, 0.98, 1.54], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 21; i <= gameweeks + 21 - 1; i++) {
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
