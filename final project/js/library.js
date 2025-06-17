// Fetch and display games from games.json
import { openModal } from './modal.js';

document.addEventListener('DOMContentLoaded', () => {
  const gameList = document.querySelector('#game-list');
  const genreFilter = document.querySelector('#genre-filter');
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  fetch('./data/games.json')
    .then(response => response.json())
    .then(data => {
      displayGames(data);
      setupFilter(data);
    })
    .catch(err => console.error('Error loading games:', err));

  function displayGames(games) {
    gameList.innerHTML = '';
    games.forEach(game => {
      const card = document.createElement('div');
      card.classList.add('game-card');
      card.innerHTML = `
        <img src="${game.image}" alt="${game.title}" loading="lazy">
        <h3>${game.title}</h3>
        <p>${game.genre} | ${game.players} players</p>
        <button class="info-btn" data-title="${game.title}">More Info</button>
        <button class="fav-btn" data-title="${game.title}">${favorites.includes(game.title) ? '★' : '☆'}</button>
      `;
      gameList.appendChild(card);
    });

    document.querySelectorAll('.info-btn').forEach(btn =>
      btn.addEventListener('click', e => openModal(e.target.dataset.title)));

    document.querySelectorAll('.fav-btn').forEach(btn =>
      btn.addEventListener('click', e => toggleFavorite(e.target)));
  }

  function setupFilter(games) {
    genreFilter.addEventListener('change', () => {
      const selected = genreFilter.value;
      const filtered = selected === 'all' ? games : games.filter(g => g.genre === selected);
      displayGames(filtered);
    });
  }

  function toggleFavorite(button) {
    const title = button.dataset.title;
    const index = favorites.indexOf(title);
    if (index >= 0) {
      favorites.splice(index, 1);
      button.textContent = '☆';
    } else {
      favorites.push(title);
      button.textContent = '★';
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
});