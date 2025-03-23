const expectedGoalsData = {
  "Arsenal": { scores: [1.92, 1.49, 2.15, 2.61, 1.75, 1.9, 1.26, 2.01, 2.97], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.48, 1.54, 2.4, 1.62, 1.15, 1.55, 1.38, 1.71, 1.43], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [2.32, 1.69, 1.53, 1.25, 1.57, 0.75, 1.71, 1.13, 2.28], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.47, 1.59, 0.77, 1.66, 1.39, 1.61, 2.13, 1.56, 1.79], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.68, 1.23, 2.24, 1.51, 1.85, 1.57, 1.72, 1.1, 1.49], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [2.01, 1.83, 2.76, 1.63, 1.58, 1.33, 1.71, 1.87, 1.62], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [2.13, 1.46, 2.31, 1.36, 0.68, 1.36, 1.36, 1.75, 0.9], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [0.69, 0.58, 0.94, 0.87, 0.96, 1.6, 0.94, 1.82, 0.99], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [0.69, 1.03, 1.25, 1.43, 2.18, 1.4, 1.22, 1.41, 1.16], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.99, 1.42, 1.02, 0.61, 1.05, 0.87, 1.25, 1.49, 1.38], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.67, 0.95, 0.87, 0.66, 1.04, 1.57, 0.81, 1.38, 0.81], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [1.91, 1.97, 2.71, 2.94, 2.43, 2.02, 1.21, 2.11, 2.01], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [3.09, 1.91, 1.9, 1.62, 2.31, 2.65, 3.21, 2.05, 1.86], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.2, 1.11, 1.27, 1.72, 1.2, 1.36, 1.66, 1.24, 1.51], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [2.07, 2.48, 3.6, 1.86, 2.81, 1.77, 1.89, 0.91, 1.61], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.59, 1.55, 1.34, 1.53, 1.73, 1.27, 2.3, 1.71, 1.58], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.73, 0.79, 0.89, 0.89, 0.8, 1.07, 0.66, 0.62, 0.44], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.67, 3.14, 2.08, 1.8, 1.19, 2.01, 1.66, 1.82, 1.94], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.45, 1.25, 0.83, 2.19, 1.21, 1.4, 1.17, 1.25, 1.72], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.62, 1.8, 1.46, 1.22, 1.96, 0.97, 1.41, 1.08, 1.48], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [2.5, 2.8, 2.31, 2.71, 2.54, 2.35, 1.49, 2.0, 3.22], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [0.94, 1.07, 2.05, 0.78, 0.49, 1.23, 0.91, 0.81, 1.11], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.85, 1.43, 1.44, 1.28, 1.51, 0.75, 1.26, 0.64, 2.23], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [0.63, 0.81, 0.58, 1.11, 0.89, 1.29, 1.43, 1.22, 1.14], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.14, 1.16, 2.1, 0.95, 1.49, 0.85, 1.23, 0.61, 0.72], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [0.94, 1.01, 1.8, 1.19, 1.9, 0.67, 0.75, 1.45, 1.03], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [2.4, 1.46, 1.67, 1.43, 0.87, 1.41, 0.95, 1.7, 0.67], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [0.74, 1.12, 1.31, 0.99, 1.03, 2.09, 1.48, 2.68, 1.0], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [0.73, 0.69, 1.09, 0.98, 2.24, 1.06, 1.94, 1.05, 0.78], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.49, 0.83, 0.32, 0.37, 0.3, 1.01, 0.6, 1.26, 0.89], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.23, 0.42, 0.53, 0.26, 0.7, 1.71, 0.5, 1.12, 0.51], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [2.51, 1.79, 2.18, 2.57, 1.52, 1.32, 1.42, 1.67, 2.03], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.55, 1.64, 1.81, 2.1, 1.59, 1.89, 2.58, 1.62, 1.57], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.02, 0.74, 0.74, 1.48, 1.04, 1.0, 1.56, 0.77, 1.2], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.15, 1.93, 2.78, 0.99, 1.75, 1.04, 0.9, 0.67, 1.86], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.51, 1.08, 1.96, 0.82, 1.25, 1.28, 2.23, 1.43, 0.99], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.59, 0.22, 0.45, 0.56, 0.57, 1.04, 0.2, 0.81, 0.25], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [0.67, 2.26, 1.17, 1.08, 0.44, 1.24, 1.28, 0.9, 1.13], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.99, 0.92, 0.33, 2.06, 0.79, 0.67, 0.95, 0.91, 1.26], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.18, 1.2, 0.62, 0.89, 1.77, 0.35, 0.9, 0.87, 0.84], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 30; i <= gameweeks + 30 - 1; i++) {
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
