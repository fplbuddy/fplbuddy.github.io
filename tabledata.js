const expectedGoalsData = {
  "Arsenal": { scores: [2.02, 1.17, 1.97, 1.24, 2.53, 1.23, 2.01, 1.5, 1.47, 1.7, 1.6, 1.93, 2.25, 2.38, 1.62, 1.67, 1.42, 1.65, 1.49, 2.09, 1.79, 1.06, 1.66, 1.9, 1.95, 2.67, 1.26], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.85, 2.08, 1.36, 0.83, 1.6, 1.59, 0.96, 0.69, 1.6, 1.04, 1.22, 1.12, 1.62, 1.21, 1.65, 2.25, 1.71, 1.16, 1.31, 1.95, 1.32, 1.95, 1.29, 1.66, 1.81, 1.4, 0.87], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [2.07, 1.7, 1.3, 1.23, 1.39, 2.33, 1.41, 1.01, 0.88, 1.76, 1.44, 1.48, 1.82, 1.31, 1.07, 1.7, 2.07, 1.72, 1.91, 1.68, 0.73, 1.19, 2.38, 1.33, 1.36, 1.12, 1.4], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.63, 2.63, 0.82, 1.64, 2.69, 2.05, 1.76, 1.99, 1.21, 2.34, 1.15, 1.92, 1.22, 1.35, 1.0, 1.98, 2.16, 1.45, 2.49, 2.22, 1.47, 1.87, 1.57, 2.33, 1.04, 1.51, 1.38], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.95, 1.58, 1.49, 2.34, 1.39, 2.35, 0.83, 1.93, 2.64, 1.04, 1.76, 1.55, 1.47, 1.51, 1.22, 1.61, 1.93, 1.0, 1.93, 1.68, 2.17, 1.65, 1.4, 1.35, 2.5, 2.23, 1.91], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Burnley": { scores: [0.81, 0.92, 0.87, 0.78, 1.08, 0.84, 0.85, 0.95, 0.94, 1.1, 0.8, 1.15, 1.11, 1.35, 0.72, 0.66, 1.12, 0.7, 1.02, 0.89, 1.14, 0.91, 0.73, 1.28, 0.86, 0.48, 1.44], logo: "logos/Burnley2.png", page: "Burnley.html" },
