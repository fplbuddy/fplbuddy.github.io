const expectedGoalsData = {
  "Arsenal": { scores: [2.07, 2.0, 1.52, 2.23, 2.62, 1.82, 1.9, 1.26, 2.1, 3.04], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [0.0, 1.5, 1.57, 2.43, 1.67, 1.12, 1.59, 1.35, 1.68, 1.48], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.74, 2.29, 1.7, 1.55, 1.26, 1.61, 0.76, 1.74, 1.1, 2.28], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.38, 1.52, 1.68, 0.8, 1.71, 1.43, 1.68, 2.13, 1.63, 1.81], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.05, 1.67, 1.21, 2.18, 1.49, 1.82, 1.56, 1.66, 1.05, 1.41], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [0.95, 2.04, 1.92, 2.83, 1.72, 1.64, 1.36, 1.81, 2.0, 1.69], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [0.0, 2.17, 1.5, 2.34, 1.35, 0.7, 1.4, 1.35, 1.78, 0.9], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.33, 0.68, 0.6, 0.95, 0.86, 1.0, 1.6, 0.97, 1.85, 1.02], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.5, 0.7, 1.0, 1.21, 1.47, 2.17, 1.42, 1.21, 1.42, 1.12], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [1.11, 0.96, 1.41, 1.05, 0.62, 1.06, 0.86, 1.27, 1.48, 1.39], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [1.01, 0.69, 1.02, 0.92, 0.69, 1.09, 1.66, 0.86, 1.43, 0.83], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [0.0, 1.92, 2.02, 2.76, 2.95, 2.39, 2.09, 1.24, 2.12, 2.06], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.28, 3.17, 2.01, 1.97, 1.65, 2.43, 2.7, 3.3, 2.06, 1.94], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.74, 1.17, 1.05, 1.25, 1.67, 1.13, 1.33, 1.63, 1.23, 1.49], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [0.0, 2.14, 2.51, 3.73, 1.92, 2.82, 1.8, 1.99, 0.94, 1.63], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [2.0, 1.58, 1.52, 1.3, 1.44, 1.7, 1.24, 2.23, 1.67, 1.58], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [1.0, 0.73, 0.75, 0.89, 0.87, 0.8, 1.04, 0.63, 0.61, 0.44], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.68, 1.74, 3.21, 2.1, 1.85, 1.19, 2.06, 1.72, 1.88, 1.98], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.01, 1.47, 1.26, 0.83, 2.26, 1.24, 1.4, 1.22, 1.3, 1.74], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [2.05, 1.65, 1.76, 1.42, 1.24, 1.97, 0.95, 1.41, 1.09, 1.5], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [1.94, 2.49, 2.75, 2.25, 2.68, 2.48, 2.33, 1.44, 1.95, 3.22], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [0.0, 0.94, 1.09, 2.04, 0.73, 0.44, 1.2, 0.88, 0.76, 1.12], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.26, 1.91, 1.42, 1.49, 1.29, 1.61, 0.75, 1.29, 0.64, 2.19], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [0.88, 0.59, 0.73, 0.54, 1.13, 0.91, 1.32, 1.41, 1.21, 1.11], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [0.51, 1.12, 1.12, 2.0, 0.9, 1.44, 0.82, 1.22, 0.6, 0.69], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [0.63, 0.88, 0.93, 1.75, 1.14, 1.83, 0.62, 0.69, 1.46, 1.03], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [0.0, 2.42, 1.49, 1.57, 1.41, 0.81, 1.45, 0.9, 1.68, 0.64], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.83, 0.73, 1.09, 1.37, 0.96, 0.97, 2.11, 1.49, 2.72, 0.98], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [0.93, 0.68, 0.67, 1.06, 0.89, 2.25, 1.02, 1.9, 0.98, 0.72], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.68, 0.51, 0.86, 0.29, 0.36, 0.3, 1.01, 0.59, 1.19, 0.88], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.87, 0.21, 0.41, 0.56, 0.26, 0.7, 1.76, 0.54, 1.14, 0.51], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [0.0, 2.52, 1.83, 2.17, 2.52, 1.53, 1.29, 1.42, 1.75, 2.04], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.75, 2.51, 1.74, 1.83, 2.12, 1.63, 1.94, 2.66, 1.67, 1.63], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.82, 1.03, 0.67, 0.69, 1.44, 1.0, 0.93, 1.47, 0.68, 1.14], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [0.0, 1.09, 1.8, 2.75, 0.94, 1.73, 1.05, 0.82, 0.61, 1.81], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.64, 1.55, 1.04, 1.93, 0.78, 1.2, 1.23, 2.12, 1.36, 0.92], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.64, 0.57, 0.2, 0.44, 0.52, 0.57, 0.95, 0.18, 0.78, 0.24], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.11, 0.65, 2.35, 1.21, 1.19, 0.46, 1.23, 1.3, 0.93, 1.22], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.32, 0.96, 0.91, 0.31, 2.09, 0.81, 0.64, 0.98, 0.95, 1.25], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.85, 1.14, 1.21, 0.61, 0.95, 1.69, 0.33, 0.95, 0.84, 0.82], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 29; i <= gameweeks + 29 - 1; i++) {
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
