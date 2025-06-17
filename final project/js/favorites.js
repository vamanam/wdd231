document.addEventListener('DOMContentLoaded', () => {
  const favList = document.querySelector('#favList');
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  if (favorites.length === 0) {
    favList.innerHTML = '<p>No favorite games yet.</p>';
    return;
  }

  favorites.forEach(title => {
    const item = document.createElement('li');
    item.textContent = title;
    favList.appendChild(item);
  });
});
