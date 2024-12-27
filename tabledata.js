const expectedGoalsData = {
  "Arsenal": { scores: [2.36, 2.05, 2.4, 2.46, 2.54, 1.77, 2.73, 2.81, 1.77, 1.89, 2.19, 2.16, 1.63, 2.76, 2.73, 2.17, 2.17, 1.44, 2.16, 3.01], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.83, 2.45, 1.25, 0.83, 2.15, 1.95, 2.45, 1.68, 1.43, 1.82, 1.29, 1.57, 1.59, 2.31, 1.66, 1.16, 1.66, 1.42, 1.85, 1.45], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.22, 1.25, 1.24, 1.22, 1.36, 1.11, 1.98, 1.96, 1.35, 1.36, 1.82, 2.1, 1.58, 1.42, 1.23, 1.45, 0.71, 1.62, 1.0, 2.1], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [0.94, 2.25, 1.32, 1.25, 1.39, 1.79, 1.79, 2.04, 1.42, 1.84, 1.38, 1.38, 1.64, 0.81, 1.78, 1.32, 1.65, 2.04, 1.61, 1.9], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.39, 0.83, 1.8, 1.24, 1.25, 1.16, 1.44, 1.98, 1.42, 1.42, 0.99, 1.62, 1.22, 2.1, 1.55, 1.84, 1.42, 1.67, 1.1, 1.35], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [2.63, 1.79, 2.08, 2.85, 1.46, 2.7, 1.97, 2.03, 3.38, 3.07, 1.04, 2.31, 2.27, 3.07, 1.78, 1.83, 1.62, 1.78, 2.12, 1.71], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [2.15, 1.34, 1.67, 1.47, 1.69, 1.15, 1.16, 1.13, 1.5, 1.95, 1.13, 1.84, 1.46, 0.92, 1.32, 0.66, 1.26, 1.26, 1.81, 0.88], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [0.9, 0.81, 1.07, 1.04, 0.89, 1.39, 0.81, 0.96, 1.03, 1.1, 1.22, 0.63, 0.55, 0.77, 0.77, 0.82, 1.39, 0.8, 1.53, 0.8], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.42, 2.09, 1.57, 1.79, 1.44, 1.21, 1.36, 1.42, 1.66, 1.34, 1.57, 0.71, 1.1, 1.21, 1.44, 1.97, 1.38, 1.24, 1.55, 1.16], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [1.17, 0.98, 1.27, 0.94, 0.77, 1.87, 1.12, 1.28, 1.01, 0.99, 1.1, 0.99, 1.58, 1.0, 0.67, 0.99, 0.87, 1.47, 1.45, 1.49], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.93, 1.11, 1.14, 1.14, 1.08, 0.86, 0.66, 1.45, 1.26, 0.99, 1.16, 0.79, 1.14, 1.08, 0.88, 1.34, 1.85, 0.93, 1.68, 0.97], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [2.47, 2.27, 1.82, 2.43, 3.28, 1.9, 3.05, 1.55, 2.22, 3.6, 2.17, 1.95, 1.9, 2.88, 2.81, 2.47, 1.93, 1.3, 2.1, 2.23], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.59, 2.65, 2.24, 2.59, 2.07, 1.02, 2.05, 1.59, 1.95, 1.68, 2.26, 3.02, 1.79, 2.06, 1.54, 2.33, 2.81, 2.85, 2.05, 1.75], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.35, 0.89, 2.19, 1.49, 1.15, 1.35, 1.28, 1.01, 1.98, 0.79, 1.7, 1.1, 1.1, 1.15, 1.84, 1.15, 1.47, 1.74, 1.17, 1.53], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.69, 1.84, 2.65, 1.93, 2.69, 1.93, 1.35, 1.85, 1.28, 2.14, 1.94, 2.46, 2.44, 1.97, 1.88, 2.85, 1.83, 1.96, 0.97, 1.7], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [0.96, 1.5, 0.99, 2.07, 1.09, 1.41, 1.09, 1.09, 0.75, 1.04, 1.61, 1.3, 1.24, 1.12, 1.21, 1.63, 1.1, 1.88, 1.42, 1.29], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.66, 0.97, 0.66, 0.62, 0.76, 0.96, 0.76, 0.84, 0.66, 0.51, 1.04, 0.77, 0.72, 0.87, 0.85, 0.76, 0.96, 0.62, 0.57, 0.45], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [2.72, 1.98, 0.99, 1.49, 2.92, 2.17, 2.02, 2.51, 1.62, 1.99, 1.7, 1.72, 3.22, 2.33, 1.9, 1.32, 2.2, 1.99, 1.93, 2.19], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.08, 0.98, 1.39, 1.4, 1.36, 1.21, 1.78, 0.7, 2.06, 1.4, 1.05, 1.64, 1.4, 0.93, 2.27, 1.32, 1.55, 1.22, 1.34, 1.76], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.36, 1.37, 1.23, 1.24, 0.84, 1.63, 0.95, 1.23, 1.43, 1.26, 1.99, 1.86, 1.81, 1.59, 1.25, 2.11, 1.0, 1.58, 1.23, 1.83], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [1.95, 2.18, 1.85, 2.18, 2.16, 1.79, 2.57, 2.49, 2.37, 2.28, 1.76, 2.46, 2.89, 2.23, 2.55, 2.58, 2.45, 1.36, 1.9, 3.2], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.25, 1.65, 1.72, 0.43, 1.28, 0.98, 1.63, 0.66, 1.11, 0.8, 0.57, 0.99, 1.44, 2.1, 0.76, 0.49, 1.26, 0.99, 0.72, 1.08], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.21, 2.24, 0.62, 0.72, 1.68, 0.74, 2.33, 1.46, 1.21, 0.69, 1.25, 1.86, 1.24, 1.49, 1.33, 1.58, 0.57, 1.2, 0.64, 1.89], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [0.47, 1.89, 0.53, 0.44, 0.93, 0.57, 0.84, 1.17, 1.79, 0.81, 0.81, 0.43, 0.51, 0.32, 1.06, 0.98, 1.15, 1.15, 1.06, 0.8], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [0.8, 0.65, 1.4, 1.13, 2.06, 1.22, 0.7, 2.16, 1.3, 1.31, 0.52, 1.04, 1.16, 1.71, 0.84, 1.34, 0.81, 1.03, 0.61, 0.56], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.56, 1.31, 1.45, 1.44, 0.63, 1.49, 1.18, 0.93, 2.58, 1.86, 0.56, 0.89, 0.97, 1.84, 1.19, 2.21, 0.73, 0.71, 1.56, 1.37], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [2.6, 0.83, 1.59, 1.23, 1.25, 1.29, 2.23, 1.2, 1.2, 1.86, 0.72, 2.33, 1.47, 0.64, 1.47, 0.57, 1.67, 0.68, 1.46, 0.54], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.92, 1.43, 1.43, 1.13, 1.43, 2.13, 1.57, 1.82, 1.21, 1.42, 1.75, 0.71, 0.98, 1.63, 1.07, 0.8, 2.1, 1.44, 2.82, 0.92], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.48, 1.87, 1.24, 1.61, 1.58, 0.73, 1.68, 1.62, 1.19, 1.21, 0.92, 0.58, 0.75, 1.2, 0.84, 2.34, 0.95, 2.24, 1.0, 0.87], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.36, 0.62, 0.83, 0.38, 0.19, 1.91, 0.43, 0.41, 0.69, 0.71, 1.0, 0.61, 0.82, 0.23, 0.32, 0.29, 1.25, 0.65, 0.93, 0.86], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.38, 0.43, 0.94, 0.84, 0.27, 1.25, 0.33, 0.65, 0.64, 0.23, 0.91, 0.24, 0.44, 0.61, 0.3, 0.6, 1.91, 0.76, 1.17, 0.61], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [1.69, 2.04, 1.86, 1.43, 2.32, 1.65, 1.93, 1.02, 1.38, 3.01, 1.37, 2.68, 1.66, 1.98, 2.07, 1.34, 0.99, 1.19, 1.66, 2.08], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.98, 1.89, 1.34, 1.95, 1.17, 0.85, 1.3, 1.06, 0.99, 1.77, 1.85, 2.26, 1.67, 1.99, 2.32, 1.57, 1.84, 2.68, 1.85, 1.57], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [0.93, 0.52, 2.57, 1.45, 1.18, 1.58, 0.66, 1.92, 1.83, 0.76, 1.57, 1.36, 0.84, 0.7, 1.43, 1.17, 0.96, 1.48, 0.6, 1.17], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.3, 0.69, 1.47, 1.48, 2.33, 1.49, 0.65, 1.68, 0.54, 1.24, 1.61, 1.26, 1.6, 1.58, 0.95, 1.87, 1.21, 0.84, 0.57, 2.24], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [2.03, 1.27, 0.81, 2.68, 1.28, 1.56, 1.29, 0.79, 0.85, 0.93, 1.66, 1.66, 1.02, 2.32, 0.75, 1.33, 1.41, 1.97, 1.32, 0.91], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.58, 0.53, 0.56, 0.63, 0.34, 0.77, 0.69, 0.69, 0.17, 0.14, 0.68, 0.8, 0.2, 0.5, 0.52, 0.7, 0.79, 0.29, 1.09, 0.25], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.28, 0.8, 0.45, 1.76, 1.69, 0.83, 1.39, 1.39, 0.71, 1.29, 1.04, 0.49, 2.42, 1.02, 1.49, 0.42, 1.06, 1.42, 0.79, 1.29], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.42, 0.35, 1.04, 1.15, 0.58, 0.34, 0.83, 0.3, 1.41, 0.59, 1.48, 0.78, 1.03, 0.28, 2.15, 0.79, 0.55, 0.87, 1.21, 1.12], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.33, 1.12, 0.35, 0.29, 0.39, 0.71, 0.24, 0.71, 0.95, 1.66, 1.76, 0.97, 1.03, 0.49, 0.79, 1.32, 0.3, 0.94, 0.82, 0.75], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 19; i <= gameweeks + 19 - 1; i++) {
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
