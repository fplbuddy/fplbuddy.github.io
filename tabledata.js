const expectedGoalsData = {
  "Arsenal": { scores: [1.48, 2.16, 4.39, 0.0, 1.96, 1.25, 2.02, 2.98], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.55, 2.46, 2.84, 0.0, 1.6, 1.46, 1.73, 1.46], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.65, 1.51, 1.25, 1.53, 0.76, 1.64, 1.1, 2.21], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.54, 0.78, 1.7, 1.36, 1.58, 2.1, 1.56, 1.75], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.21, 2.15, 1.47, 1.79, 1.53, 1.65, 1.05, 1.43], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.81, 2.69, 1.63, 1.53, 1.29, 1.69, 1.83, 1.57], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.48, 2.26, 2.05, 0.0, 1.31, 1.32, 1.69, 0.87], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [0.58, 0.91, 0.85, 0.93, 1.55, 0.94, 1.78, 0.98], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.02, 1.29, 1.41, 2.19, 1.39, 1.21, 1.43, 1.16], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [1.44, 1.03, 0.64, 1.08, 0.88, 1.29, 1.53, 1.4], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.93, 0.88, 0.64, 1.01, 1.53, 0.78, 1.34, 0.82], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [1.98, 2.67, 2.9, 2.38, 1.95, 1.22, 2.16, 2.02], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.88, 1.89, 3.82, 0.0, 2.57, 3.17, 2.08, 1.86], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.08, 1.24, 1.65, 1.21, 1.33, 1.61, 1.18, 1.44], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [2.47, 3.61, 1.82, 2.79, 1.83, 1.84, 0.94, 1.59], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.5, 1.31, 1.5, 1.71, 1.27, 2.26, 1.69, 1.52], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.79, 0.89, 0.89, 0.82, 1.08, 0.66, 0.62, 0.45], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [3.05, 2.01, 1.73, 1.15, 1.96, 1.64, 1.75, 1.95], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.25, 0.8, 2.11, 1.21, 1.34, 1.13, 1.2, 1.66], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.76, 1.42, 1.2, 1.92, 0.96, 1.43, 1.08, 1.46], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [2.8, 2.28, 5.16, 0.0, 2.35, 1.47, 1.96, 3.17], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.11, 2.06, 1.34, 0.0, 1.24, 0.97, 0.87, 1.18], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.44, 1.37, 1.27, 1.5, 0.71, 1.17, 0.62, 2.21], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [0.82, 0.58, 1.15, 0.9, 1.32, 1.38, 1.2, 1.16], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.14, 2.07, 0.91, 1.49, 0.8, 1.2, 0.58, 0.71], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.07, 1.79, 1.23, 1.98, 0.71, 0.79, 1.54, 1.09], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.49, 1.65, 2.28, 0.0, 1.4, 0.97, 1.69, 0.67], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.13, 1.35, 1.03, 1.08, 2.07, 1.49, 2.68, 1.02], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [0.69, 1.1, 0.98, 2.21, 1.01, 1.96, 1.05, 0.78], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.86, 0.34, 0.37, 0.31, 1.06, 0.61, 1.31, 0.95], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.42, 0.58, 0.27, 0.73, 1.7, 0.52, 1.09, 0.55], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [1.8, 2.25, 2.63, 1.58, 1.37, 1.43, 1.75, 2.09], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.7, 1.86, 3.7, 0.0, 1.92, 2.58, 1.66, 1.57], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [0.76, 0.75, 1.51, 1.08, 1.02, 1.62, 0.8, 1.16], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.97, 2.85, 0.94, 1.7, 1.09, 0.92, 0.66, 1.89], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.06, 2.02, 0.88, 1.28, 1.35, 2.29, 1.51, 1.04], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.24, 0.43, 0.61, 0.56, 1.08, 0.21, 0.84, 0.25], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [2.26, 1.21, 1.12, 0.46, 1.31, 1.34, 0.88, 1.2], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.96, 0.35, 2.04, 0.84, 0.7, 1.0, 0.93, 1.23], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.19, 0.67, 0.96, 1.83, 0.38, 0.96, 0.92, 0.87], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 31; i <= gameweeks + 31 - 1; i++) {
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
