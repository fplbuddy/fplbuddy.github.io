const expectedGoalsData = {
  "Arsenal": { scores: [2.79, 1.81, 1.93, 2.16, 2.12, 1.6, 2.5, 2.74, 1.94, 1.99, 1.41, 2.09, 3.14], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.62, 1.3, 1.67, 0.0, 1.58, 1.52, 2.35, 1.57, 1.19, 1.59, 1.33, 1.76, 1.45], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [2.08, 1.6, 1.59, 1.89, 2.32, 1.89, 1.6, 1.31, 1.63, 0.82, 1.75, 1.2, 2.32], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [2.06, 1.35, 1.75, 1.34, 1.41, 1.62, 0.81, 1.78, 1.37, 1.63, 2.06, 1.6, 1.85], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [2.04, 1.29, 1.38, 1.03, 1.51, 1.13, 1.99, 1.45, 1.82, 1.36, 1.6, 1.02, 1.37], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.92, 3.25, 2.84, 1.0, 2.18, 2.07, 2.84, 1.76, 1.66, 1.46, 1.73, 2.0, 1.68], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.19, 1.45, 1.92, 0.0, 1.97, 1.48, 2.17, 1.25, 0.68, 1.27, 1.32, 1.72, 0.88], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.04, 1.08, 1.19, 1.35, 0.68, 0.58, 0.88, 0.86, 0.93, 1.48, 0.92, 1.7, 0.9], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.3, 1.65, 1.42, 1.58, 0.73, 1.06, 1.19, 1.45, 2.11, 1.39, 1.2, 1.5, 1.2], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [1.22, 1.0, 0.9, 1.06, 0.92, 1.43, 1.0, 0.63, 0.97, 0.83, 1.3, 1.42, 1.45], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [1.24, 1.23, 0.95, 1.07, 0.79, 1.03, 1.04, 0.78, 1.21, 1.74, 0.9, 1.52, 0.88], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [1.71, 2.24, 3.76, 0.0, 1.92, 2.03, 3.0, 2.94, 2.53, 2.07, 1.3, 2.27, 2.09], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.62, 2.16, 1.86, 2.43, 3.15, 1.98, 2.0, 1.64, 2.38, 2.82, 3.22, 2.05, 1.95], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [0.98, 1.89, 0.75, 1.69, 1.12, 1.1, 1.15, 1.69, 1.09, 1.37, 1.72, 1.19, 1.43], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.83, 1.27, 2.25, 0.0, 2.25, 2.46, 3.7, 1.86, 2.76, 1.9, 1.94, 0.97, 1.61], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.31, 0.85, 1.25, 1.93, 1.52, 1.46, 1.26, 1.48, 1.76, 1.22, 2.16, 1.76, 1.52], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.93, 0.75, 0.55, 1.08, 0.76, 0.82, 0.91, 0.98, 0.83, 1.07, 0.7, 0.63, 0.47], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [2.46, 1.6, 1.78, 1.7, 1.73, 3.15, 2.2, 1.82, 1.26, 2.24, 1.74, 1.85, 2.12], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.69, 1.96, 1.34, 1.02, 1.57, 1.27, 0.9, 2.25, 1.35, 1.51, 1.24, 1.3, 1.75], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.13, 1.35, 1.14, 2.0, 1.78, 1.75, 1.5, 1.23, 1.95, 1.01, 1.51, 1.11, 1.59], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [2.5, 2.13, 2.37, 1.84, 2.42, 2.79, 2.21, 2.66, 2.54, 2.21, 1.36, 1.89, 3.11], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [0.73, 1.17, 0.87, 0.0, 1.11, 1.17, 2.02, 0.78, 0.46, 1.25, 0.87, 0.78, 1.2], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.61, 1.37, 0.84, 1.31, 1.98, 1.4, 1.52, 1.44, 1.67, 0.68, 1.32, 0.65, 2.08], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.45, 1.7, 0.94, 0.76, 0.53, 0.63, 0.41, 1.17, 0.86, 1.27, 1.36, 1.12, 1.02], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.98, 1.01, 1.21, 0.44, 1.03, 1.14, 1.76, 0.84, 1.3, 0.75, 1.11, 0.52, 0.6], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [0.99, 2.35, 1.93, 0.58, 0.89, 0.99, 1.84, 1.18, 1.97, 0.63, 0.72, 1.53, 1.1], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.36, 1.36, 2.03, 0.0, 2.34, 1.62, 1.55, 1.35, 0.72, 1.47, 0.88, 1.65, 0.62], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.87, 1.3, 1.6, 1.8, 0.73, 1.01, 1.42, 0.97, 0.95, 2.18, 1.51, 2.67, 1.0], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.52, 1.29, 1.26, 0.91, 0.6, 0.65, 1.01, 0.86, 2.18, 1.02, 2.0, 1.01, 0.71], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.43, 0.76, 0.73, 0.73, 0.49, 0.87, 0.29, 0.32, 0.32, 1.13, 0.63, 1.1, 0.87], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.64, 0.7, 0.29, 0.93, 0.21, 0.43, 0.68, 0.26, 0.71, 1.71, 0.58, 1.2, 0.49], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [0.99, 1.41, 2.88, 0.0, 2.53, 1.74, 2.03, 2.3, 1.42, 1.16, 1.23, 1.8, 2.07], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [0.91, 1.01, 1.43, 1.78, 2.28, 1.67, 1.84, 2.11, 1.52, 1.81, 2.49, 1.5, 1.51], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.76, 1.83, 0.73, 1.72, 1.09, 0.69, 0.71, 1.46, 0.98, 0.98, 1.45, 0.67, 1.18], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.35, 0.53, 1.31, 0.0, 1.23, 1.78, 3.14, 1.04, 1.9, 1.29, 0.89, 0.62, 2.03], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [0.8, 0.82, 0.78, 1.74, 1.64, 1.09, 2.08, 0.81, 1.28, 1.4, 2.04, 1.36, 0.93], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.65, 0.19, 0.11, 0.68, 0.7, 0.21, 0.48, 0.53, 0.61, 0.88, 0.2, 0.91, 0.22], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.47, 0.58, 1.02, 1.03, 0.56, 2.19, 1.11, 1.14, 0.4, 1.11, 1.34, 0.86, 1.27], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.31, 1.46, 0.53, 1.3, 0.84, 0.76, 0.25, 1.88, 0.81, 0.53, 0.89, 0.86, 1.17], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.63, 0.96, 1.53, 1.7, 1.04, 1.2, 0.55, 0.92, 1.49, 0.3, 1.01, 0.89, 0.79], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
