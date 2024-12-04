const expectedGoalsData = {
  "Arsenal": { scores: [1.95, 2.2, 1.82, 3.22, 2.28, 1.87, 2.21, 2.56, 2.5, 1.68, 2.6, 2.96, 1.84, 1.72, 2.18, 2.35, 1.82, 2.75, 2.67, 2.2, 2.45, 1.2, 2.19, 2.98], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [2.89, 1.48, 1.35, 1.46, 1.81, 2.52, 1.47, 0.88, 2.37, 2.0, 2.59, 1.75, 1.46, 1.83, 1.16, 1.5, 1.78, 2.4, 1.76, 1.12, 1.89, 1.63, 1.77, 1.38], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.81, 2.0, 1.17, 1.49, 1.32, 1.49, 1.23, 1.23, 1.5, 0.98, 2.02, 2.04, 1.27, 1.24, 1.86, 2.18, 1.66, 1.59, 1.23, 1.41, 0.74, 1.73, 0.94, 2.12], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.64, 1.35, 1.66, 1.4, 0.98, 2.23, 1.26, 1.08, 1.36, 1.65, 1.83, 1.94, 1.64, 1.91, 1.52, 1.36, 1.63, 0.82, 1.69, 1.37, 1.55, 2.0, 1.76, 1.86], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.75, 1.48, 1.65, 1.85, 1.43, 0.89, 1.8, 1.16, 1.48, 1.24, 1.47, 2.01, 1.65, 1.58, 0.94, 1.72, 1.23, 2.11, 1.53, 1.99, 1.48, 1.68, 0.97, 1.23], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.74, 2.61, 1.74, 2.24, 2.54, 1.73, 2.33, 2.86, 1.33, 2.81, 1.78, 2.02, 3.42, 2.98, 1.04, 2.1, 2.17, 3.06, 1.85, 2.09, 1.38, 1.73, 1.97, 1.75], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.0, 1.11, 0.78, 1.2, 2.13, 1.29, 1.54, 1.45, 1.62, 1.02, 1.3, 1.15, 1.51, 1.91, 1.08, 1.77, 1.34, 0.83, 1.45, 0.65, 1.31, 1.08, 1.78, 0.71], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [0.59, 0.45, 0.89, 0.57, 0.91, 0.83, 1.05, 0.9, 0.77, 1.28, 0.75, 0.85, 0.93, 1.02, 1.21, 0.49, 0.54, 0.75, 0.69, 0.74, 1.32, 0.8, 1.47, 0.74], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [0.84, 0.77, 2.3, 1.16, 1.56, 2.06, 1.57, 1.66, 1.33, 1.16, 1.42, 1.4, 1.59, 1.2, 1.41, 0.7, 0.92, 1.3, 1.39, 1.91, 1.35, 1.4, 1.45, 1.07], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [1.39, 1.41, 1.24, 0.62, 1.24, 1.1, 1.28, 0.95, 0.68, 2.04, 1.2, 1.25, 0.97, 1.03, 1.26, 1.15, 1.7, 1.02, 0.74, 1.03, 1.03, 1.55, 1.47, 1.67], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [1.18, 0.95, 1.58, 0.63, 0.88, 1.11, 1.15, 1.23, 0.96, 0.96, 0.69, 1.44, 1.29, 0.95, 1.09, 0.73, 1.15, 0.98, 0.76, 1.31, 1.89, 0.96, 1.69, 1.06], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [1.74, 2.24, 1.74, 2.99, 2.34, 1.98, 1.75, 2.17, 3.07, 1.93, 2.86, 1.33, 2.09, 3.42, 2.02, 2.1, 1.86, 2.82, 2.48, 2.1, 1.72, 1.25, 1.78, 2.09], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.78, 2.03, 2.07, 2.15, 2.54, 2.88, 2.22, 2.61, 2.13, 1.06, 2.14, 1.41, 1.78, 1.79, 2.2, 3.06, 1.68, 2.14, 1.78, 2.49, 2.93, 2.91, 2.39, 1.9], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.45, 0.91, 1.6, 1.63, 1.43, 0.78, 2.35, 1.47, 1.27, 1.43, 1.19, 1.19, 2.1, 0.86, 1.7, 1.2, 1.1, 1.19, 1.96, 1.32, 1.48, 1.93, 1.18, 1.67], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.84, 2.54, 2.16, 2.07, 1.39, 1.48, 2.43, 1.98, 2.42, 1.9, 1.13, 1.79, 0.97, 1.98, 1.78, 2.22, 2.11, 1.68, 1.72, 2.61, 1.51, 1.77, 0.88, 1.78], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [0.97, 1.44, 1.28, 1.24, 1.03, 1.4, 0.81, 2.02, 1.14, 1.27, 1.1, 1.02, 0.74, 0.95, 1.5, 1.17, 1.19, 1.24, 1.03, 1.54, 1.02, 1.76, 1.38, 1.23], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.86, 0.89, 0.79, 1.2, 0.74, 1.11, 0.7, 0.75, 0.89, 1.09, 0.99, 0.92, 0.73, 0.49, 1.22, 0.89, 0.74, 1.04, 0.99, 0.95, 1.06, 0.68, 0.74, 0.53], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.96, 2.68, 1.3, 1.65, 2.7, 1.97, 0.98, 1.64, 2.81, 2.04, 1.86, 2.4, 1.51, 2.2, 1.75, 1.62, 3.23, 2.24, 1.99, 1.08, 2.2, 1.97, 1.9, 2.03], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [2.06, 1.39, 1.55, 2.05, 0.99, 0.96, 1.61, 1.51, 1.46, 1.24, 1.88, 0.75, 2.15, 1.51, 1.25, 1.71, 1.68, 0.82, 2.47, 1.28, 1.51, 1.18, 1.52, 1.83], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.66, 2.19, 1.76, 1.41, 1.24, 1.5, 1.23, 1.23, 0.89, 1.73, 0.81, 1.38, 1.59, 1.49, 2.02, 2.0, 1.81, 1.49, 1.17, 2.13, 0.95, 1.53, 1.23, 1.86], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [2.16, 3.2, 2.3, 2.7, 1.87, 2.06, 1.88, 2.08, 2.05, 1.72, 2.51, 2.36, 2.39, 2.12, 1.77, 2.49, 2.92, 2.21, 2.37, 2.62, 2.39, 1.43, 2.07, 2.93], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [2.11, 1.19, 0.63, 0.63, 1.2, 1.64, 1.76, 0.39, 1.17, 0.88, 1.51, 0.67, 1.1, 0.74, 0.66, 0.89, 1.52, 1.77, 0.9, 0.41, 1.29, 0.88, 0.75, 0.94], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.25, 1.24, 1.01, 1.5, 1.05, 2.18, 0.49, 0.69, 1.6, 0.72, 1.85, 1.26, 0.96, 0.56, 1.1, 1.58, 0.93, 1.37, 1.17, 1.33, 0.43, 0.98, 0.46, 1.72], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [0.79, 0.37, 1.39, 0.79, 0.51, 1.64, 0.54, 0.57, 0.98, 0.65, 0.76, 1.18, 1.97, 0.8, 0.78, 0.54, 0.57, 0.32, 1.08, 1.07, 1.13, 1.06, 1.17, 0.78], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.53, 1.65, 1.06, 1.24, 0.82, 0.77, 1.39, 1.15, 2.32, 1.41, 0.84, 2.0, 1.41, 1.51, 0.55, 1.11, 1.32, 1.87, 0.93, 1.38, 1.1, 1.08, 0.84, 0.66], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [0.71, 1.29, 2.05, 1.57, 1.45, 1.37, 1.47, 1.47, 0.59, 1.44, 1.15, 0.87, 2.4, 1.93, 0.56, 0.99, 0.98, 1.79, 1.24, 2.38, 0.89, 0.85, 1.54, 1.47], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [0.85, 1.14, 0.81, 1.13, 2.39, 0.88, 1.58, 1.11, 1.28, 1.19, 2.37, 1.23, 1.16, 1.78, 0.84, 2.05, 1.47, 0.59, 1.46, 0.56, 1.8, 0.7, 1.45, 0.62], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [0.88, 0.55, 0.88, 0.58, 1.79, 1.13, 1.15, 0.97, 1.14, 1.92, 1.36, 1.52, 0.97, 1.13, 1.43, 0.61, 0.81, 1.45, 0.84, 0.62, 1.78, 1.23, 2.38, 0.84], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [0.71, 0.53, 2.27, 0.53, 1.34, 1.66, 1.0, 1.46, 1.4, 0.75, 1.67, 1.58, 1.02, 1.03, 0.87, 0.48, 0.78, 1.02, 0.78, 1.93, 0.76, 2.25, 0.86, 0.75], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.82, 0.56, 0.57, 0.2, 0.39, 0.64, 0.83, 0.37, 0.23, 1.69, 0.38, 0.45, 0.61, 0.74, 1.11, 0.56, 0.82, 0.23, 0.34, 0.37, 1.34, 0.68, 0.92, 0.8], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.87, 0.39, 0.86, 0.25, 0.4, 0.4, 1.07, 0.95, 0.3, 1.38, 0.37, 0.72, 0.58, 0.25, 0.92, 0.23, 0.61, 0.6, 0.42, 0.6, 1.74, 0.86, 1.15, 0.6], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [2.77, 2.32, 1.36, 2.66, 1.85, 2.29, 2.22, 1.7, 2.53, 1.88, 2.22, 1.22, 1.89, 3.07, 1.56, 3.06, 1.98, 2.19, 2.34, 1.7, 1.26, 1.5, 1.89, 2.46], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.85, 2.01, 1.29, 2.83, 2.07, 1.92, 1.42, 1.93, 1.33, 0.93, 1.62, 1.32, 1.11, 1.94, 1.95, 2.41, 1.67, 2.19, 2.51, 1.63, 1.94, 2.53, 1.94, 1.71], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.9, 0.66, 1.56, 1.22, 1.24, 0.69, 2.49, 1.57, 1.33, 1.81, 0.78, 2.14, 1.89, 0.89, 1.68, 1.56, 0.93, 0.93, 1.56, 1.23, 1.06, 1.53, 0.69, 1.25], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [0.97, 1.93, 1.44, 1.16, 1.2, 0.7, 1.46, 1.46, 2.05, 1.56, 0.59, 1.8, 0.62, 1.11, 1.7, 1.28, 1.58, 1.53, 0.86, 1.79, 1.14, 0.89, 0.56, 2.38], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.18, 1.14, 0.95, 0.96, 2.02, 1.11, 0.87, 2.37, 1.11, 1.45, 1.21, 0.83, 0.79, 0.83, 1.43, 1.51, 0.84, 2.36, 0.68, 1.27, 1.35, 1.91, 1.09, 0.87], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.28, 0.34, 0.5, 0.64, 0.59, 0.54, 0.48, 0.66, 0.45, 0.65, 0.66, 0.67, 0.16, 0.16, 0.66, 0.86, 0.2, 0.45, 0.42, 0.74, 0.76, 0.27, 1.15, 0.25], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [0.88, 2.04, 0.88, 1.45, 1.45, 1.14, 0.55, 2.03, 1.92, 0.96, 1.52, 1.44, 0.84, 1.45, 1.22, 0.61, 2.38, 1.12, 1.79, 0.61, 1.1, 1.7, 0.85, 1.46], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.95, 0.68, 0.96, 1.51, 0.48, 0.28, 1.04, 1.17, 0.47, 0.3, 0.8, 0.26, 1.38, 0.69, 1.49, 0.67, 0.95, 0.3, 1.85, 0.68, 0.55, 0.73, 1.26, 0.94], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.63, 1.22, 1.03, 0.98, 0.34, 1.23, 0.44, 0.29, 0.41, 0.67, 0.28, 0.65, 1.02, 1.8, 1.47, 0.9, 0.91, 0.53, 0.7, 1.35, 0.27, 0.93, 0.84, 0.78], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 15; i <= gameweeks + 15 - 1; i++) {
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
