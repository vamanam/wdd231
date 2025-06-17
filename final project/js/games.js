import { displayGames, filterGames } from './main.js';

fetch('./data/games.json')
  .then(res => res.json())
  .then(data => {
    // If your JSON is { "games": [...] }, use data.games
    const games = Array.isArray(data) ? data : data.games;
    displayGames(games);
    document.querySelector('#genre-filter').addEventListener('change', e => {
      filterGames(games, e.target.value);
    });
  })
  .catch(err => console.error('Error fetching games:', err));