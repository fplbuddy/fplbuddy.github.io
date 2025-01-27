const expectedGoalsData = {
  "Arsenal": { scores: [1.57, 2.54, 2.7, 1.78, 1.83, 2.07, 2.07, 1.55, 2.4, 2.6, 1.9, 1.91, 1.35, 1.97, 3.03], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.97, 2.35, 1.68, 1.39, 1.74, 1.22, 1.49, 1.61, 2.46, 1.6, 1.14, 1.67, 1.39, 1.89, 1.48], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.21, 2.45, 2.18, 1.48, 1.69, 1.93, 2.34, 1.95, 1.66, 1.38, 1.64, 0.84, 1.78, 1.13, 2.28], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.9, 1.97, 2.07, 1.4, 1.8, 1.39, 1.44, 1.69, 0.85, 1.67, 1.45, 1.66, 2.12, 1.68, 1.98], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.23, 1.44, 2.11, 1.32, 1.43, 0.98, 1.53, 1.19, 1.96, 1.49, 1.87, 1.37, 1.69, 1.04, 1.45], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [2.63, 1.8, 1.93, 3.3, 2.76, 1.02, 2.28, 2.1, 2.83, 1.81, 1.68, 1.47, 1.73, 1.99, 1.74], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.18, 1.11, 1.2, 1.42, 1.87, 1.14, 1.96, 1.32, 0.91, 1.23, 0.67, 1.28, 1.35, 1.75, 0.87], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.95, 0.77, 0.92, 0.97, 1.09, 1.21, 0.61, 0.52, 0.8, 0.71, 0.84, 1.31, 0.83, 1.52, 0.8], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.22, 1.37, 1.32, 1.68, 1.27, 1.62, 0.72, 1.04, 1.19, 1.44, 2.1, 1.37, 1.19, 1.49, 1.09], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [1.88, 1.1, 1.3, 1.02, 0.95, 1.1, 0.95, 1.51, 1.04, 0.64, 0.98, 0.86, 1.33, 1.41, 1.5], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.81, 0.61, 1.26, 1.27, 0.98, 1.07, 0.74, 1.03, 0.97, 0.79, 1.28, 1.78, 0.93, 1.52, 0.9], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [3.64, 3.02, 1.57, 2.2, 3.76, 2.21, 1.92, 2.07, 3.01, 2.83, 2.61, 2.08, 1.29, 2.05, 2.13], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.11, 2.11, 1.61, 2.24, 1.9, 2.2, 3.03, 1.96, 2.04, 1.66, 2.36, 2.9, 3.25, 2.04, 1.99], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.26, 1.39, 1.02, 1.92, 0.77, 1.68, 1.18, 1.04, 1.17, 1.79, 1.13, 1.42, 1.78, 1.23, 1.46], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.96, 1.34, 1.88, 1.28, 2.3, 1.81, 2.28, 2.41, 1.94, 1.88, 2.76, 1.75, 1.97, 0.99, 1.64], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.35, 1.22, 1.17, 0.76, 1.03, 1.72, 1.35, 1.31, 1.14, 1.38, 1.58, 1.13, 1.87, 1.6, 1.37], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [1.03, 0.76, 0.81, 0.74, 0.53, 1.07, 0.75, 0.83, 0.87, 0.96, 0.82, 1.0, 0.62, 0.61, 0.46], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [2.02, 1.91, 2.44, 1.47, 1.79, 1.74, 1.75, 3.17, 2.28, 1.86, 1.27, 2.27, 1.79, 1.86, 1.92], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.25, 1.61, 0.7, 1.9, 1.32, 1.04, 1.63, 1.28, 0.91, 2.28, 1.24, 1.57, 1.23, 1.33, 1.75], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.45, 0.89, 1.13, 1.36, 1.14, 2.0, 1.78, 1.71, 1.54, 1.21, 1.86, 0.93, 1.35, 1.13, 1.58], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [1.64, 2.72, 2.49, 2.33, 2.32, 1.81, 2.44, 2.97, 2.15, 2.62, 2.56, 2.16, 1.37, 1.86, 3.16], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.17, 1.66, 0.72, 1.2, 0.83, 0.55, 1.08, 1.35, 2.09, 0.76, 0.47, 1.27, 0.84, 0.78, 1.16], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [0.74, 2.35, 1.62, 1.33, 0.83, 1.24, 1.93, 1.39, 1.53, 1.46, 1.61, 0.74, 1.25, 0.65, 2.03], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [0.66, 1.0, 1.42, 1.9, 0.87, 0.72, 0.51, 0.61, 0.46, 1.13, 1.03, 1.21, 1.32, 1.13, 1.03], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.29, 0.83, 2.22, 1.14, 1.4, 0.56, 1.13, 1.33, 1.9, 0.94, 1.45, 0.87, 1.3, 0.64, 0.73], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.43, 1.19, 0.93, 2.4, 1.88, 0.63, 0.87, 0.92, 1.78, 1.19, 2.16, 0.63, 0.7, 1.46, 1.27], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.42, 2.32, 1.34, 1.25, 1.93, 0.82, 2.35, 1.53, 0.65, 1.26, 0.74, 1.62, 0.84, 1.62, 0.6], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [3.11, 1.65, 1.8, 1.23, 1.61, 1.77, 0.73, 1.07, 1.61, 0.95, 0.93, 2.11, 1.52, 2.71, 0.97], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [0.7, 1.47, 1.51, 1.28, 1.19, 0.88, 0.63, 0.63, 0.95, 0.82, 2.21, 0.94, 2.17, 0.93, 0.69], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [1.79, 0.48, 0.43, 0.73, 0.77, 0.9, 0.48, 0.9, 0.29, 0.37, 0.32, 1.36, 0.6, 1.09, 0.87], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [1.4, 0.4, 0.63, 0.75, 0.32, 0.93, 0.24, 0.45, 0.7, 0.29, 0.78, 1.83, 0.77, 1.22, 0.51], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [4.03, 2.05, 1.0, 1.39, 2.93, 1.48, 2.72, 1.77, 2.02, 2.27, 1.41, 1.15, 1.3, 1.76, 2.09], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.04, 1.31, 1.04, 1.15, 1.78, 1.88, 2.39, 1.77, 2.02, 2.47, 1.6, 1.98, 2.69, 1.61, 1.69], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.54, 0.74, 2.0, 1.81, 0.8, 1.71, 1.3, 0.7, 0.72, 1.5, 0.97, 0.95, 1.46, 0.68, 1.13], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.47, 0.61, 1.56, 0.56, 1.33, 1.6, 1.19, 1.78, 1.55, 1.01, 1.87, 1.28, 0.89, 0.7, 2.26], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.46, 1.27, 0.76, 0.84, 0.74, 1.66, 1.54, 1.0, 2.25, 0.78, 1.18, 1.39, 1.96, 1.32, 0.88], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.76, 0.43, 0.61, 0.18, 0.11, 0.68, 0.7, 0.21, 0.43, 0.51, 0.61, 0.84, 0.19, 1.09, 0.24], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [0.75, 1.25, 1.36, 0.53, 0.92, 0.99, 0.51, 2.18, 1.07, 1.26, 0.37, 1.04, 1.29, 0.75, 1.17], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.36, 0.7, 0.34, 1.4, 0.5, 1.49, 0.85, 0.71, 0.25, 1.92, 0.77, 0.52, 0.84, 1.01, 1.12], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.7, 0.24, 0.56, 0.93, 1.67, 1.71, 0.98, 1.11, 0.51, 0.83, 1.39, 0.28, 0.93, 0.87, 0.69], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
