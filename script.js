fetch('matchs.json')
  .then(response => response.json())
  .then(data => {
    for (const phase in data) {
      const section = document.getElementById(phase);
      if (section) {
        const matchList = section.querySelector('.match-list');
        data[phase].forEach(match => {
          const matchDiv = document.createElement('div');
          matchDiv.classList.add('match');
          matchDiv.innerHTML = `
            <span class="team">${match.team1}</span>
            <span class="score">${match.score}</span>
            <span class="team">${match.team2}</span>
            <span class="date">${match.date}</span>
          `;
          matchList.appendChild(matchDiv);
        });
      }
    }
  })
  .catch(error => console.error('Erreur lors du chargement des matchs:', error));
