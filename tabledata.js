const expectedGoalsData = {
  "Arsenal": { scores: [2.32, 2.51, 1.68, 2.63, 2.85, 1.62, 1.84, 2.14, 2.21, 1.61, 2.56, 2.49, 2.01, 2.06, 1.41, 1.92, 3.02], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [0.82, 2.26, 1.99, 2.25, 1.7, 1.39, 1.77, 1.27, 1.52, 1.47, 2.39, 1.52, 1.16, 1.75, 1.43, 1.83, 1.46], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.18, 1.3, 1.13, 2.12, 2.01, 1.35, 1.42, 1.79, 1.99, 1.75, 1.55, 1.23, 1.48, 0.73, 1.63, 1.03, 2.11], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.3, 1.42, 1.86, 2.01, 2.12, 1.48, 1.87, 1.45, 1.35, 1.73, 0.84, 1.77, 1.31, 1.7, 2.0, 1.78, 2.02], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.24, 1.23, 1.09, 1.44, 2.03, 1.38, 1.49, 0.99, 1.56, 1.18, 2.02, 1.5, 1.92, 1.29, 1.69, 1.08, 1.36], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [2.74, 1.4, 2.72, 1.83, 1.94, 3.29, 2.87, 0.99, 2.2, 2.13, 2.71, 1.84, 1.75, 1.53, 1.6, 2.01, 1.55], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.58, 1.62, 1.16, 1.16, 1.22, 1.47, 1.79, 1.06, 1.91, 1.39, 0.93, 1.3, 0.66, 1.17, 1.28, 1.81, 0.89], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [0.95, 0.79, 1.89, 0.72, 0.86, 0.92, 1.03, 1.17, 0.58, 0.49, 0.66, 0.69, 0.77, 1.16, 0.79, 1.41, 0.69], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.83, 1.47, 1.17, 1.29, 1.4, 1.75, 1.34, 1.61, 0.72, 1.12, 1.25, 1.49, 2.1, 1.41, 1.28, 1.56, 1.17], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.95, 0.8, 1.96, 1.15, 1.31, 1.04, 1.0, 1.05, 1.02, 1.63, 1.06, 0.67, 0.95, 0.91, 1.45, 1.49, 1.62], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [1.14, 1.04, 0.83, 0.61, 1.32, 1.29, 0.97, 1.09, 0.76, 0.99, 0.99, 0.83, 1.29, 1.78, 0.84, 1.46, 0.93], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [2.43, 3.09, 3.7, 3.12, 1.6, 2.09, 3.74, 2.21, 2.0, 2.1, 3.1, 2.86, 2.51, 2.04, 1.29, 2.09, 2.19], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.46, 2.12, 1.03, 1.9, 1.59, 2.0, 1.6, 2.17, 2.98, 1.82, 1.99, 1.59, 2.3, 2.84, 2.99, 2.04, 1.91], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.41, 1.25, 1.3, 1.3, 1.03, 1.83, 0.77, 1.7, 1.04, 1.08, 1.08, 1.85, 1.16, 1.44, 1.84, 1.21, 1.5], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.93, 2.82, 2.07, 1.37, 1.73, 1.32, 2.34, 1.88, 2.39, 2.46, 1.97, 1.9, 2.66, 1.79, 2.0, 0.97, 1.72], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [2.23, 1.16, 1.41, 1.25, 1.08, 0.77, 1.08, 1.6, 1.36, 1.31, 1.18, 1.3, 1.65, 1.14, 1.94, 1.61, 1.38], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.58, 0.68, 0.89, 0.74, 0.78, 0.67, 0.5, 1.03, 0.72, 0.72, 0.83, 0.89, 0.79, 0.94, 0.6, 0.57, 0.43], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.49, 2.8, 2.08, 1.96, 2.31, 1.56, 1.92, 1.8, 1.74, 3.21, 2.33, 1.72, 1.31, 2.32, 1.87, 1.89, 2.04], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.37, 1.38, 1.28, 1.74, 0.71, 2.05, 1.31, 1.09, 1.71, 1.4, 0.96, 2.35, 1.31, 1.57, 1.26, 1.26, 1.69], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.24, 0.79, 1.54, 0.93, 1.19, 1.47, 1.22, 2.0, 1.89, 1.65, 1.53, 1.22, 2.0, 0.97, 1.45, 1.17, 1.7], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [2.19, 2.27, 1.78, 2.71, 2.46, 2.32, 2.32, 1.85, 2.42, 3.07, 2.16, 2.55, 2.59, 2.41, 1.37, 1.89, 3.27], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [0.49, 1.25, 1.07, 1.58, 0.72, 1.15, 0.77, 0.55, 1.05, 1.35, 2.18, 0.75, 0.5, 1.21, 0.98, 0.75, 1.12], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [0.73, 1.56, 0.7, 2.4, 1.51, 1.25, 0.74, 1.17, 1.8, 1.23, 1.43, 1.36, 1.57, 0.64, 1.2, 0.65, 1.98], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [0.44, 0.99, 0.62, 0.88, 1.34, 2.0, 0.85, 0.83, 0.46, 0.59, 0.39, 1.11, 0.96, 1.18, 1.17, 1.05, 0.92], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.22, 2.28, 1.21, 0.8, 2.28, 1.3, 1.32, 0.57, 1.1, 1.25, 1.86, 0.85, 1.36, 0.83, 1.17, 0.62, 0.65], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.44, 0.6, 1.4, 1.18, 0.92, 2.56, 1.9, 0.59, 0.87, 0.89, 1.73, 1.12, 2.32, 0.65, 0.67, 1.5, 1.25], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.27, 1.21, 1.37, 2.43, 1.23, 1.24, 1.85, 0.76, 2.44, 1.53, 0.68, 1.46, 0.67, 1.61, 0.77, 1.56, 0.56], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.12, 1.46, 3.06, 1.57, 1.78, 1.14, 1.48, 1.68, 0.68, 1.0, 1.53, 1.02, 0.87, 2.01, 1.39, 2.82, 0.9], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.6, 1.44, 0.63, 1.44, 1.47, 1.15, 1.13, 0.83, 0.55, 0.61, 1.06, 0.79, 2.27, 0.87, 2.26, 0.84, 0.74], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.43, 0.23, 2.06, 0.53, 0.5, 0.8, 0.83, 1.01, 0.68, 0.96, 0.33, 0.42, 0.35, 1.56, 0.68, 1.16, 0.92], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.8, 0.3, 1.46, 0.36, 0.6, 0.64, 0.28, 0.92, 0.25, 0.43, 0.66, 0.29, 0.68, 1.95, 0.72, 1.13, 0.61], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [1.37, 2.25, 4.21, 1.97, 1.02, 1.34, 3.03, 1.4, 2.81, 1.63, 1.92, 2.18, 1.35, 1.08, 1.22, 1.7, 2.06], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.93, 1.23, 0.93, 1.27, 1.01, 1.05, 1.69, 1.87, 2.35, 1.7, 1.98, 2.51, 1.56, 1.89, 2.75, 1.79, 1.55], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.45, 1.15, 1.56, 0.7, 2.11, 1.76, 0.79, 1.69, 1.28, 0.81, 0.7, 1.47, 1.14, 0.91, 1.43, 0.67, 1.16], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.54, 2.52, 1.56, 0.75, 1.69, 0.62, 1.36, 1.73, 1.29, 1.86, 1.7, 1.1, 1.93, 1.38, 1.01, 0.73, 2.52], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [2.8, 1.36, 1.68, 1.38, 0.88, 0.99, 1.01, 1.75, 1.76, 1.15, 2.58, 0.89, 1.36, 1.55, 2.17, 1.42, 1.07], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.54, 0.3, 0.71, 0.6, 0.66, 0.19, 0.12, 0.67, 0.74, 0.2, 0.46, 0.48, 0.61, 0.84, 0.25, 1.22, 0.24], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.94, 1.76, 0.78, 1.36, 1.35, 0.68, 1.21, 1.0, 0.55, 2.43, 1.08, 1.36, 0.4, 1.04, 1.39, 0.8, 1.29], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.03, 0.52, 0.33, 0.67, 0.29, 1.38, 0.48, 1.55, 0.75, 0.87, 0.22, 2.05, 0.73, 0.49, 0.79, 1.0, 0.99], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.32, 0.41, 0.69, 0.22, 0.67, 0.87, 1.79, 1.79, 0.91, 0.98, 0.48, 0.79, 1.37, 0.29, 0.93, 0.82, 0.66], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 22; i <= gameweeks + 22 - 1; i++) {
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
