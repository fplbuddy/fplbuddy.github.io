const expectedGoalsData = {
  "Arsenal": { scores: [2.14, 2.32, 2.02, 1.77, 2.02, 1.74, 2.9, 2.24, 1.8, 2.22, 2.39, 2.31, 1.45, 2.68, 2.81, 1.77, 1.67, 2.18, 2.15, 1.67, 2.71, 2.4, 2.11, 2.26, 1.14, 2.09, 2.91], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.85, 1.58, 2.37, 3.09, 1.55, 1.27, 1.51, 1.9, 2.84, 1.47, 0.88, 2.46, 2.02, 2.54, 1.91, 1.53, 1.96, 1.21, 1.57, 1.87, 2.55, 1.83, 1.05, 1.88, 1.64, 1.95, 1.46], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.49, 1.58, 1.52, 1.64, 1.92, 1.14, 1.44, 1.21, 1.39, 1.23, 1.18, 1.47, 0.94, 2.0, 1.91, 1.23, 1.26, 1.86, 1.99, 1.59, 1.47, 1.19, 1.38, 0.69, 1.64, 0.82, 2.22], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.32, 2.57, 1.57, 1.65, 1.43, 1.69, 1.42, 0.97, 2.31, 1.15, 1.09, 1.38, 1.76, 1.84, 2.12, 1.6, 1.89, 1.48, 1.36, 1.73, 0.8, 1.72, 1.4, 1.59, 1.9, 1.7, 1.82], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.37, 2.58, 1.3, 1.96, 1.54, 1.7, 1.98, 1.45, 0.89, 1.75, 1.22, 1.48, 1.29, 1.59, 2.13, 1.65, 1.57, 0.87, 1.75, 1.27, 2.37, 1.64, 2.05, 1.52, 1.68, 1.01, 1.34], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [2.72, 2.43, 2.96, 1.86, 2.75, 1.7, 2.18, 2.43, 1.77, 2.29, 2.83, 1.21, 2.85, 1.82, 2.01, 3.57, 3.28, 1.02, 2.25, 2.27, 2.94, 1.8, 2.05, 1.4, 1.75, 2.04, 1.79], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.22, 1.29, 1.48, 0.89, 1.11, 0.75, 1.16, 2.18, 1.35, 1.66, 1.43, 1.67, 1.03, 1.25, 1.1, 1.48, 1.79, 1.07, 1.8, 1.34, 0.74, 1.4, 0.62, 1.32, 1.14, 1.72, 0.7], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.25, 0.77, 1.29, 0.64, 0.47, 1.01, 0.55, 0.99, 0.86, 1.11, 1.03, 0.83, 1.5, 0.81, 0.93, 1.03, 1.06, 1.3, 0.53, 0.56, 0.82, 0.67, 0.83, 1.34, 0.82, 1.63, 0.8], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.94, 1.28, 1.51, 0.85, 0.79, 2.46, 1.26, 1.58, 2.02, 1.62, 1.87, 1.4, 1.2, 1.49, 1.47, 1.61, 1.25, 1.55, 0.7, 0.96, 1.3, 1.52, 2.03, 1.38, 1.41, 1.56, 1.01], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [1.07, 0.94, 1.12, 1.2, 1.23, 1.11, 0.54, 1.16, 0.94, 1.15, 0.77, 0.61, 1.88, 1.05, 1.18, 0.89, 0.93, 1.14, 0.99, 1.48, 0.96, 0.65, 0.92, 0.89, 1.44, 1.43, 1.49], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [1.44, 1.48, 1.85, 1.43, 1.14, 1.84, 0.75, 0.95, 1.3, 1.39, 1.41, 1.21, 1.1, 0.8, 1.78, 1.53, 1.19, 1.33, 0.79, 1.37, 1.18, 0.91, 1.52, 2.32, 1.17, 1.91, 1.23], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [2.93, 1.45, 1.73, 1.68, 2.16, 1.85, 3.25, 2.33, 2.02, 1.78, 2.25, 2.91, 1.88, 2.8, 1.2, 2.1, 3.53, 1.99, 2.03, 1.78, 2.82, 2.69, 2.23, 1.81, 1.23, 1.8, 2.12], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.43, 1.24, 2.34, 1.9, 2.2, 2.16, 2.21, 2.93, 3.06, 2.45, 2.62, 2.38, 1.1, 2.28, 1.51, 2.01, 1.93, 2.37, 3.53, 1.82, 2.3, 1.83, 2.61, 3.04, 3.18, 2.47, 1.94], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.57, 1.32, 0.66, 1.4, 0.78, 1.48, 1.51, 1.36, 0.74, 2.3, 1.42, 1.16, 1.38, 1.2, 1.09, 1.89, 0.8, 1.75, 1.16, 0.95, 1.13, 1.82, 1.22, 1.46, 1.83, 1.18, 1.56], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [2.56, 1.59, 1.26, 2.05, 2.96, 2.19, 2.19, 1.52, 1.68, 2.55, 2.07, 2.66, 1.96, 1.09, 1.95, 1.04, 2.12, 1.93, 2.47, 2.45, 1.84, 1.81, 2.65, 1.64, 1.99, 0.92, 1.85], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [0.63, 1.8, 0.74, 1.04, 1.49, 1.39, 1.38, 1.04, 1.43, 0.86, 2.19, 1.16, 1.35, 1.1, 1.07, 0.76, 0.9, 1.49, 1.25, 1.23, 1.26, 1.14, 1.69, 1.08, 2.02, 1.44, 1.36], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.56, 0.73, 0.88, 0.8, 0.9, 0.72, 1.14, 0.7, 1.1, 0.67, 0.72, 0.84, 0.97, 0.92, 0.88, 0.73, 0.46, 1.13, 0.85, 0.74, 0.97, 0.94, 0.87, 1.08, 0.59, 0.68, 0.49], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.11, 1.99, 1.74, 2.02, 2.71, 1.28, 1.64, 2.59, 1.94, 0.94, 1.55, 3.01, 2.08, 1.87, 2.22, 1.34, 2.1, 1.65, 1.67, 3.27, 2.14, 1.99, 1.06, 2.15, 1.96, 1.84, 2.02], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.2, 0.85, 1.87, 1.94, 1.3, 1.51, 2.03, 0.96, 0.83, 1.49, 1.47, 1.38, 1.25, 1.89, 0.7, 2.26, 1.45, 1.16, 1.6, 1.57, 0.79, 2.45, 1.25, 1.55, 1.16, 1.49, 1.67], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.18, 1.5, 1.11, 1.54, 1.92, 1.78, 1.34, 1.22, 1.42, 1.14, 1.2, 0.81, 1.59, 0.76, 1.24, 1.42, 1.34, 1.93, 1.86, 1.59, 1.48, 1.11, 2.15, 0.79, 1.44, 1.16, 1.8], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [2.67, 2.14, 2.59, 2.14, 3.14, 2.35, 2.93, 1.9, 2.05, 1.96, 2.07, 2.23, 1.66, 2.24, 2.48, 2.34, 2.25, 1.8, 2.48, 2.85, 2.25, 2.61, 2.68, 2.51, 1.47, 1.99, 3.05], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.47, 0.44, 1.04, 2.25, 1.13, 0.58, 0.56, 1.18, 1.36, 1.65, 0.46, 1.26, 1.02, 1.75, 0.67, 1.14, 0.75, 0.68, 0.87, 1.46, 1.9, 0.82, 0.37, 1.26, 0.97, 0.8, 1.05], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.27, 1.11, 0.88, 1.5, 1.36, 1.14, 1.57, 1.03, 2.11, 0.5, 0.63, 1.56, 0.76, 2.0, 1.45, 0.96, 0.61, 1.14, 1.85, 1.04, 1.36, 1.23, 1.47, 0.52, 0.97, 0.42, 1.46], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.43, 1.14, 0.47, 0.65, 0.32, 1.24, 0.69, 0.53, 1.67, 0.43, 0.53, 0.94, 0.63, 0.76, 0.84, 1.78, 0.7, 0.78, 0.42, 0.52, 0.33, 0.97, 0.93, 1.16, 1.18, 1.05, 0.83], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.13, 2.42, 1.1, 1.2, 1.65, 1.1, 1.21, 0.75, 0.83, 1.58, 1.21, 2.18, 1.29, 0.81, 2.08, 1.46, 1.43, 0.47, 1.04, 1.31, 1.53, 0.9, 1.43, 0.97, 1.18, 0.82, 0.67], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.19, 1.03, 2.07, 0.66, 1.2, 1.83, 1.42, 1.57, 1.3, 1.45, 1.51, 0.46, 1.43, 1.02, 0.74, 2.41, 1.52, 0.56, 0.94, 0.89, 1.92, 1.09, 2.17, 0.82, 0.68, 1.54, 1.29], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [0.79, 1.02, 1.63, 0.74, 1.07, 0.87, 1.18, 2.47, 0.85, 1.25, 1.15, 1.26, 1.26, 2.23, 1.15, 1.09, 1.98, 0.73, 2.13, 1.4, 0.5, 1.52, 0.61, 1.69, 0.71, 1.57, 0.6], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.33, 1.33, 1.65, 0.93, 0.66, 0.92, 0.55, 1.77, 1.25, 1.15, 1.06, 1.14, 1.66, 1.43, 1.67, 1.01, 1.3, 1.56, 0.65, 0.94, 1.42, 0.8, 0.64, 2.05, 1.22, 2.54, 0.79], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.54, 0.68, 1.37, 0.85, 0.58, 2.44, 0.57, 1.48, 1.95, 1.12, 1.22, 1.57, 0.7, 1.66, 1.67, 1.2, 1.04, 0.96, 0.58, 0.84, 1.15, 0.83, 2.1, 0.76, 2.2, 0.92, 0.72], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [1.04, 0.82, 1.14, 0.97, 0.73, 0.56, 0.28, 0.44, 0.66, 0.87, 0.36, 0.27, 1.9, 0.39, 0.54, 0.75, 0.83, 1.13, 0.69, 1.02, 0.26, 0.45, 0.35, 1.31, 0.75, 0.74, 0.94], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.33, 0.38, 0.77, 0.7, 0.26, 0.84, 0.19, 0.27, 0.29, 0.95, 0.77, 0.25, 1.12, 0.34, 0.6, 0.52, 0.19, 0.87, 0.14, 0.43, 0.47, 0.34, 0.58, 1.69, 0.66, 1.2, 0.54], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [2.86, 1.44, 1.42, 2.65, 2.26, 1.39, 2.36, 1.92, 2.38, 2.12, 1.68, 2.73, 1.95, 2.35, 1.11, 1.77, 3.15, 1.5, 2.95, 1.91, 2.26, 2.02, 1.74, 1.24, 1.6, 1.83, 2.47], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.65, 1.17, 2.38, 2.04, 2.29, 1.41, 2.88, 1.93, 2.17, 1.59, 2.32, 1.49, 1.18, 1.68, 1.5, 1.31, 2.03, 2.09, 2.27, 1.94, 2.39, 2.56, 1.75, 2.26, 2.79, 2.2, 1.82], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.71, 2.32, 0.67, 1.77, 0.55, 1.6, 1.31, 1.09, 0.66, 2.55, 1.48, 1.23, 1.79, 0.77, 1.97, 2.06, 0.95, 1.33, 1.43, 0.81, 0.79, 1.66, 1.26, 1.01, 1.57, 0.65, 1.16], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.51, 1.38, 0.88, 0.96, 1.61, 1.65, 1.1, 1.28, 0.72, 1.59, 1.54, 2.15, 1.5, 0.51, 1.71, 0.62, 1.17, 1.72, 1.28, 1.27, 1.62, 0.8, 2.0, 1.09, 0.87, 0.62, 2.25], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [0.59, 1.95, 0.48, 1.24, 1.06, 0.92, 0.97, 1.86, 1.21, 0.85, 2.45, 1.15, 1.37, 1.13, 0.71, 0.85, 0.72, 1.6, 1.57, 0.77, 2.21, 0.69, 1.23, 1.33, 1.56, 1.13, 0.83], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.27, 0.38, 0.26, 0.23, 0.33, 0.43, 0.66, 0.56, 0.5, 0.5, 0.56, 0.35, 0.77, 0.68, 0.59, 0.14, 0.14, 0.72, 0.82, 0.19, 0.39, 0.43, 0.66, 0.49, 0.21, 0.98, 0.27], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [0.44, 1.39, 1.09, 0.78, 2.03, 0.79, 1.25, 1.48, 0.93, 0.54, 1.79, 1.49, 0.86, 1.5, 1.53, 0.67, 1.42, 1.06, 0.52, 2.38, 1.14, 1.59, 0.54, 1.06, 1.6, 0.71, 1.3], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.38, 0.49, 0.79, 1.07, 0.73, 0.92, 1.61, 0.49, 0.23, 0.99, 1.19, 0.43, 0.29, 0.8, 0.3, 1.08, 0.6, 1.37, 0.78, 1.02, 0.3, 1.96, 0.64, 0.58, 0.8, 1.18, 1.12], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.72, 1.03, 1.38, 0.72, 1.47, 0.8, 1.11, 0.38, 1.19, 0.39, 0.3, 0.5, 0.66, 0.3, 0.74, 1.0, 1.72, 1.62, 1.01, 1.14, 0.59, 0.81, 1.1, 0.24, 0.93, 0.89, 0.81], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 12; i <= gameweeks + 12 - 1; i++) {
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
