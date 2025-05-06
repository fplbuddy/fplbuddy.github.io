const expectedGoalsData = {
  "Arsenal": { scores: [1.32, 1.96, 2.9], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.41, 1.99, 1.55], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.52, 1.02, 2.15], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [2.26, 1.67, 1.73], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.56, 1.17, 1.58], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.6, 1.89, 1.53], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.43, 1.61, 0.94], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [0.9, 1.75, 0.92], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.17, 1.33, 1.08], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [1.26, 1.47, 1.42], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.74, 1.34, 0.74], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [1.34, 2.27, 2.23], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [3.1, 1.97, 1.81], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.59, 1.08, 1.33], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.86, 1.06, 1.67], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [2.11, 1.57, 1.37], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.61, 0.58, 0.47], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.78, 1.58, 2.06], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.16, 1.21, 1.68], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.62, 1.23, 1.5], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [1.31, 1.73, 3.11], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.09, 1.03, 1.33], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.22, 0.7, 2.39], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.42, 1.32, 1.11], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [0.99, 0.52, 0.64], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [0.78, 1.7, 1.27], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [0.84, 1.46, 0.54], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.55, 2.8, 0.94], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [2.03, 0.94, 0.82], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.52, 1.31, 0.93], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.61, 1.14, 0.58], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [1.33, 1.55, 1.96], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.73, 1.8, 1.69], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.57, 0.76, 1.06], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.01, 0.7, 2.0], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [2.37, 1.49, 1.09], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.23, 0.87, 0.27], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.19, 0.69, 1.03], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.02, 1.04, 1.21], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.05, 1.0, 0.89], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 36; i <= gameweeks + 36 - 1; i++) {
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
