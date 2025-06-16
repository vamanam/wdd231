async function loadCards() {
  const response = await fetch("data/places.json");
  const places = await response.json();
  const container = document.getElementById("card-container");

  places.forEach(place => {
    const card = document.createElement("section");
    card.classList.add("card");

    card.innerHTML = `
      <h2>${place.title}</h2>
      <figure>
        <img src="${place.photo_url}" alt="${place.title}" loading="lazy">
      </figure>
      <address>${place.address}</address>
      <p>${place.description}</p>
      <button>Learn More</button>
    `;

    container.appendChild(card);
  });
}

loadCards();

// js/discover.js

const messageElement = document.getElementById("visitorMessage");

function showVisitorMessage() {
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();

  if (lastVisit) {
    const daysPassed = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

    if (daysPassed < 1) {
      messageElement.textContent = "Welcome back! You visited today.";
    } else {
      messageElement.textContent = `Welcome back! It's been ${daysPassed} day(s) since your last visit.`;
    }
  } else {
    messageElement.textContent = "Welcome! Thanks for visiting Timbuktu Chamber for the first time!";
  }

  localStorage.setItem("lastVisit", now);
}

showVisitorMessage();


document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu");
  const nav = document.querySelector(".navigation");

  menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    nav.classList.toggle("show");
  });
});
