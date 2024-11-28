const expectedGoalsData = {
  "Arsenal": { scores: [2.26, 2.0, 1.93, 1.95, 1.78, 2.85, 2.22, 1.81, 2.1, 2.42, 2.31, 1.59, 2.68, 2.68, 1.83, 1.69, 2.15, 2.29, 1.65, 2.63, 2.41, 2.11, 2.29, 1.22, 2.11, 2.97], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.58, 2.29, 3.06, 1.59, 1.38, 1.55, 1.87, 2.76, 1.43, 0.87, 2.33, 2.01, 2.48, 1.87, 1.55, 1.93, 1.26, 1.57, 1.89, 2.58, 1.83, 1.16, 1.99, 1.68, 1.83, 1.47], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.54, 1.4, 1.6, 1.78, 1.13, 1.4, 1.29, 1.3, 1.21, 1.19, 1.45, 0.97, 1.98, 1.83, 1.21, 1.18, 1.75, 1.9, 1.5, 1.53, 1.18, 1.33, 0.67, 1.61, 0.89, 2.12], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [2.41, 1.55, 1.6, 1.38, 1.65, 1.38, 0.9, 2.26, 1.21, 1.1, 1.35, 1.6, 1.72, 2.04, 1.48, 1.84, 1.47, 1.35, 1.63, 0.76, 1.63, 1.39, 1.52, 1.83, 1.74, 1.76], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [2.58, 1.42, 1.96, 1.54, 1.65, 1.93, 1.49, 0.87, 1.76, 1.24, 1.43, 1.34, 1.58, 2.18, 1.68, 1.68, 0.98, 1.77, 1.3, 2.33, 1.63, 1.96, 1.55, 1.69, 1.06, 1.3], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [2.39, 2.93, 1.75, 2.6, 1.63, 2.26, 2.38, 1.76, 2.27, 2.71, 1.32, 2.64, 1.79, 2.01, 3.47, 3.14, 0.99, 2.08, 2.19, 2.82, 1.91, 1.93, 1.43, 1.76, 1.98, 1.81], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.32, 1.5, 0.99, 1.13, 0.74, 1.21, 2.2, 1.34, 1.67, 1.41, 1.64, 1.05, 1.22, 1.21, 1.51, 1.78, 1.11, 1.85, 1.34, 0.84, 1.43, 0.62, 1.35, 1.11, 1.71, 0.76], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [0.74, 1.2, 0.63, 0.44, 0.94, 0.59, 0.95, 0.85, 1.06, 0.92, 0.79, 1.39, 0.78, 0.88, 0.97, 1.01, 1.17, 0.53, 0.52, 0.8, 0.7, 0.79, 1.25, 0.85, 1.54, 0.78], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [1.2, 1.45, 0.8, 0.82, 2.38, 1.22, 1.55, 1.93, 1.52, 1.81, 1.35, 1.2, 1.46, 1.42, 1.56, 1.22, 1.42, 0.68, 0.98, 1.31, 1.45, 2.0, 1.38, 1.32, 1.5, 1.07], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.96, 1.1, 1.2, 1.21, 1.11, 0.52, 1.13, 1.01, 1.13, 0.83, 0.64, 1.85, 1.07, 1.1, 0.88, 0.93, 1.14, 1.01, 1.44, 0.95, 0.62, 0.93, 0.86, 1.38, 1.41, 1.4], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [1.42, 1.72, 1.38, 1.14, 1.76, 0.78, 1.02, 1.31, 1.35, 1.47, 1.14, 1.06, 0.76, 1.69, 1.45, 1.16, 1.28, 0.86, 1.35, 1.16, 0.93, 1.48, 2.26, 1.17, 1.83, 1.24], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [1.58, 1.77, 1.64, 2.28, 1.76, 3.16, 2.25, 1.99, 1.82, 2.21, 2.84, 1.92, 2.73, 1.33, 2.1, 3.49, 2.03, 1.94, 1.92, 2.66, 2.67, 2.09, 1.8, 1.18, 1.8, 2.1], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.28, 2.27, 1.86, 2.09, 2.13, 2.04, 2.8, 2.8, 2.32, 2.51, 2.25, 1.04, 2.2, 1.51, 1.85, 1.91, 2.24, 3.32, 1.76, 2.2, 1.72, 2.52, 2.86, 3.1, 2.4, 2.02], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [1.25, 0.64, 1.38, 0.85, 1.46, 1.47, 1.35, 0.78, 2.25, 1.37, 1.23, 1.34, 1.13, 1.05, 1.82, 0.76, 1.71, 1.17, 1.01, 1.13, 1.75, 1.23, 1.42, 1.71, 1.16, 1.54], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.53, 1.24, 1.91, 2.73, 2.07, 2.08, 1.45, 1.52, 2.36, 1.97, 2.55, 1.97, 1.15, 1.86, 1.05, 1.94, 1.81, 2.26, 2.3, 1.72, 1.75, 2.45, 1.56, 1.85, 0.86, 1.68], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.72, 0.81, 1.02, 1.46, 1.34, 1.27, 0.99, 1.39, 0.87, 2.12, 1.17, 1.3, 1.17, 1.07, 0.72, 0.96, 1.45, 1.21, 1.23, 1.18, 1.07, 1.59, 1.07, 1.92, 1.36, 1.3], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.77, 0.91, 0.86, 0.89, 0.82, 1.13, 0.75, 1.11, 0.71, 0.77, 0.89, 1.02, 0.97, 0.91, 0.77, 0.52, 1.16, 0.89, 0.75, 1.02, 0.96, 0.97, 1.14, 0.67, 0.7, 0.5], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [2.21, 1.87, 2.08, 2.87, 1.4, 1.77, 2.65, 2.04, 0.97, 1.59, 3.07, 2.14, 1.93, 2.32, 1.53, 2.22, 1.87, 1.75, 3.39, 2.23, 2.09, 1.18, 2.18, 2.03, 1.97, 2.07], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.83, 1.87, 1.92, 1.35, 1.5, 2.08, 1.01, 0.94, 1.6, 1.47, 1.43, 1.27, 1.84, 0.7, 2.22, 1.48, 1.15, 1.62, 1.6, 0.85, 2.46, 1.27, 1.47, 1.18, 1.52, 1.68], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.61, 1.15, 1.58, 2.0, 1.88, 1.4, 1.24, 1.52, 1.25, 1.27, 0.83, 1.69, 0.85, 1.35, 1.6, 1.37, 2.08, 1.87, 1.68, 1.47, 1.18, 2.22, 0.94, 1.5, 1.24, 1.84], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

