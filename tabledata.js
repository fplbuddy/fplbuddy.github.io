const expectedGoalsData = {
  "Arsenal": { scores: [1.66, 2.97, 2.17, 1.93, 2.12, 2.36, 2.49, 1.64, 2.5, 2.76, 1.78, 1.66, 2.1, 2.15, 1.6, 2.6, 2.48, 1.99, 2.18, 1.26, 2.19, 2.93], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.35, 1.5, 1.9, 2.46, 1.32, 0.82, 2.27, 2.04, 2.44, 1.73, 1.36, 1.78, 1.24, 1.58, 1.76, 2.41, 1.8, 1.13, 1.76, 1.5, 1.74, 1.37], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.15, 1.37, 1.23, 1.32, 1.21, 1.26, 1.47, 1.04, 2.02, 2.05, 1.33, 1.22, 1.79, 2.05, 1.59, 1.48, 1.14, 1.37, 0.68, 1.63, 0.94, 2.07], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.73, 1.56, 0.96, 2.37, 1.33, 1.22, 1.34, 1.71, 1.86, 2.02, 1.55, 1.91, 1.47, 1.48, 1.7, 0.8, 1.87, 1.44, 1.61, 2.0, 1.74, 2.01], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.61, 1.82, 1.38, 0.83, 1.73, 1.17, 1.34, 1.25, 1.47, 2.05, 1.53, 1.5, 0.96, 1.65, 1.16, 2.1, 1.52, 1.93, 1.53, 1.74, 1.06, 1.24], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.69, 2.26, 2.61, 1.75, 2.3, 3.14, 1.45, 2.91, 2.03, 2.08, 3.69, 3.16, 1.05, 2.23, 2.28, 3.13, 1.89, 2.02, 1.6, 1.93, 2.1, 1.88], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [0.78, 1.19, 2.3, 1.38, 1.64, 1.51, 1.7, 1.09, 1.26, 1.17, 1.55, 1.95, 1.2, 1.92, 1.51, 0.9, 1.43, 0.65, 1.4, 1.16, 1.95, 0.83], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [0.98, 0.64, 1.0, 0.85, 1.1, 0.98, 0.9, 1.4, 0.77, 0.93, 1.01, 1.16, 1.28, 0.59, 0.55, 0.83, 0.76, 0.82, 1.38, 0.83, 1.63, 0.85], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [2.51, 1.25, 1.56, 2.12, 1.65, 1.79, 1.43, 1.31, 1.53, 1.42, 1.78, 1.38, 1.51, 0.71, 1.08, 1.3, 1.5, 2.09, 1.41, 1.37, 1.55, 1.17], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [1.27, 0.57, 1.22, 1.04, 1.34, 0.95, 0.73, 2.03, 1.14, 1.22, 0.96, 0.96, 1.24, 1.05, 1.72, 1.01, 0.69, 1.06, 0.93, 1.5, 1.45, 1.6], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [1.71, 0.72, 0.94, 1.13, 1.14, 1.23, 1.01, 0.92, 0.68, 1.49, 1.32, 1.0, 1.14, 0.79, 1.25, 1.1, 0.87, 1.42, 2.01, 1.02, 1.7, 1.04], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [1.8, 3.05, 2.35, 2.03, 1.82, 2.21, 3.02, 1.86, 3.03, 1.4, 2.23, 3.57, 2.01, 1.96, 1.83, 2.81, 2.55, 2.16, 1.79, 1.21, 1.97, 2.03], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.02, 1.97, 2.56, 2.83, 2.22, 2.54, 2.15, 1.02, 2.24, 1.55, 1.81, 1.83, 2.37, 3.07, 1.71, 2.04, 1.64, 2.42, 3.05, 3.0, 2.24, 1.83], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.53, 1.74, 1.54, 0.89, 2.46, 1.62, 1.26, 1.4, 1.24, 1.12, 2.08, 0.84, 1.75, 1.25, 1.15, 1.28, 2.09, 1.28, 1.52, 1.94, 1.23, 1.65], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [2.24, 2.13, 1.5, 1.6, 2.69, 1.97, 2.65, 1.94, 1.24, 1.93, 1.14, 2.08, 1.8, 2.35, 2.26, 1.8, 1.78, 2.68, 1.74, 1.9, 0.9, 1.74], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.34, 1.31, 0.99, 1.54, 0.94, 2.18, 1.13, 1.43, 1.11, 1.13, 0.74, 1.02, 1.53, 1.24, 1.22, 1.19, 1.09, 1.61, 1.03, 1.86, 1.43, 1.3], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.72, 1.1, 0.66, 1.04, 0.67, 0.71, 0.88, 0.99, 0.87, 0.92, 0.7, 0.5, 1.19, 0.8, 0.71, 0.94, 0.92, 0.86, 1.0, 0.66, 0.64, 0.48], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.47, 1.73, 2.89, 2.12, 0.96, 1.55, 2.91, 2.1, 1.94, 2.4, 1.59, 2.12, 1.74, 1.7, 3.4, 2.41, 2.07, 1.22, 2.23, 1.93, 1.91, 2.24], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.63, 2.06, 1.07, 0.97, 1.51, 1.4, 1.39, 1.24, 1.83, 0.7, 2.11, 1.54, 1.13, 1.75, 1.54, 0.89, 2.47, 1.36, 1.49, 1.17, 1.51, 1.74], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.67, 1.33, 1.18, 1.43, 1.22, 1.17, 0.8, 1.58, 0.84, 1.22, 1.44, 1.28, 1.96, 1.84, 1.66, 1.41, 1.11, 2.0, 0.92, 1.54, 1.11, 1.74], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [2.29, 2.81, 1.91, 2.17, 1.91, 2.21, 2.26, 1.81, 2.53, 2.48, 2.39, 2.17, 1.75, 2.46, 2.87, 2.24, 2.51, 2.61, 2.52, 1.49, 2.04, 3.11], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [0.67, 0.59, 1.26, 1.62, 1.67, 0.47, 1.25, 1.03, 1.6, 0.63, 1.06, 0.74, 0.67, 0.96, 1.48, 1.95, 0.84, 0.45, 1.22, 0.98, 0.74, 0.96], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.08, 1.52, 1.05, 2.14, 0.5, 0.69, 1.62, 0.78, 2.09, 1.48, 1.08, 0.6, 1.15, 1.74, 1.07, 1.36, 1.2, 1.39, 0.56, 1.12, 0.53, 1.76], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.31, 0.81, 0.57, 1.77, 0.54, 0.55, 0.91, 0.61, 0.8, 1.13, 1.82, 0.84, 0.84, 0.48, 0.51, 0.37, 1.1, 1.0, 1.09, 1.11, 1.06, 0.88], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [0.98, 1.05, 0.75, 0.73, 1.31, 0.99, 2.04, 1.19, 0.65, 1.98, 1.32, 1.26, 0.47, 1.03, 1.1, 1.66, 0.77, 1.29, 0.87, 1.07, 0.7, 0.53], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.88, 1.43, 1.48, 1.26, 1.49, 1.55, 0.58, 1.45, 1.15, 0.89, 2.48, 1.83, 0.61, 0.91, 0.91, 1.81, 1.11, 2.21, 0.84, 0.75, 1.46, 1.36], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [0.95, 1.27, 2.57, 0.87, 1.6, 1.23, 1.31, 1.24, 2.31, 1.2, 1.28, 1.91, 0.83, 2.25, 1.56, 0.65, 1.59, 0.68, 1.79, 0.72, 1.65, 0.66], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [0.92, 0.7, 1.85, 1.33, 1.34, 1.06, 1.3, 2.0, 1.42, 1.63, 1.06, 1.39, 1.62, 0.71, 1.01, 1.52, 0.97, 0.66, 1.98, 1.27, 2.63, 0.88], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [2.44, 0.52, 1.46, 1.77, 1.1, 1.46, 1.42, 0.72, 1.65, 1.55, 1.19, 1.11, 0.88, 0.58, 0.81, 1.14, 0.76, 2.12, 0.86, 2.17, 0.88, 0.8], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.53, 0.26, 0.37, 0.6, 0.88, 0.4, 0.24, 1.86, 0.44, 0.45, 0.62, 0.71, 1.08, 0.65, 0.96, 0.22, 0.42, 0.34, 1.26, 0.68, 0.91, 0.87], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.94, 0.24, 0.39, 0.43, 0.97, 0.84, 0.27, 1.24, 0.41, 0.66, 0.6, 0.21, 0.87, 0.23, 0.52, 0.61, 0.39, 0.67, 1.84, 0.78, 1.18, 0.63], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [1.15, 2.43, 1.72, 2.06, 1.96, 1.47, 2.41, 1.76, 2.15, 1.06, 1.6, 3.02, 1.44, 2.78, 1.7, 2.05, 2.1, 1.47, 1.01, 1.41, 1.73, 2.19], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.3, 2.64, 1.95, 1.9, 1.32, 1.93, 1.18, 0.97, 1.45, 1.24, 1.02, 1.81, 1.91, 2.28, 1.58, 2.04, 2.33, 1.62, 2.0, 2.59, 1.94, 1.54], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.59, 1.32, 1.11, 0.65, 2.57, 1.56, 1.2, 1.68, 0.72, 1.98, 1.91, 0.95, 1.59, 1.45, 0.91, 0.82, 1.64, 1.26, 1.0, 1.55, 0.61, 1.27], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.41, 1.12, 1.08, 0.6, 1.47, 1.42, 2.08, 1.36, 0.53, 1.61, 0.54, 1.07, 1.51, 1.14, 1.43, 1.39, 0.83, 1.74, 1.08, 0.73, 0.56, 2.14], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [0.89, 0.89, 1.85, 1.2, 0.81, 2.45, 1.15, 1.43, 1.08, 0.72, 0.84, 0.8, 1.45, 1.43, 0.86, 2.18, 0.63, 1.18, 1.23, 1.8, 1.11, 0.76], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.41, 0.63, 0.5, 0.47, 0.43, 0.57, 0.35, 0.66, 0.66, 0.64, 0.12, 0.14, 0.71, 0.73, 0.17, 0.45, 0.42, 0.62, 0.67, 0.25, 0.98, 0.27], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [0.83, 1.35, 1.54, 1.01, 0.6, 1.87, 1.82, 0.9, 1.45, 1.47, 0.82, 1.48, 1.1, 0.54, 2.47, 1.22, 1.68, 0.58, 1.13, 1.57, 0.88, 1.45], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.0, 1.66, 0.48, 0.3, 0.96, 1.11, 0.52, 0.27, 0.78, 0.32, 1.34, 0.62, 1.38, 0.79, 1.02, 0.3, 1.99, 0.72, 0.54, 0.72, 1.2, 1.01], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.91, 0.88, 0.28, 1.07, 0.34, 0.22, 0.42, 0.65, 0.24, 0.64, 0.85, 1.57, 1.52, 0.87, 0.89, 0.45, 0.62, 1.2, 0.24, 0.88, 0.71, 0.67], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 17; i <= gameweeks + 17 - 1; i++) {
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
