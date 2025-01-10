const expectedGoalsData = {
  "Arsenal": { scores: [2.33, 2.38, 2.52, 1.66, 2.64, 2.85, 1.66, 1.85, 2.12, 2.15, 1.63, 2.57, 2.5, 2.06, 2.06, 1.42, 1.97, 3.04], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.29, 0.83, 2.26, 2.0, 2.26, 1.68, 1.43, 1.79, 1.28, 1.53, 1.5, 2.41, 1.57, 1.15, 1.71, 1.43, 1.85, 1.47], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.28, 1.19, 1.3, 1.11, 2.09, 1.98, 1.33, 1.41, 1.77, 1.96, 1.72, 1.48, 1.25, 1.46, 0.72, 1.64, 1.0, 2.07], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.31, 1.28, 1.43, 1.85, 1.98, 2.09, 1.47, 1.89, 1.43, 1.37, 1.68, 0.83, 1.74, 1.31, 1.68, 1.98, 1.7, 2.0], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.67, 1.24, 1.24, 1.11, 1.42, 2.03, 1.38, 1.44, 0.97, 1.59, 1.21, 2.01, 1.51, 1.91, 1.32, 1.68, 1.08, 1.37], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.95, 2.72, 1.38, 2.7, 1.83, 1.98, 3.28, 2.85, 0.99, 2.21, 2.14, 2.7, 1.79, 1.76, 1.53, 1.64, 2.0, 1.57], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.65, 1.56, 1.61, 1.16, 1.16, 1.18, 1.49, 1.78, 1.08, 1.9, 1.38, 0.91, 1.29, 0.65, 1.18, 1.28, 1.79, 0.89], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.01, 0.99, 0.82, 1.28, 0.77, 0.9, 0.96, 1.07, 1.21, 0.6, 0.51, 0.7, 0.7, 0.79, 1.21, 0.8, 1.47, 0.73], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.72, 1.82, 1.46, 1.19, 1.3, 1.42, 1.73, 1.33, 1.61, 0.72, 1.11, 1.24, 1.46, 2.09, 1.44, 1.28, 1.55, 1.14], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [1.24, 0.93, 0.8, 1.96, 1.18, 1.32, 1.05, 1.02, 1.07, 1.02, 1.62, 1.05, 0.67, 0.98, 0.92, 1.45, 1.49, 1.61], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [1.09, 1.14, 1.08, 0.86, 0.63, 1.36, 1.32, 0.98, 1.12, 0.77, 1.04, 1.02, 0.85, 1.33, 1.83, 0.88, 1.51, 0.96], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [1.81, 2.47, 3.12, 1.98, 3.14, 1.59, 2.16, 3.78, 2.29, 2.03, 2.06, 3.11, 2.89, 2.55, 2.03, 1.31, 2.11, 2.26], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.23, 2.47, 2.09, 1.03, 1.95, 1.6, 2.02, 1.64, 2.17, 2.97, 1.83, 2.04, 1.61, 2.35, 2.83, 3.0, 2.04, 1.86], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [2.22, 1.41, 1.21, 1.32, 1.31, 1.04, 1.83, 0.77, 1.69, 1.06, 1.06, 1.11, 1.84, 1.16, 1.45, 1.83, 1.19, 1.53], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [2.66, 1.91, 2.82, 1.99, 1.35, 1.75, 1.32, 2.32, 1.91, 2.39, 2.45, 1.96, 1.94, 2.65, 1.79, 1.96, 0.97, 1.72], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.04, 2.23, 1.16, 1.42, 1.21, 1.11, 0.77, 1.07, 1.61, 1.36, 1.34, 1.2, 1.32, 1.66, 1.16, 1.94, 1.61, 1.36], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.66, 0.59, 0.7, 0.89, 0.73, 0.78, 0.66, 0.5, 1.02, 0.73, 0.73, 0.85, 0.89, 0.76, 0.94, 0.59, 0.58, 0.42], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [0.97, 1.51, 2.78, 2.09, 1.96, 2.32, 1.53, 1.91, 1.75, 1.72, 3.21, 2.33, 1.75, 1.31, 2.31, 1.91, 1.93, 2.04], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.41, 1.35, 1.37, 1.22, 1.69, 0.69, 1.97, 1.29, 1.07, 1.65, 1.35, 0.93, 2.27, 1.26, 1.53, 1.22, 1.24, 1.64], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.17, 1.26, 0.81, 1.61, 0.96, 1.22, 1.45, 1.26, 2.06, 1.93, 1.69, 1.58, 1.25, 2.03, 0.98, 1.49, 1.22, 1.74], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [1.9, 2.18, 2.23, 1.78, 2.66, 2.52, 2.32, 2.33, 1.85, 2.43, 3.01, 2.18, 2.55, 2.6, 2.43, 1.35, 1.89, 3.27], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.82, 0.46, 1.27, 1.0, 1.54, 0.69, 1.13, 0.76, 0.51, 1.02, 1.3, 2.14, 0.72, 0.48, 1.19, 0.97, 0.72, 1.09], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [0.71, 0.74, 1.56, 0.69, 2.4, 1.47, 1.26, 0.74, 1.19, 1.8, 1.29, 1.44, 1.38, 1.57, 0.64, 1.19, 0.65, 1.92], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [0.54, 0.42, 1.0, 0.62, 0.93, 1.28, 1.92, 0.84, 0.85, 0.46, 0.59, 0.38, 1.11, 0.95, 1.18, 1.17, 1.06, 0.88], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.44, 1.22, 2.2, 1.21, 0.8, 2.29, 1.32, 1.33, 0.57, 1.08, 1.26, 1.8, 0.87, 1.41, 0.84, 1.13, 0.61, 0.65], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.39, 1.42, 0.62, 1.48, 1.21, 0.93, 2.58, 1.87, 0.6, 0.9, 0.93, 1.75, 1.16, 2.27, 0.65, 0.7, 1.52, 1.28], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.68, 1.29, 1.19, 1.33, 2.32, 1.21, 1.19, 1.8, 0.74, 2.4, 1.49, 0.65, 1.44, 0.63, 1.56, 0.74, 1.47, 0.52], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.37, 1.11, 1.44, 2.11, 1.57, 1.76, 1.15, 1.42, 1.72, 0.65, 0.98, 1.51, 1.0, 0.86, 1.99, 1.39, 2.8, 0.89], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.22, 1.61, 1.49, 0.68, 1.49, 1.54, 1.17, 1.19, 0.87, 0.58, 0.63, 1.14, 0.84, 2.33, 0.91, 2.25, 0.91, 0.78], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.94, 0.42, 0.22, 2.05, 0.52, 0.49, 0.8, 0.84, 1.0, 0.7, 0.92, 0.33, 0.41, 0.35, 1.49, 0.69, 1.11, 0.97], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.96, 0.81, 0.31, 1.39, 0.36, 0.62, 0.7, 0.29, 0.92, 0.26, 0.43, 0.67, 0.28, 0.65, 1.96, 0.72, 1.13, 0.63], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [1.77, 1.39, 2.25, 1.64, 1.92, 1.01, 1.34, 3.02, 1.39, 2.74, 1.64, 1.97, 2.13, 1.35, 1.08, 1.21, 1.7, 2.06], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.35, 1.96, 1.26, 0.95, 1.3, 1.02, 1.08, 1.72, 1.89, 2.32, 1.73, 2.02, 2.48, 1.58, 1.87, 2.77, 1.84, 1.6], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [2.59, 1.45, 1.17, 1.57, 0.71, 2.04, 1.76, 0.78, 1.64, 1.28, 0.8, 0.7, 1.43, 1.17, 0.94, 1.48, 0.67, 1.15], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.55, 1.52, 2.48, 1.52, 0.71, 1.64, 0.58, 1.37, 1.7, 1.27, 1.76, 1.65, 1.05, 1.88, 1.34, 0.97, 0.69, 2.4], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [0.82, 2.77, 1.36, 1.65, 1.36, 0.87, 0.95, 0.97, 1.72, 1.73, 1.12, 2.47, 0.87, 1.34, 1.53, 2.08, 1.45, 1.04], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.54, 0.54, 0.3, 0.71, 0.62, 0.65, 0.19, 0.11, 0.64, 0.75, 0.2, 0.45, 0.51, 0.62, 0.8, 0.25, 1.15, 0.24], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [0.48, 1.86, 1.7, 0.79, 1.35, 1.34, 0.66, 1.22, 1.0, 0.55, 2.42, 1.03, 1.34, 0.39, 1.08, 1.39, 0.79, 1.27], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.9, 1.05, 0.52, 0.34, 0.69, 0.29, 1.34, 0.49, 1.49, 0.73, 0.9, 0.22, 2.06, 0.74, 0.49, 0.8, 1.0, 1.0], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.35, 0.33, 0.4, 0.68, 0.22, 0.69, 0.88, 1.72, 1.8, 0.96, 0.99, 0.49, 0.79, 1.32, 0.29, 0.93, 0.83, 0.68], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
