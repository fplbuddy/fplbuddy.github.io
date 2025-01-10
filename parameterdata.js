const data = {
"Arsenal": { scores: [1.37, 0.77], logo: "logos/Arsenal2.png", page: "Arsenal.html" },
"Aston Villa": { scores: [1.08, 1.53], logo: "logos/Aston_Villa2.png", page: "Aston_Villa.html" },
"Bournemouth": { scores: [0.94, 1.32], logo: "logos/Bournemouth2.png", page: "Bournemouth.html" },
"Brentford": { scores: [1.08, 1.65], logo: "logos/Brentford2.png", page: "Brentford.html" },
"Brighton": { scores: [0.91, 1.41], logo: "logos/Brighton2.png", page: "Brighton.html" },
"Chelsea": { scores: [1.3, 1.36], logo: "logos/Chelsea2.png", page: "Chelsea.html" },
"Crystal Palace": { scores: [0.85, 1.32], logo: "logos/Crystal_Palace2.png", page: "Crystal_Palace.html" },
"Everton": { scores: [0.58, 1.19], logo: "logos/Everton2.png", page: "Everton.html" },
"Fulham": { scores: [0.94, 1.38], logo: "logos/Fulham2.png", page: "Fulham.html" },
"Ipswich": { scores: [0.77, 1.83], logo: "logos/Ipswich2.png", page: "Ipswich.html" },
"Leicester": { scores: [0.72, 1.93], logo: "logos/Leicester2.png", page: "Leicester.html" },
"Liverpool": { scores: [1.5, 1.04], logo: "logos/Liverpool2.png", page: "Liverpool.html" },
"Man City": { scores: [1.35, 1.06], logo: "logos/Man_City2.png", page: "Man_City.html" },
"Man United": { scores: [0.88, 1.36], logo: "logos/Man_United2.png", page: "Man_United.html" },
"Newcastle": { scores: [1.27, 1.27], logo: "logos/Newcastle2.png", page: "Newcastle.html" },
"Nott'm Forest": { scores: [0.88, 1.21], logo: "logos/Nott'm_Forest2.png", page: "Nott'm_Forest.html" },
"Southampton": { scores: [0.49, 2.23], logo: "logos/Southampton2.png", page: "Southampton.html" },
"Tottenham": { scores: [1.27, 1.5], logo: "logos/Tottenham2.png", page: "Tottenham.html" },
"West Ham": { scores: [0.9, 1.83], logo: "logos/West_Ham2.png", page: "West_Ham.html" },
"Wolves": { scores: [0.92, 1.84], logo: "logos/Wolves2.png", page: "Wolves.html" },

};

function updateTable() {
    const header = document.getElementById("ParameterHeader");
    const body = document.getElementById("ParameterBody");

    // Re-create the header row
    header.innerHTML = `<th>Club</th>`;
    header.innerHTML += `<th>Attacking Param</th>`
    header.innerHTML += `<th>Defensive Param</th>`

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

        // Individual gameweek goals
        for (let i = 0; i < 2; i++) {
            row.innerHTML += `<td>${data[team].scores[i].toFixed(2)}</td>`;
        }

        body.appendChild(row);
    }

    sorttable.makeSortable(document.getElementById("ParameterTable"));
}

document.addEventListener("DOMContentLoaded", () => updateTable());