"Chelsea": { scores: [2.08, 0.96, 2.13, 1.39, 1.41, 1.3, 1.42, 1.69, 1.0, 1.48, 1.87, 1.19, 2.25, 1.98, 2.59, 2.53, 0.79, 1.17, 1.57, 1.16, 1.21, 1.83, 1.57, 1.84, 1.33, 1.92, 1.85], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.65, 1.53, 1.74, 1.24, 1.01, 1.78, 1.6, 1.5, 1.08, 1.19, 1.55, 1.12, 1.27, 1.31, 2.11, 2.0, 1.26, 1.32, 2.16, 0.83, 1.31, 1.87, 1.11, 1.16, 1.18, 1.28, 0.8], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.0, 1.04, 0.92, 1.22, 0.73, 0.64, 1.38, 1.01, 1.24, 1.59, 0.78, 1.72, 1.04, 0.98, 1.12, 1.21, 0.86, 1.68, 0.52, 0.89, 1.02, 1.07, 1.22, 0.8, 0.79, 1.49, 1.04], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.81, 1.27, 0.97, 1.16, 1.67, 1.48, 1.48, 0.96, 1.3, 1.08, 1.71, 1.53, 1.21, 1.13, 0.8, 1.49, 1.54, 1.8, 1.22, 2.03, 1.07, 1.23, 1.14, 0.63, 1.36, 1.59, 1.26], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Leeds": { scores: [0.81, 0.57, 0.76, 0.92, 0.88, 0.83, 1.06, 0.76, 1.04, 0.74, 1.03, 0.66, 0.55, 1.05, 0.63, 0.67, 0.69, 1.28, 0.68, 1.06, 0.86, 1.37, 0.79, 1.44, 0.9, 1.08, 1.05], logo: "logos/Leeds2.png", page: "Leeds.html" },
"Liverpool": { scores: [2.37, 2.37, 2.89, 2.74, 2.44, 2.02, 3.08, 3.32, 1.9, 1.01, 3.24, 1.79, 2.02, 1.56, 2.38, 1.95, 2.88, 2.54, 2.46, 2.01, 2.31, 1.49, 1.86, 1.93, 1.72, 1.5, 2.4], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.52, 3.04, 1.74, 2.64, 1.4, 2.64, 1.78, 2.18, 1.57, 2.23, 1.77, 2.81, 1.85, 1.56, 2.11, 1.85, 2.5, 2.16, 2.17, 1.7, 1.3, 1.13, 2.44, 1.36, 2.19, 1.63, 1.67], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.19, 1.0, 1.89, 1.66, 1.42, 0.99, 1.32, 2.02, 1.79, 1.75, 1.02, 0.66, 1.52, 1.61, 1.56, 0.98, 1.22, 1.09, 1.2, 1.17, 2.18, 0.93, 1.57, 1.36, 1.56, 1.55, 1.32], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.13, 1.08, 1.78, 2.35, 1.72, 1.25, 1.4, 1.93, 1.35, 2.41, 1.84, 1.32, 1.23, 1.74, 1.47, 0.93, 1.31, 1.7, 1.03, 2.09, 1.11, 1.57, 0.73, 1.77, 1.41, 2.09, 1.38], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.04, 1.48, 1.54, 0.91, 1.49, 1.16, 0.95, 1.1, 0.91, 1.44, 0.75, 1.2, 1.13, 1.66, 1.87, 1.26, 1.22, 0.78, 1.4, 1.23, 1.11, 1.97, 1.45, 0.86, 1.23, 1.17, 1.32], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Sunderland": { scores: [0.82, 0.93, 0.73, 0.55, 0.87, 0.87, 1.43, 0.67, 0.87, 0.85, 0.8, 1.02, 1.4, 0.44, 0.89, 1.0, 0.77, 1.18, 1.05, 0.72, 1.06, 0.65, 1.02, 1.09, 1.01, 0.64, 0.74], logo: "logos/Sunderland2.png", page: "Sunderland.html" },
"Tottenham": { scores: [0.77, 1.75, 1.26, 1.82, 1.48, 1.57, 1.16, 1.49, 2.19, 1.35, 2.18, 2.02, 1.18, 1.46, 1.53, 0.93, 1.44, 1.41, 1.29, 1.79, 1.8, 1.85, 1.92, 1.14, 2.52, 1.07, 1.37], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.02, 1.19, 1.11, 1.15, 1.05, 0.73, 1.32, 1.4, 1.45, 1.36, 1.16, 1.66, 0.81, 1.53, 1.35, 1.24, 0.98, 1.09, 0.89, 0.86, 1.76, 0.88, 1.04, 1.13, 0.71, 0.95, 1.9], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.0, 0.8, 1.27, 1.26, 0.54, 1.28, 0.91, 1.03, 1.54, 0.8, 1.08, 0.69, 1.16, 0.92, 1.04, 0.82, 0.98, 1.11, 1.06, 0.66, 1.27, 1.46, 1.32, 1.55, 1.08, 1.24, 1.43], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [2.32, 1.91, 2.2, 2.17, 2.9, 2.65, 2.19, 2.52, 2.07, 1.81, 2.36, 2.57, 2.89, 3.23, 1.84, 1.97, 2.27, 1.84, 2.96, 2.59, 2.42, 1.62, 2.4, 2.65, 2.47, 3.11, 2.24], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [2.22, 2.24, 1.13, 1.45, 1.76, 1.87, 1.2, 1.11, 2.01, 1.52, 2.3, 1.33, 1.48, 1.35, 1.47, 2.57, 1.88, 1.55, 1.51, 2.11, 1.65, 2.62, 1.59, 1.6, 2.12, 1.11, 0.94], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.8, 1.96, 1.99, 1.24, 1.21, 2.17, 0.86, 0.92, 1.15, 1.29, 0.86, 0.84, 1.57, 1.5, 1.63, 1.44, 2.32, 1.18, 1.81, 1.55, 0.84, 1.04, 2.26, 1.57, 1.29, 0.98, 1.34], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [0.71, 1.98, 0.69, 0.81, 2.08, 1.39, 1.22, 1.12, 1.45, 2.14, 0.77, 1.51, 0.99, 0.88, 0.99, 1.0, 1.63, 0.9, 1.74, 1.72, 1.81, 1.45, 1.04, 1.61, 0.56, 1.39, 0.45], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [0.98, 1.14, 1.29, 1.58, 0.44, 2.1, 0.67, 1.24, 1.95, 0.54, 1.19, 1.09, 1.77, 1.35, 0.96, 0.69, 1.48, 0.96, 1.75, 0.67, 1.59, 0.79, 1.04, 0.85, 1.71, 1.69, 1.34], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Burnley": { scores: [0.62, 0.36, 0.88, 0.48, 0.94, 0.49, 1.26, 0.72, 0.36, 0.87, 0.19, 0.66, 1.23, 1.08, 0.61, 0.4, 0.57, 0.94, 0.74, 0.66, 0.57, 0.7, 0.43, 1.18, 0.82, 0.35, 1.2], logo: "logos/Burnley2.png", page: "Burnley.html" },
"Chelsea": { scores: [2.23, 1.56, 2.33, 1.46, 2.41, 1.44, 1.92, 1.81, 1.04, 1.7, 1.59, 1.63, 2.22, 1.99, 2.67, 2.57, 1.21, 1.56, 1.79, 2.06, 1.37, 1.98, 1.23, 2.11, 0.89, 1.71, 2.38], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.85, 1.83, 2.09, 1.56, 1.23, 2.19, 1.57, 1.92, 1.3, 1.78, 2.24, 1.51, 1.61, 1.1, 2.44, 2.2, 1.48, 1.22, 2.53, 0.91, 1.65, 2.08, 0.78, 1.32, 2.27, 1.11, 1.42], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.52, 1.7, 1.36, 2.02, 1.22, 1.46, 2.14, 1.66, 1.49, 2.25, 1.47, 2.58, 1.14, 1.61, 1.72, 1.88, 1.35, 2.48, 1.12, 1.56, 1.15, 1.12, 1.77, 1.28, 1.54, 2.63, 1.27], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [2.2, 0.87, 0.88, 1.45, 1.69, 1.57, 1.33, 1.11, 0.75, 1.13, 1.79, 1.06, 1.1, 1.87, 0.6, 1.85, 1.18, 1.68, 1.23, 2.05, 0.5, 0.77, 1.38, 0.75, 1.28, 1.45, 1.26], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Leeds": { scores: [0.79, 0.24, 0.59, 0.32, 0.34, 0.84, 1.19, 0.18, 0.83, 0.45, 0.9, 0.9, 0.53, 0.95, 0.37, 0.53, 0.41, 1.54, 0.58, 0.55, 0.57, 1.16, 0.46, 1.39, 0.4, 0.54, 0.74], logo: "logos/Leeds2.png", page: "Leeds.html" },
"Liverpool": { scores: [1.78, 1.53, 2.4, 1.99, 1.25, 1.04, 2.01, 2.35, 1.37, 0.91, 2.25, 1.13, 1.46, 1.05, 2.05, 1.42, 1.88, 1.65, 1.38, 0.93, 1.72, 1.72, 1.65, 1.29, 1.32, 1.23, 1.26], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.62, 2.83, 1.89, 2.88, 1.82, 2.4, 1.94, 2.55, 1.84, 1.76, 1.8, 2.52, 1.54, 1.05, 2.24, 1.98, 2.5, 2.29, 2.05, 2.17, 1.48, 1.74, 2.41, 2.24, 1.77, 1.64, 2.1], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.84, 1.09, 1.65, 1.42, 1.25, 1.02, 1.23, 1.78, 1.76, 1.66, 0.85, 0.72, 1.49, 1.16, 1.3, 1.49, 1.42, 0.91, 1.35, 0.93, 2.12, 0.8, 1.04, 0.72, 1.82, 1.54, 0.74], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.09, 1.76, 1.42, 2.29, 2.09, 1.37, 1.33, 1.94, 1.7, 2.39, 1.7, 1.63, 0.66, 1.3, 1.08, 0.79, 2.12, 1.68, 1.04, 2.44, 1.35, 1.52, 0.95, 1.29, 1.47, 1.93, 1.41], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [0.47, 1.02, 1.41, 1.47, 1.14, 1.14, 0.84, 1.83, 1.01, 1.29, 1.01, 0.74, 1.41, 1.75, 1.76, 0.71, 0.73, 0.57, 1.48, 0.83, 1.34, 2.01, 1.8, 0.79, 1.22, 1.06, 1.24], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Sunderland": { scores: [0.82, 0.91, 0.28, 0.36, 0.89, 0.48, 1.74, 0.57, 0.56, 0.48, 1.06, 0.96, 1.64, 0.46, 0.46, 1.13, 0.63, 1.39, 0.72, 0.62, 0.83, 0.71, 1.18, 1.06, 1.05, 1.13, 0.78], logo: "logos/Sunderland2.png", page: "Sunderland.html" },
"Tottenham": { scores: [0.66, 1.41, 0.84, 0.97, 1.12, 0.66, 1.01, 0.68, 2.09, 0.86, 1.57, 1.58, 0.79, 1.0, 1.16, 0.95, 1.07, 1.34, 0.43, 1.46, 1.73, 0.96, 1.34, 0.95, 2.04, 0.74, 1.76], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.63, 0.47, 0.76, 0.48, 1.01, 0.36, 1.13, 0.73, 1.07, 1.18, 0.56, 1.8, 0.53, 1.29, 1.06, 0.91, 0.28, 0.82, 0.57, 0.71, 1.4, 0.77, 1.47, 0.48, 0.71, 0.62, 1.74], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.96, 0.62, 1.07, 0.95, 0.4, 0.64, 0.23, 0.66, 1.17, 1.02, 0.8, 0.3, 0.81, 0.69, 0.77, 0.68, 0.9, 0.4, 0.41, 0.62, 0.86, 1.27, 0.73, 1.68, 0.41, 1.02, 1.18], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 12; i <= gameweeks + 12 - 1; i++) {
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
