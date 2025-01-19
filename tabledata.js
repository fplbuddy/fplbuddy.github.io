const expectedGoalsData = {
  "Arsenal": { scores: [2.53, 1.68, 2.65, 2.85, 1.63, 1.87, 2.14, 2.21, 1.61, 2.55, 2.51, 2.01, 2.06, 1.41, 1.92, 3.07], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [2.26, 2.0, 2.26, 1.69, 1.4, 1.78, 1.27, 1.49, 1.46, 2.43, 1.52, 1.17, 1.75, 1.43, 1.83, 1.48], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.3, 1.12, 2.15, 2.01, 1.32, 1.42, 1.79, 2.0, 1.76, 1.55, 1.24, 1.49, 0.73, 1.63, 1.03, 2.11], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.42, 1.86, 2.02, 2.13, 1.47, 1.87, 1.46, 1.36, 1.72, 0.84, 1.72, 1.31, 1.71, 2.02, 1.78, 2.03], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.24, 1.1, 1.45, 2.07, 1.39, 1.49, 1.0, 1.57, 1.19, 2.03, 1.52, 1.93, 1.29, 1.71, 1.08, 1.37], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.41, 2.72, 1.79, 1.95, 3.32, 2.87, 1.0, 2.2, 2.14, 2.72, 1.85, 1.75, 1.53, 1.61, 2.02, 1.55], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.61, 1.18, 1.16, 1.23, 1.47, 1.8, 1.06, 1.94, 1.35, 0.93, 1.3, 0.66, 1.17, 1.28, 1.81, 0.89], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [0.77, 1.89, 0.72, 0.87, 0.92, 1.03, 1.17, 0.58, 0.49, 0.67, 0.69, 0.77, 1.17, 0.8, 1.43, 0.69], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.48, 1.17, 1.29, 1.4, 1.76, 1.31, 1.61, 0.73, 1.12, 1.26, 1.49, 2.14, 1.42, 1.27, 1.56, 1.17], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.77, 1.91, 1.12, 1.27, 1.03, 0.97, 1.02, 0.99, 1.58, 1.03, 0.65, 0.92, 0.88, 1.4, 1.45, 1.57], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [1.05, 0.83, 0.61, 1.32, 1.29, 0.97, 1.09, 0.76, 0.99, 0.97, 0.83, 1.3, 1.8, 0.84, 1.47, 0.93], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [3.1, 3.72, 3.12, 1.6, 2.08, 3.78, 2.22, 1.99, 2.11, 3.1, 2.88, 2.51, 2.05, 1.29, 2.05, 2.18], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.12, 1.03, 1.89, 1.59, 2.01, 1.61, 2.12, 2.97, 1.85, 1.99, 1.59, 2.3, 2.84, 3.03, 2.03, 1.92], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.27, 1.32, 1.33, 1.06, 1.87, 0.78, 1.73, 1.07, 1.1, 1.1, 1.88, 1.19, 1.47, 1.87, 1.23, 1.52], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [2.87, 2.07, 1.38, 1.73, 1.32, 2.35, 1.88, 2.39, 2.47, 1.98, 1.91, 2.66, 1.76, 2.0, 0.98, 1.71], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.17, 1.38, 1.25, 1.09, 0.77, 1.08, 1.62, 1.37, 1.32, 1.18, 1.31, 1.65, 1.14, 1.94, 1.62, 1.38], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.69, 0.91, 0.75, 0.77, 0.68, 0.51, 1.04, 0.73, 0.74, 0.84, 0.91, 0.8, 0.96, 0.61, 0.58, 0.43], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [2.8, 2.09, 1.97, 2.33, 1.56, 1.91, 1.81, 1.75, 3.24, 2.35, 1.72, 1.31, 2.33, 1.87, 1.9, 1.99], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.39, 1.28, 1.74, 0.71, 2.05, 1.3, 1.1, 1.72, 1.4, 0.96, 2.37, 1.28, 1.57, 1.27, 1.26, 1.71], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.79, 1.54, 0.94, 1.2, 1.46, 1.21, 2.03, 1.89, 1.66, 1.53, 1.24, 1.99, 0.98, 1.42, 1.17, 1.69], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [2.27, 1.78, 2.71, 2.45, 2.32, 2.3, 1.84, 2.41, 3.07, 2.15, 2.6, 2.58, 2.4, 1.37, 1.88, 3.25], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.25, 1.07, 1.63, 0.71, 1.15, 0.77, 0.54, 1.04, 1.34, 2.16, 0.74, 0.5, 1.21, 0.98, 0.75, 1.09], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.56, 0.7, 2.37, 1.51, 1.25, 0.74, 1.16, 1.85, 1.23, 1.42, 1.36, 1.53, 0.64, 1.19, 0.65, 1.97], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.0, 0.62, 0.88, 1.34, 1.99, 0.84, 0.83, 0.46, 0.59, 0.39, 1.1, 0.96, 1.15, 1.23, 1.05, 0.92], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [2.31, 1.26, 0.83, 2.3, 1.34, 1.35, 0.6, 1.13, 1.3, 1.89, 0.89, 1.39, 0.86, 1.21, 0.65, 0.68], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [0.6, 1.39, 1.18, 0.92, 2.53, 1.89, 0.59, 0.87, 0.89, 1.78, 1.13, 2.31, 0.65, 0.68, 1.46, 1.26], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.2, 1.34, 2.42, 1.24, 1.23, 1.89, 0.76, 2.42, 1.52, 0.69, 1.45, 0.67, 1.6, 0.77, 1.55, 0.56], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.45, 3.04, 1.57, 1.74, 1.14, 1.48, 1.67, 0.68, 1.0, 1.53, 1.02, 0.87, 2.06, 1.4, 2.79, 0.9], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.4, 0.63, 1.43, 1.46, 1.16, 1.12, 0.82, 0.55, 0.6, 1.06, 0.78, 2.25, 0.87, 2.26, 0.84, 0.73], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.23, 2.01, 0.52, 0.48, 0.77, 0.83, 0.99, 0.68, 0.95, 0.33, 0.41, 0.35, 1.56, 0.66, 1.15, 0.91], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.3, 1.46, 0.35, 0.59, 0.65, 0.28, 0.88, 0.26, 0.42, 0.66, 0.28, 0.68, 1.92, 0.72, 1.17, 0.61], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [2.3, 4.22, 1.96, 1.02, 1.34, 3.0, 1.4, 2.81, 1.64, 1.91, 2.19, 1.35, 1.08, 1.22, 1.69, 2.05], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.23, 0.94, 1.26, 1.01, 1.05, 1.7, 1.85, 2.34, 1.67, 1.97, 2.52, 1.56, 1.88, 2.73, 1.78, 1.56], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.14, 1.54, 0.7, 2.1, 1.79, 0.77, 1.67, 1.27, 0.79, 0.69, 1.45, 1.13, 0.91, 1.4, 0.66, 1.14], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [2.5, 1.55, 0.75, 1.69, 0.62, 1.36, 1.73, 1.29, 1.86, 1.66, 1.1, 1.98, 1.37, 1.0, 0.74, 2.51], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.37, 1.67, 1.38, 0.89, 0.98, 1.0, 1.81, 1.72, 1.16, 2.57, 0.9, 1.35, 1.55, 2.16, 1.42, 1.06], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.28, 0.74, 0.58, 0.63, 0.18, 0.11, 0.65, 0.72, 0.2, 0.44, 0.47, 0.59, 0.83, 0.24, 1.2, 0.23], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.75, 0.78, 1.32, 1.41, 0.67, 1.2, 1.0, 0.55, 2.4, 1.08, 1.35, 0.41, 1.04, 1.39, 0.8, 1.27], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.52, 0.33, 0.66, 0.29, 1.37, 0.48, 1.55, 0.75, 0.86, 0.22, 2.01, 0.73, 0.48, 0.77, 0.99, 1.04], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.4, 0.68, 0.22, 0.67, 0.86, 1.78, 1.77, 0.9, 1.03, 0.48, 0.76, 1.36, 0.29, 0.91, 0.82, 0.65], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 23; i <= gameweeks + 23 - 1; i++) {
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
