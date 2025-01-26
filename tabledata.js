const expectedGoalsData = {
  "Arsenal": { scores: [1.61, 2.65, 2.79, 1.68, 1.93, 2.08, 2.12, 1.63, 2.47, 2.63, 1.91, 1.98, 1.36, 1.99, 3.1], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [2.06, 2.37, 1.69, 1.4, 1.8, 1.23, 1.52, 1.52, 2.52, 1.61, 1.18, 1.72, 1.45, 1.9, 1.57], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.12, 2.3, 2.09, 1.39, 1.56, 1.83, 2.16, 1.87, 1.57, 1.28, 1.59, 0.81, 1.67, 1.07, 2.18], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.85, 1.99, 2.09, 1.43, 1.78, 1.41, 1.42, 1.64, 0.86, 1.64, 1.33, 1.69, 2.08, 1.67, 2.01], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.18, 1.45, 2.17, 1.39, 1.48, 1.01, 1.58, 1.2, 2.06, 1.56, 1.96, 1.39, 1.78, 1.06, 1.48], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [2.69, 1.8, 1.95, 3.3, 2.82, 1.05, 2.25, 2.14, 2.8, 1.83, 1.74, 1.46, 1.72, 2.06, 1.62], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.23, 1.16, 1.22, 1.44, 1.86, 1.14, 1.98, 1.33, 0.93, 1.26, 0.7, 1.19, 1.35, 1.8, 0.87], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.96, 0.76, 0.94, 0.98, 1.12, 1.23, 0.6, 0.53, 0.74, 0.71, 0.82, 1.28, 0.84, 1.51, 0.79], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.25, 1.31, 1.34, 1.78, 1.31, 1.64, 0.76, 1.06, 1.25, 1.45, 2.17, 1.42, 1.27, 1.56, 1.13], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [1.86, 1.1, 1.26, 1.04, 0.93, 1.01, 0.96, 1.52, 1.01, 0.65, 0.97, 0.88, 1.33, 1.43, 1.51], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.82, 0.61, 1.24, 1.27, 0.94, 1.08, 0.73, 1.0, 0.94, 0.76, 1.28, 1.73, 0.85, 1.47, 0.9], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [3.7, 3.05, 1.57, 2.15, 3.72, 2.2, 1.96, 2.07, 3.03, 2.87, 2.53, 2.03, 1.31, 2.03, 2.07], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.13, 2.06, 1.57, 2.19, 1.75, 2.16, 3.05, 2.01, 1.98, 1.7, 2.34, 2.92, 3.22, 2.06, 1.98], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.25, 1.38, 1.07, 1.91, 0.79, 1.73, 1.1, 1.05, 1.17, 1.84, 1.16, 1.45, 1.83, 1.22, 1.47], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.96, 1.34, 1.73, 1.27, 2.34, 1.77, 2.29, 2.46, 1.99, 1.89, 2.71, 1.74, 1.93, 1.01, 1.68], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.37, 1.26, 1.18, 0.8, 1.06, 1.73, 1.41, 1.34, 1.19, 1.39, 1.63, 1.13, 1.94, 1.66, 1.37], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [1.01, 0.76, 0.8, 0.72, 0.52, 1.08, 0.73, 0.81, 0.87, 0.97, 0.81, 1.02, 0.62, 0.63, 0.46], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [2.09, 2.02, 2.47, 1.51, 1.86, 1.79, 1.76, 3.23, 2.39, 1.76, 1.28, 2.37, 1.8, 1.91, 1.96], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.25, 1.64, 0.73, 1.96, 1.32, 1.09, 1.69, 1.32, 0.91, 2.29, 1.25, 1.56, 1.28, 1.24, 1.75], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.49, 0.9, 1.18, 1.4, 1.2, 2.05, 1.85, 1.74, 1.54, 1.27, 1.94, 0.96, 1.37, 1.14, 1.63], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [1.61, 2.72, 2.42, 2.25, 2.27, 1.75, 2.33, 2.94, 2.11, 2.6, 2.49, 2.23, 1.35, 1.82, 3.14], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.13, 1.67, 0.71, 1.18, 0.84, 0.55, 1.03, 1.31, 2.1, 0.76, 0.48, 1.2, 0.94, 0.74, 1.15], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [0.72, 2.34, 1.54, 1.25, 0.78, 1.22, 1.91, 1.34, 1.44, 1.41, 1.56, 0.69, 1.18, 0.64, 2.04], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [0.62, 0.97, 1.45, 1.88, 0.82, 0.8, 0.51, 0.59, 0.42, 1.05, 0.98, 1.17, 1.32, 1.06, 0.98], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.27, 0.82, 2.25, 1.25, 1.35, 0.58, 1.09, 1.32, 1.95, 0.97, 1.44, 0.88, 1.27, 0.66, 0.71], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.44, 1.17, 0.93, 2.44, 1.95, 0.63, 0.86, 0.97, 1.82, 1.17, 2.19, 0.66, 0.73, 1.47, 1.27], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.44, 2.34, 1.31, 1.24, 1.97, 0.85, 2.4, 1.5, 0.69, 1.4, 0.74, 1.61, 0.83, 1.61, 0.63], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [3.05, 1.57, 1.72, 1.19, 1.51, 1.69, 0.7, 0.98, 1.51, 0.92, 0.88, 2.07, 1.41, 2.67, 0.93], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [0.7, 1.42, 1.48, 1.24, 1.14, 0.83, 0.6, 0.63, 1.04, 0.8, 2.22, 0.9, 2.16, 0.94, 0.69], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [1.82, 0.47, 0.42, 0.74, 0.77, 0.88, 0.57, 0.88, 0.3, 0.36, 0.33, 1.38, 0.63, 1.15, 0.87], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [1.37, 0.35, 0.62, 0.71, 0.3, 0.89, 0.24, 0.43, 0.64, 0.28, 0.72, 1.81, 0.72, 1.19, 0.57], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [4.2, 2.03, 1.04, 1.41, 2.96, 1.46, 2.74, 1.73, 2.02, 2.34, 1.38, 1.17, 1.28, 1.73, 2.09], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.0, 1.3, 1.04, 1.1, 1.73, 1.81, 2.41, 1.75, 1.98, 2.46, 1.54, 1.92, 2.7, 1.71, 1.62], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.46, 0.67, 1.95, 1.76, 0.73, 1.7, 1.22, 0.67, 0.69, 1.4, 1.02, 0.92, 1.38, 0.64, 1.04], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.43, 0.63, 1.54, 0.58, 1.33, 1.59, 1.21, 1.84, 1.55, 1.0, 1.9, 1.24, 0.89, 0.69, 2.27], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.54, 1.35, 0.88, 0.93, 0.87, 1.82, 1.67, 1.1, 2.38, 0.86, 1.32, 1.52, 2.15, 1.44, 0.99], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.78, 0.5, 0.57, 0.18, 0.12, 0.64, 0.69, 0.2, 0.4, 0.51, 0.57, 0.89, 0.2, 1.1, 0.22], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [0.79, 1.26, 1.41, 0.56, 1.05, 0.97, 0.53, 2.23, 1.07, 1.25, 0.4, 1.06, 1.3, 0.75, 1.14], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.34, 0.68, 0.31, 1.41, 0.48, 1.46, 0.79, 0.77, 0.24, 1.9, 0.71, 0.47, 0.81, 0.95, 1.1], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.64, 0.24, 0.62, 0.85, 1.64, 1.7, 0.92, 1.09, 0.46, 0.79, 1.4, 0.27, 0.85, 0.83, 0.67], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
