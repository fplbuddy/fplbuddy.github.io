const expectedGoalsData = {
  "Arsenal": { scores: [2.1, 4.37, 0.0, 1.99, 1.31, 2.02, 2.95], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [2.47, 2.83, 0.0, 1.63, 1.48, 1.77, 1.42], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.53, 1.24, 1.5, 0.77, 1.64, 1.08, 2.24], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [0.77, 1.69, 1.33, 1.5, 2.04, 1.54, 1.68], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [2.17, 1.43, 1.81, 1.54, 1.63, 1.12, 1.43], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [2.65, 1.58, 1.49, 1.34, 1.64, 1.73, 1.53], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [2.25, 2.11, 0.0, 1.34, 1.34, 1.7, 0.93], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [0.92, 0.84, 0.9, 1.59, 0.95, 1.81, 0.98], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.35, 1.42, 2.26, 1.42, 1.25, 1.43, 1.17], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.98, 0.65, 1.06, 0.86, 1.24, 1.5, 1.41], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.89, 0.68, 1.0, 1.55, 0.78, 1.36, 0.83], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [2.71, 2.9, 2.41, 1.89, 1.25, 2.18, 2.03], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.85, 3.7, 0.0, 2.5, 3.08, 2.07, 1.81], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.21, 1.61, 1.19, 1.26, 1.6, 1.11, 1.4], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [3.56, 1.8, 2.81, 1.85, 1.8, 0.95, 1.58], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.3, 1.49, 1.66, 1.25, 2.26, 1.68, 1.47], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.89, 0.9, 0.83, 1.08, 0.65, 0.62, 0.47], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.98, 1.75, 1.21, 1.96, 1.64, 1.72, 1.98], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.85, 2.16, 1.24, 1.37, 1.1, 1.23, 1.69], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.44, 1.16, 1.95, 0.93, 1.46, 1.08, 1.44], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [2.31, 5.11, 0.0, 2.32, 1.43, 1.94, 3.14], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [2.06, 1.39, 0.0, 1.2, 0.97, 0.89, 1.23], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.29, 1.22, 1.52, 0.68, 1.13, 0.63, 2.19], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [0.61, 1.2, 0.95, 1.42, 1.44, 1.19, 1.19], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [2.05, 0.92, 1.44, 0.79, 1.16, 0.56, 0.69], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.88, 1.21, 2.02, 0.75, 0.83, 1.64, 1.15], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.68, 2.29, 0.0, 1.43, 0.97, 1.7, 0.66], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.37, 1.09, 1.12, 2.11, 1.43, 2.69, 1.03], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.08, 1.03, 2.18, 0.98, 1.94, 1.07, 0.82], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.35, 0.37, 0.3, 1.02, 0.65, 1.29, 0.93], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.57, 0.27, 0.71, 1.7, 0.52, 1.11, 0.53], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [2.14, 2.52, 1.49, 1.31, 1.35, 1.64, 1.97], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.89, 3.75, 0.0, 1.96, 2.6, 1.7, 1.54], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [0.79, 1.57, 1.12, 1.12, 1.66, 0.88, 1.21], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [2.89, 0.92, 1.73, 1.08, 0.97, 0.67, 1.87], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.99, 0.87, 1.33, 1.3, 2.28, 1.46, 1.08], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.42, 0.58, 0.52, 1.07, 0.23, 0.82, 0.26], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.18, 1.13, 0.45, 1.26, 1.31, 0.85, 1.19], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.33, 2.03, 0.82, 0.7, 1.01, 0.94, 1.23], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.69, 1.0, 1.85, 0.41, 0.98, 0.91, 0.93], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 32; i <= gameweeks + 32 - 1; i++) {
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
