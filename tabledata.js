const expectedGoalsData = {
  "Arsenal": { scores: [2.01, 1.93, 1.97, 1.78, 3.13, 2.21, 1.81, 2.12, 2.43, 2.31, 1.59, 2.45, 2.68, 1.84, 1.69, 2.17, 2.31, 1.65, 2.64, 2.63, 2.13, 2.32, 1.22, 2.12, 2.96], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [2.29, 3.06, 1.59, 1.38, 1.54, 1.87, 2.53, 1.43, 0.87, 2.32, 2.0, 2.72, 1.88, 1.55, 1.92, 1.26, 1.56, 1.9, 2.57, 1.84, 1.16, 2.0, 1.68, 1.83, 1.46], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.41, 1.75, 1.79, 1.13, 1.42, 1.29, 1.31, 1.22, 1.19, 1.46, 0.97, 1.98, 1.84, 1.2, 1.18, 1.76, 2.09, 1.5, 1.54, 1.19, 1.34, 0.67, 1.62, 0.89, 1.95], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.54, 1.6, 1.37, 1.65, 1.36, 0.9, 2.24, 1.2, 1.09, 1.35, 1.6, 1.7, 1.85, 1.48, 1.83, 1.47, 1.34, 1.64, 0.76, 1.62, 1.39, 1.52, 1.98, 1.74, 1.74], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.41, 1.78, 1.55, 1.64, 1.92, 1.48, 0.87, 1.91, 1.23, 1.43, 1.34, 1.58, 2.16, 1.69, 1.68, 0.97, 1.77, 1.3, 2.13, 1.61, 1.95, 1.54, 1.68, 1.06, 1.29], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [2.93, 1.75, 2.6, 1.63, 2.28, 2.6, 1.76, 2.29, 2.72, 1.32, 2.65, 1.78, 2.01, 3.49, 2.89, 0.99, 2.09, 2.18, 3.09, 1.91, 1.94, 1.43, 1.76, 1.99, 1.81], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.64, 0.99, 1.13, 0.75, 1.21, 2.21, 1.36, 1.53, 1.4, 1.65, 1.05, 1.23, 1.21, 1.52, 1.96, 1.11, 1.85, 1.35, 0.83, 1.45, 0.63, 1.37, 1.11, 1.72, 0.76], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.2, 0.63, 0.44, 0.95, 0.58, 0.96, 0.85, 1.06, 0.92, 0.79, 1.28, 0.78, 0.88, 0.97, 1.01, 1.17, 0.53, 0.52, 0.8, 0.7, 0.8, 1.37, 0.84, 1.54, 0.78], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.45, 0.81, 0.82, 2.38, 1.23, 1.56, 2.11, 1.51, 1.65, 1.36, 1.2, 1.48, 1.43, 1.56, 1.22, 1.43, 0.68, 0.98, 1.31, 1.46, 2.0, 1.37, 1.32, 1.49, 1.07], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [1.3, 1.42, 1.42, 1.3, 0.62, 1.33, 1.18, 1.32, 0.98, 0.75, 2.17, 1.25, 1.3, 1.03, 1.09, 1.34, 1.19, 1.69, 1.12, 0.73, 1.09, 1.01, 1.62, 1.5, 1.64], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [1.47, 1.18, 0.98, 1.51, 0.67, 0.87, 1.12, 1.17, 1.27, 0.97, 0.9, 0.66, 1.45, 1.24, 1.0, 1.11, 0.73, 1.17, 0.99, 0.8, 1.27, 1.94, 1.01, 1.72, 1.07], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [1.76, 1.63, 2.28, 1.75, 2.89, 2.22, 1.99, 1.81, 2.18, 3.09, 1.92, 2.72, 1.32, 2.1, 3.49, 2.01, 1.94, 1.91, 2.65, 2.42, 2.09, 1.8, 1.18, 1.78, 2.1], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.27, 1.85, 2.09, 2.11, 2.04, 2.54, 2.78, 2.3, 2.73, 2.26, 1.04, 2.2, 1.51, 1.84, 1.91, 2.24, 3.03, 1.75, 2.21, 1.71, 2.52, 2.86, 3.08, 2.41, 2.01], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [0.64, 1.39, 0.85, 1.48, 1.47, 1.35, 0.77, 2.25, 1.37, 1.23, 1.35, 1.13, 1.05, 1.99, 0.76, 1.56, 1.17, 1.01, 1.13, 1.75, 1.24, 1.41, 1.71, 1.16, 1.55], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.24, 1.89, 2.5, 2.25, 2.08, 1.45, 1.52, 2.36, 1.99, 2.54, 1.97, 1.14, 1.88, 1.04, 1.93, 1.82, 2.26, 2.1, 1.72, 1.74, 2.68, 1.55, 1.86, 0.86, 1.68], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [0.81, 1.02, 1.47, 1.33, 1.28, 0.99, 1.39, 0.88, 2.13, 1.17, 1.3, 1.17, 1.07, 0.72, 0.96, 1.58, 1.21, 1.23, 1.19, 1.07, 1.59, 1.08, 1.76, 1.36, 1.31], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.92, 0.86, 0.89, 0.82, 1.13, 0.75, 1.11, 0.71, 0.78, 0.9, 1.11, 0.98, 0.91, 0.77, 0.51, 1.16, 0.9, 0.75, 1.03, 0.95, 0.97, 1.03, 0.67, 0.7, 0.51], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.87, 2.09, 2.85, 1.39, 1.77, 2.65, 2.04, 0.97, 1.58, 2.81, 2.13, 1.93, 2.53, 1.53, 2.23, 1.86, 1.75, 3.39, 2.22, 2.11, 1.17, 2.16, 2.04, 1.96, 2.07], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.7, 1.91, 1.35, 1.49, 2.06, 1.01, 0.93, 1.6, 1.48, 1.41, 1.26, 1.83, 0.7, 2.03, 1.47, 1.14, 1.6, 1.61, 0.84, 2.45, 1.25, 1.47, 1.17, 1.52, 1.82], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.15, 1.57, 2.19, 1.71, 1.4, 1.24, 1.53, 1.24, 1.27, 0.84, 1.69, 0.85, 1.36, 1.61, 1.37, 2.07, 1.87, 1.83, 1.48, 1.18, 2.04, 0.93, 1.5, 1.24, 1.84], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [2.64, 2.23, 3.22, 2.37, 2.7, 2.03, 2.09, 1.9, 2.09, 2.17, 1.76, 2.59, 2.49, 2.43, 2.33, 1.85, 2.54, 2.96, 2.34, 2.4, 2.67, 2.56, 1.53, 2.12, 3.02], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.08, 2.12, 1.15, 0.6, 0.62, 1.14, 1.63, 1.73, 0.44, 1.22, 0.92, 1.44, 0.67, 1.1, 0.8, 0.67, 0.85, 1.46, 1.79, 0.87, 0.4, 1.27, 0.99, 0.71, 1.07], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [0.77, 1.21, 1.3, 1.14, 1.48, 1.05, 2.14, 0.51, 0.69, 1.55, 0.73, 1.88, 1.29, 0.93, 0.54, 1.15, 1.52, 1.0, 1.35, 1.18, 1.45, 0.49, 0.93, 0.45, 1.72], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [0.51, 0.75, 0.37, 1.32, 0.73, 0.55, 1.64, 0.5, 0.56, 0.96, 0.6, 0.8, 1.17, 1.9, 0.74, 0.86, 0.52, 0.56, 0.36, 1.0, 1.02, 1.22, 0.99, 1.13, 0.79], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [1.17, 1.53, 1.62, 1.12, 1.28, 0.77, 0.82, 1.34, 1.27, 2.27, 1.36, 0.84, 2.01, 1.5, 1.48, 0.53, 1.05, 1.3, 1.85, 0.99, 1.43, 1.06, 1.11, 0.84, 0.63], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [2.0, 0.62, 1.27, 1.94, 1.47, 1.32, 1.29, 1.48, 1.4, 0.52, 1.41, 1.03, 0.76, 2.32, 1.84, 0.57, 0.87, 0.97, 1.64, 1.16, 2.26, 0.83, 0.78, 1.57, 1.35], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.36, 0.78, 1.06, 0.84, 1.21, 2.36, 0.86, 1.55, 1.14, 1.3, 1.29, 2.29, 1.19, 1.07, 1.68, 0.81, 2.04, 1.37, 0.55, 1.52, 0.6, 1.71, 0.65, 1.44, 0.61], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.59, 0.98, 0.7, 0.98, 0.65, 1.85, 1.35, 1.2, 1.03, 1.2, 2.02, 1.47, 1.75, 1.14, 1.27, 1.59, 0.72, 0.96, 1.53, 0.9, 0.72, 1.82, 1.33, 2.49, 0.93], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.23, 0.72, 0.51, 2.21, 0.51, 1.38, 1.53, 1.01, 1.41, 1.46, 0.69, 1.56, 1.49, 1.0, 0.93, 0.78, 0.5, 0.74, 1.07, 0.74, 1.89, 0.68, 2.15, 0.88, 0.67], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.97, 0.87, 0.56, 0.53, 0.22, 0.37, 0.61, 0.74, 0.33, 0.23, 1.65, 0.33, 0.4, 0.68, 0.71, 1.02, 0.62, 0.8, 0.23, 0.36, 0.34, 1.27, 0.69, 0.89, 0.81], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.91, 0.84, 0.41, 0.9, 0.28, 0.39, 0.4, 1.08, 0.96, 0.3, 1.39, 0.43, 0.79, 0.66, 0.28, 1.05, 0.24, 0.61, 0.6, 0.44, 0.65, 1.78, 0.86, 1.11, 0.71], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [1.44, 2.65, 2.2, 1.24, 2.56, 1.83, 2.31, 2.08, 1.67, 2.37, 1.9, 2.14, 1.11, 1.76, 2.99, 1.42, 2.94, 1.88, 2.15, 2.25, 1.55, 1.19, 1.48, 1.74, 2.34], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [2.23, 1.85, 2.14, 1.26, 2.79, 2.08, 1.98, 1.5, 1.88, 1.34, 1.02, 1.59, 1.34, 1.08, 1.91, 1.89, 2.4, 1.81, 2.17, 2.49, 1.57, 1.97, 2.55, 2.05, 1.71], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [0.67, 1.81, 0.62, 1.62, 1.23, 1.18, 0.68, 2.45, 1.46, 1.29, 1.74, 0.72, 2.08, 1.78, 0.92, 1.65, 1.49, 0.87, 0.89, 1.54, 1.31, 1.1, 1.55, 0.68, 1.16], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [0.86, 1.01, 1.88, 1.36, 1.07, 1.3, 0.65, 1.45, 1.53, 2.04, 1.51, 0.55, 1.71, 0.61, 1.15, 1.65, 1.31, 1.56, 1.61, 0.8, 1.68, 1.07, 0.86, 0.6, 2.3], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [0.51, 1.24, 1.02, 0.96, 0.86, 1.92, 1.09, 0.81, 2.3, 1.16, 1.31, 1.14, 0.77, 0.8, 0.74, 1.31, 1.55, 0.75, 2.24, 0.61, 1.25, 1.27, 1.82, 1.09, 0.81], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.27, 0.23, 0.29, 0.46, 0.64, 0.55, 0.53, 0.53, 0.59, 0.39, 0.57, 0.69, 0.58, 0.15, 0.15, 0.63, 0.78, 0.17, 0.38, 0.43, 0.68, 0.72, 0.23, 1.07, 0.26], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.22, 0.87, 2.05, 0.87, 1.39, 1.45, 1.09, 0.6, 1.98, 1.89, 1.01, 1.62, 1.37, 0.79, 1.53, 1.2, 0.62, 2.36, 1.14, 1.71, 0.62, 1.15, 1.65, 0.8, 1.37], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [1.15, 1.04, 0.84, 0.97, 1.61, 0.54, 0.31, 1.1, 1.23, 0.49, 0.35, 0.92, 0.34, 1.45, 0.73, 1.55, 0.77, 1.12, 0.35, 1.94, 0.71, 0.58, 0.91, 1.29, 0.97], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.5, 0.74, 1.21, 1.1, 1.15, 0.35, 1.24, 0.47, 0.33, 0.5, 0.68, 0.33, 0.8, 1.05, 1.82, 1.56, 1.01, 0.92, 0.54, 0.87, 1.41, 0.29, 0.93, 0.89, 0.88], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 14; i <= gameweeks + 14 - 1; i++) {
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
