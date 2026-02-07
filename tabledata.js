const expectedGoalsData = {
  "Arsenal": { scores: [3.66, 1.87, 1.57, 1.7, 1.53, 0.0, 2.15, 1.25, 1.91, 2.01, 2.12, 2.83, 1.55], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.67, 2.13, 1.69, 1.3, 1.45, 2.07, 1.3, 1.79, 1.42, 1.83, 2.0, 1.49, 1.04], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.14, 1.87, 1.9, 1.69, 2.12, 1.81, 0.85, 1.43, 2.26, 1.61, 1.5, 1.29, 1.38], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [0.99, 1.76, 2.11, 1.61, 2.11, 1.92, 1.34, 1.76, 1.53, 2.19, 1.09, 1.6, 1.34], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.17, 1.39, 1.58, 0.97, 1.57, 1.53, 2.06, 1.6, 1.34, 1.39, 2.05, 1.87, 1.75], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Burnley": { scores: [0.76, 0.65, 0.93, 0.63, 1.05, 0.83, 0.98, 0.77, 0.72, 1.07, 0.79, 0.47, 1.17], logo: "logos/Burnley2.png", page: "Burnley.html" },
"Chelsea": { scores: [2.35, 2.59, 0.88, 1.26, 1.75, 1.19, 1.34, 1.88, 1.56, 1.69, 1.39, 2.01, 1.68], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.84, 1.56, 1.13, 1.22, 1.67, 0.0, 1.25, 1.63, 0.99, 1.19, 1.0, 1.06, 0.74], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.28, 1.22, 0.96, 1.68, 0.57, 0.93, 0.96, 1.06, 1.26, 0.87, 0.92, 1.28, 1.11], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [0.96, 1.42, 1.7, 1.93, 1.21, 2.19, 1.18, 1.26, 1.25, 0.74, 1.66, 1.57, 1.48], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Leeds": { scores: [0.84, 0.86, 0.92, 1.36, 0.97, 1.2, 1.09, 1.5, 1.15, 1.78, 1.17, 1.26, 1.33], logo: "logos/Leeds2.png", page: "Leeds.html" },
"Liverpool": { scores: [1.86, 1.59, 2.53, 2.06, 2.23, 1.73, 2.03, 1.32, 1.85, 1.77, 1.59, 1.39, 1.94], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.09, 1.99, 2.27, 1.92, 2.2, 0.0, 1.38, 1.18, 2.5, 1.35, 1.99, 1.9, 1.68], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.8, 1.1, 1.55, 1.38, 1.37, 1.55, 2.18, 1.13, 1.63, 1.52, 1.56, 1.57, 1.45], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.59, 1.06, 1.3, 1.75, 1.13, 1.84, 1.32, 1.84, 0.82, 1.71, 1.34, 2.13, 1.45], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.62, 1.21, 1.15, 0.84, 1.35, 1.26, 1.09, 1.91, 1.24, 0.9, 1.29, 1.18, 1.45], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Sunderland": { scores: [1.02, 1.14, 1.04, 1.24, 1.14, 0.92, 1.25, 0.78, 1.05, 1.16, 1.17, 0.74, 0.89], logo: "logos/Sunderland2.png", page: "Sunderland.html" },
"Tottenham": { scores: [1.54, 0.91, 1.37, 1.47, 1.22, 1.48, 1.48, 1.61, 1.64, 1.1, 2.06, 1.07, 1.23], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.37, 1.44, 1.02, 1.14, 0.98, 0.92, 1.61, 1.04, 1.02, 1.09, 0.76, 1.09, 1.72], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.42, 0.82, 0.85, 0.95, 0.86, 0.0, 1.12, 1.15, 1.16, 1.14, 0.9, 1.06, 1.27], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [4.6, 2.01, 2.07, 1.9, 2.83, 0.0, 2.14, 1.54, 2.2, 2.38, 2.34, 3.13, 2.39], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.55, 2.11, 2.13, 1.42, 1.27, 2.0, 1.68, 2.29, 1.44, 1.66, 2.27, 1.25, 0.93], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.4, 1.18, 1.76, 1.0, 1.75, 1.06, 0.58, 0.8, 1.59, 1.52, 0.95, 0.75, 1.17], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [0.98, 1.25, 1.96, 0.93, 2.12, 1.5, 1.91, 1.42, 0.98, 1.68, 0.68, 1.73, 0.72], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [0.94, 0.86, 1.58, 0.91, 1.59, 0.89, 1.88, 1.0, 1.05, 0.9, 2.04, 1.42, 1.18], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Burnley": { scores: [0.79, 0.37, 0.6, 0.93, 0.6, 0.56, 0.64, 0.74, 0.41, 0.85, 0.68, 0.29, 1.41], logo: "logos/Burnley2.png", page: "Burnley.html" },
"Chelsea": { scores: [2.17, 2.61, 1.04, 1.36, 1.61, 1.98, 1.25, 1.62, 1.31, 2.04, 1.02, 1.72, 2.05], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [2.35, 2.21, 1.06, 1.15, 1.89, 0.0, 1.34, 1.77, 0.79, 1.0, 2.0, 1.01, 1.06], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.59, 1.66, 1.36, 2.65, 1.09, 1.52, 1.31, 1.34, 1.8, 1.3, 1.85, 2.39, 1.46], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [0.62, 1.59, 1.27, 1.6, 1.29, 2.18, 0.65, 0.86, 1.21, 0.67, 1.12, 1.74, 1.17], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Leeds": { scores: [0.48, 0.59, 0.52, 1.44, 0.94, 0.74, 0.56, 1.58, 0.52, 1.72, 0.63, 0.77, 0.9], logo: "logos/Leeds2.png", page: "Leeds.html" },
"Liverpool": { scores: [1.8, 1.49, 1.8, 1.94, 1.47, 1.08, 1.54, 1.73, 1.85, 1.09, 1.24, 1.13, 1.31], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.91, 1.73, 1.99, 2.16, 1.87, 0.0, 1.3, 1.44, 2.44, 2.1, 1.67, 1.37, 1.78], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.27, 1.48, 1.61, 0.87, 1.18, 0.82, 1.68, 0.76, 1.08, 0.85, 1.55, 1.54, 0.87], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.08, 0.68, 1.91, 1.26, 0.87, 1.98, 1.44, 1.2, 0.74, 1.25, 1.38, 1.69, 1.14], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [2.19, 1.02, 1.03, 0.73, 1.49, 1.13, 1.36, 2.32, 1.75, 0.92, 1.31, 1.04, 1.26], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Sunderland": { scores: [0.78, 1.21, 0.75, 1.29, 1.04, 0.79, 1.14, 0.83, 1.45, 1.6, 1.05, 1.39, 0.93], logo: "logos/Sunderland2.png", page: "Sunderland.html" },
"Tottenham": { scores: [1.02, 0.77, 0.91, 1.48, 0.54, 1.42, 1.43, 1.01, 1.57, 0.8, 1.55, 0.67, 1.65], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.83, 0.77, 0.4, 0.73, 0.55, 0.63, 1.64, 0.98, 1.42, 0.56, 0.6, 0.6, 1.32], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.65, 1.05, 0.92, 0.63, 0.61, 0.0, 1.0, 1.11, 0.97, 1.57, 0.64, 1.04, 1.55], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 26; i <= gameweeks + 26 - 1; i++) {
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