const defensiveScoreData = {
  "Arsenal": { scores: [2.18, 2.64, 2.25, 3.23, 2.39, 2.96, 2.03, 2.1, 1.9, 2.1, 2.18, 1.76, 2.34, 2.48, 2.45, 2.35, 1.86, 2.55, 2.97, 2.34, 2.69, 2.68, 2.57, 1.54, 2.12, 3.03], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [0.46, 1.06, 2.11, 1.16, 0.59, 0.63, 1.12, 1.35, 1.73, 0.45, 1.2, 0.92, 1.72, 0.67, 1.11, 0.8, 0.66, 0.85, 1.46, 1.8, 0.87, 0.4, 1.26, 1.0, 0.7, 1.07], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [1.0, 0.77, 1.5, 1.29, 1.16, 1.49, 1.06, 2.14, 0.52, 0.7, 1.56, 0.73, 1.89, 1.29, 0.93, 0.55, 1.15, 1.81, 1.01, 1.35, 1.19, 1.46, 0.5, 0.93, 0.45, 1.44], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.2, 0.51, 0.74, 0.37, 1.31, 0.73, 0.54, 1.64, 0.49, 0.55, 0.97, 0.59, 0.79, 0.92, 1.89, 0.73, 0.86, 0.52, 0.56, 0.36, 0.98, 1.02, 1.21, 1.26, 1.12, 0.79], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [2.32, 1.17, 1.26, 1.61, 1.11, 1.26, 0.77, 0.82, 1.62, 1.27, 2.26, 1.37, 0.84, 2.01, 1.49, 1.47, 0.53, 1.04, 1.31, 1.56, 0.98, 1.41, 1.05, 1.11, 0.83, 0.63], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.03, 2.01, 0.63, 1.26, 1.95, 1.47, 1.62, 1.31, 1.49, 1.41, 0.53, 1.41, 1.03, 0.77, 2.32, 1.56, 0.58, 0.87, 0.98, 1.93, 1.17, 2.26, 0.82, 0.79, 1.57, 1.37], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [1.09, 1.66, 0.78, 1.07, 0.85, 1.23, 2.36, 0.86, 1.29, 1.15, 1.3, 1.3, 2.3, 1.21, 1.07, 1.97, 0.82, 2.05, 1.36, 0.55, 1.53, 0.61, 1.71, 0.65, 1.44, 0.61], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [1.44, 1.58, 0.97, 0.71, 0.98, 0.65, 1.85, 1.36, 1.19, 1.02, 1.2, 1.74, 1.48, 1.75, 1.13, 1.28, 1.58, 0.72, 0.96, 1.54, 0.89, 0.73, 2.11, 1.34, 2.49, 0.93], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [0.55, 1.21, 0.72, 0.51, 2.2, 0.52, 1.38, 1.81, 1.01, 1.15, 1.46, 0.7, 1.56, 1.5, 1.01, 0.93, 0.77, 0.51, 0.73, 1.08, 0.74, 1.89, 0.68, 2.14, 0.88, 0.66], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.89, 1.11, 1.0, 0.68, 0.63, 0.29, 0.46, 0.73, 0.86, 0.4, 0.29, 1.8, 0.42, 0.49, 0.81, 0.84, 1.17, 0.75, 0.93, 0.3, 0.45, 0.43, 1.43, 0.8, 0.8, 0.93], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.45, 0.77, 0.7, 0.33, 0.77, 0.21, 0.3, 0.32, 0.94, 0.82, 0.23, 1.24, 0.34, 0.65, 0.54, 0.22, 0.9, 0.18, 0.5, 0.49, 0.35, 0.54, 1.61, 0.74, 1.23, 0.6], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [1.4, 1.44, 2.65, 2.19, 1.24, 2.28, 1.82, 2.29, 2.09, 1.66, 2.64, 1.9, 2.13, 1.1, 1.75, 2.98, 1.42, 2.93, 1.88, 2.13, 1.97, 1.54, 1.2, 1.48, 1.73, 2.33], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.03, 2.23, 1.86, 2.13, 1.26, 2.78, 1.81, 1.96, 1.5, 2.18, 1.33, 1.02, 1.58, 1.32, 1.08, 1.92, 1.88, 2.12, 1.82, 2.17, 2.49, 1.56, 1.96, 2.55, 2.05, 1.71], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [2.39, 0.68, 1.81, 0.62, 1.62, 1.23, 1.17, 0.68, 2.45, 1.45, 1.29, 1.74, 0.72, 2.08, 2.06, 0.92, 1.38, 1.5, 0.86, 0.9, 1.53, 1.32, 1.09, 1.54, 0.69, 1.15], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.34, 0.85, 1.01, 1.6, 1.65, 1.06, 1.3, 0.65, 1.44, 1.53, 2.05, 1.5, 0.55, 1.71, 0.61, 1.14, 1.65, 1.29, 1.29, 1.61, 0.8, 1.97, 1.07, 0.86, 0.61, 2.29], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [1.92, 0.52, 1.25, 1.02, 0.96, 0.85, 1.93, 1.1, 0.81, 2.3, 1.18, 1.31, 1.16, 0.77, 0.8, 0.74, 1.6, 1.56, 0.76, 2.24, 0.62, 1.25, 1.29, 1.54, 1.1, 0.82], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.38, 0.27, 0.23, 0.28, 0.46, 0.63, 0.56, 0.52, 0.53, 0.6, 0.39, 0.79, 0.69, 0.57, 0.15, 0.15, 0.63, 0.78, 0.17, 0.38, 0.43, 0.67, 0.52, 0.22, 1.07, 0.26], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.51, 1.23, 0.87, 2.05, 0.86, 1.41, 1.44, 1.09, 0.61, 1.99, 1.6, 1.01, 1.61, 1.66, 0.78, 1.53, 1.21, 0.63, 2.36, 1.15, 1.71, 0.62, 1.15, 1.65, 0.8, 1.36], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.52, 0.9, 1.03, 0.84, 0.96, 1.61, 0.53, 0.31, 1.09, 1.22, 0.49, 0.36, 0.9, 0.34, 1.17, 0.72, 1.55, 0.77, 1.11, 0.35, 1.92, 0.7, 0.57, 0.91, 1.28, 1.23], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [1.07, 1.5, 0.74, 1.49, 0.86, 1.14, 0.35, 1.24, 0.47, 0.33, 0.5, 0.67, 0.33, 0.8, 1.05, 1.82, 1.57, 0.99, 1.19, 0.54, 0.87, 1.13, 0.29, 0.92, 0.9, 0.86], logo: "logos/Wolves2.png", page: "Wolves.html" },

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
    for (let i = 13; i <= gameweeks + 13 - 1; i++) {
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
