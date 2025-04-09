const expectedGoalsData = {
  "Arsenal": { scores: [2.1, 4.37, 0.0, 1.99, 1.31, 1.98, 2.96], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [2.48, 2.81, 0.0, 1.63, 1.49, 1.77, 1.42], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.53, 1.25, 1.5, 0.77, 1.64, 1.08, 2.26], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [0.77, 1.69, 1.33, 1.5, 2.05, 1.54, 1.69], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [2.19, 1.43, 1.81, 1.51, 1.63, 1.12, 1.44], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [2.65, 1.59, 1.49, 1.33, 1.61, 1.73, 1.54], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [2.24, 2.11, 0.0, 1.34, 1.34, 1.7, 0.93], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [0.92, 0.84, 0.91, 1.59, 0.95, 1.81, 0.97], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.36, 1.42, 2.27, 1.43, 1.25, 1.44, 1.17], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.98, 0.65, 1.05, 0.87, 1.24, 1.52, 1.41], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.87, 0.66, 0.97, 1.5, 0.76, 1.32, 0.8], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [2.71, 2.93, 2.41, 1.9, 1.25, 2.19, 2.03], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.85, 3.7, 0.0, 2.5, 3.09, 2.07, 1.82], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.19, 1.61, 1.19, 1.26, 1.6, 1.12, 1.4], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [3.58, 1.82, 2.83, 1.87, 1.81, 0.96, 1.6], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.3, 1.49, 1.66, 1.26, 2.27, 1.68, 1.47], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.89, 0.9, 0.83, 1.09, 0.65, 0.62, 0.47], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.98, 1.75, 1.21, 1.97, 1.64, 1.73, 1.98], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.85, 2.16, 1.25, 1.37, 1.11, 1.23, 1.69], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.44, 1.16, 1.96, 0.94, 1.46, 1.08, 1.44], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [2.31, 5.1, 0.0, 2.31, 1.43, 1.92, 3.14], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [2.06, 1.38, 0.0, 1.2, 0.97, 0.89, 1.23], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.28, 1.22, 1.52, 0.69, 1.13, 0.63, 2.24], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [0.61, 1.19, 0.95, 1.41, 1.44, 1.19, 1.19], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [2.1, 0.92, 1.44, 0.77, 1.16, 0.56, 0.69], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.87, 1.21, 2.02, 0.75, 0.82, 1.64, 1.15], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.67, 2.28, 0.0, 1.43, 0.97, 1.69, 0.66], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.37, 1.09, 1.13, 2.1, 1.43, 2.68, 1.01], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.08, 1.02, 2.18, 0.98, 1.93, 1.07, 0.81], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.35, 0.37, 0.29, 1.02, 0.64, 1.34, 0.92], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.56, 0.27, 0.7, 1.68, 0.52, 1.1, 0.52], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [2.13, 2.58, 1.49, 1.32, 1.35, 1.64, 1.97], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.88, 3.75, 0.0, 1.96, 2.6, 1.7, 1.54], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [0.78, 1.57, 1.12, 1.12, 1.65, 0.88, 1.2], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [2.94, 0.95, 1.75, 1.11, 1.0, 0.69, 1.9], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.99, 0.87, 1.32, 1.31, 2.33, 1.46, 1.07], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.42, 0.58, 0.52, 1.11, 0.23, 0.82, 0.26], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.18, 1.12, 0.45, 1.26, 1.31, 0.85, 1.19], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.33, 2.02, 0.82, 0.7, 1.01, 0.93, 1.23], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.69, 1.0, 1.9, 0.41, 0.98, 0.91, 0.92], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
