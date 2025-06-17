export function displayGames(games) {
  const container = document.querySelector('#gamesContainer');
  container.innerHTML = '';
  games.forEach(game => {
    const card = document.createElement('div');
    card.classList.add('game-card');
    card.innerHTML = `
      <img src="${game.image}" alt="${game.title}" loading="lazy">
      <h3>${game.title}</h3>
      <p><strong>Genre:</strong> ${game.genre}</p>
      <p><strong>Players:</strong> ${game.players}</p>
      <p>${game.description}</p>
      <button onclick="showDetails('${encodeURIComponent(JSON.stringify(game))}')">More Info</button>
      <button onclick="saveFavorite('${game.title}')">❤️ Favorite</button>
    `;
    container.appendChild(card);
  });
}

export function filterGames(games, genre) {
  const filtered = genre === 'All' ? games : games.filter(game => game.genre === genre);
  displayGames(filtered);
}

window.showDetails = (gameData) => {
  const game = JSON.parse(decodeURIComponent(gameData));
  const modal = document.querySelector('#gameModal');
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close" onclick="closeModal()">&times;</span>
      <h2>${game.title}</h2>
      <p>${game.description}</p>
      <p><a href="${game.rules}" target="_blank">Read Rules</a></p>
    </div>`;
  modal.style.display = 'block';
};

window.closeModal = () => {
  document.querySelector('#gameModal').style.display = 'none';
};

window.saveFavorite = (title) => {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  if (!favorites.includes(title)) {
    favorites.push(title);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert(`"${title}" added to favorites!`);
  }
};
