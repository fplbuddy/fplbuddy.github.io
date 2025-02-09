const expectedGoalsData = {
  "Arsenal": { scores: [2.73, 2.8, 1.81, 1.93, 2.16, 2.12, 1.58, 2.5, 2.73, 1.95, 2.0, 1.35, 2.09, 3.13], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [3.44, 1.62, 1.3, 1.67, 0.0, 1.58, 1.52, 2.35, 1.57, 1.19, 1.59, 1.33, 1.77, 1.45], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [2.37, 2.08, 1.59, 1.59, 1.89, 2.32, 1.88, 1.61, 1.31, 1.64, 0.82, 1.76, 1.2, 2.32], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.88, 2.06, 1.34, 1.75, 1.34, 1.4, 1.63, 0.81, 1.79, 1.36, 1.63, 2.06, 1.6, 1.85], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.4, 2.04, 1.3, 1.38, 1.03, 1.51, 1.13, 2.0, 1.45, 1.82, 1.36, 1.59, 0.99, 1.37], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.95, 1.91, 3.25, 2.84, 1.0, 2.19, 2.07, 2.84, 1.75, 1.65, 1.41, 1.73, 2.01, 1.68], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.11, 1.19, 1.46, 1.93, 1.17, 1.96, 1.48, 1.0, 1.25, 0.68, 1.28, 1.32, 1.73, 0.85], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [0.81, 1.01, 1.04, 1.14, 1.3, 0.63, 0.56, 0.84, 0.83, 0.89, 1.43, 0.88, 1.64, 0.87], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.36, 1.31, 1.64, 1.41, 1.58, 0.72, 1.02, 1.19, 1.45, 2.1, 1.39, 1.19, 1.5, 1.2], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [1.07, 1.23, 1.0, 0.9, 1.06, 0.92, 1.43, 1.0, 0.63, 0.97, 0.82, 1.3, 1.42, 1.45], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.6, 1.24, 1.23, 0.95, 1.07, 0.79, 1.03, 1.04, 0.75, 1.21, 1.74, 0.9, 1.52, 0.88], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [5.15, 1.7, 2.23, 3.74, 0.0, 1.9, 2.02, 2.99, 2.92, 2.52, 2.05, 1.3, 2.25, 2.08], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.15, 1.56, 2.16, 1.86, 2.43, 3.15, 1.98, 2.0, 1.62, 2.38, 2.83, 3.21, 2.05, 1.94], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.29, 0.97, 1.89, 0.75, 1.68, 1.12, 1.1, 1.15, 1.7, 1.09, 1.37, 1.72, 1.18, 1.43], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.43, 1.83, 1.22, 2.24, 1.75, 2.25, 2.46, 1.95, 1.86, 2.76, 1.9, 1.94, 0.97, 1.6], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.33, 1.31, 0.85, 1.26, 1.93, 1.53, 1.46, 1.25, 1.48, 1.76, 1.22, 2.16, 1.75, 1.52], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.78, 0.93, 0.75, 0.53, 1.08, 0.76, 0.82, 0.91, 0.98, 0.83, 1.07, 0.7, 0.62, 0.48], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.94, 2.45, 1.6, 1.79, 1.7, 1.72, 3.15, 2.2, 1.82, 1.21, 2.23, 1.75, 1.85, 2.12], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.6, 0.69, 1.96, 1.34, 1.01, 1.57, 1.28, 0.87, 2.25, 1.35, 1.51, 1.23, 1.3, 1.75], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.86, 1.13, 1.35, 1.13, 1.99, 1.78, 1.74, 1.5, 1.23, 1.96, 1.01, 1.51, 1.1, 1.6], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [2.74, 2.51, 2.13, 2.37, 1.84, 2.42, 2.84, 2.22, 2.66, 2.54, 2.21, 1.37, 1.89, 3.11], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [2.26, 0.74, 1.17, 0.87, 0.0, 1.1, 1.17, 2.01, 0.78, 0.46, 1.25, 0.86, 0.78, 1.2], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [2.29, 1.61, 1.37, 0.84, 1.31, 1.98, 1.39, 1.52, 1.43, 1.67, 0.68, 1.32, 0.64, 2.08], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.01, 1.45, 1.77, 0.94, 0.75, 0.52, 0.63, 0.41, 1.17, 0.86, 1.27, 1.36, 1.12, 1.01], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [0.71, 1.98, 1.02, 1.22, 0.44, 1.03, 1.13, 1.76, 0.84, 1.3, 0.75, 1.1, 0.53, 0.6], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.23, 0.99, 2.35, 1.93, 0.58, 0.89, 0.98, 1.84, 1.17, 2.04, 0.64, 0.72, 1.53, 1.09], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [2.23, 1.35, 1.36, 2.03, 0.87, 2.33, 1.62, 0.68, 1.35, 0.71, 1.47, 0.87, 1.66, 0.62], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.64, 1.89, 1.31, 1.61, 1.82, 0.75, 1.03, 1.43, 0.98, 0.96, 2.2, 1.52, 2.69, 1.01], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.32, 1.53, 1.29, 1.25, 0.92, 0.6, 0.66, 1.0, 0.87, 2.18, 1.02, 2.07, 1.01, 0.72], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.5, 0.43, 0.75, 0.73, 0.73, 0.49, 0.87, 0.29, 0.32, 0.31, 1.2, 0.64, 1.1, 0.87], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.33, 0.64, 0.7, 0.29, 0.93, 0.21, 0.43, 0.68, 0.27, 0.71, 1.72, 0.58, 1.21, 0.49], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [3.71, 1.05, 1.48, 2.94, 0.0, 2.66, 1.8, 2.1, 2.36, 1.49, 1.22, 1.29, 1.86, 2.14], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.2, 0.92, 1.01, 1.42, 1.78, 2.28, 1.67, 1.85, 2.18, 1.52, 1.82, 2.49, 1.5, 1.51], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [0.72, 1.82, 1.83, 0.73, 1.71, 1.09, 0.69, 0.71, 1.46, 0.97, 0.98, 1.46, 0.67, 1.18], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [0.58, 1.35, 0.54, 1.31, 1.56, 1.23, 1.78, 1.59, 1.04, 1.9, 1.28, 0.89, 0.62, 2.1], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.28, 0.8, 0.82, 0.78, 1.74, 1.64, 1.09, 2.15, 0.81, 1.28, 1.4, 2.04, 1.36, 0.93], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.47, 0.65, 0.19, 0.12, 0.68, 0.7, 0.21, 0.48, 0.53, 0.61, 0.88, 0.2, 0.97, 0.22], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.37, 1.47, 0.58, 1.02, 1.03, 0.56, 2.2, 1.11, 1.14, 0.4, 1.11, 1.34, 0.85, 1.28], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.77, 0.3, 1.46, 0.53, 1.36, 0.84, 0.76, 0.25, 1.89, 0.81, 0.54, 0.89, 0.87, 1.17], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.26, 0.62, 0.97, 1.6, 1.7, 1.04, 1.19, 0.56, 0.92, 1.49, 0.3, 1.02, 0.89, 0.79], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 25; i <= gameweeks + 25 - 1; i++) {
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
