
const menuButton = document.getElementById('menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  menuButton.classList.toggle('open');
});

const links = document.querySelectorAll('.navigation a');
links.forEach(link => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.classList.remove('open');
  });
});

// hamburger.js

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("#menu-toggle");
  const navLinks = document.querySelector("#nav-links");

  toggle.addEventListener("click", () => {
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
  });
});
