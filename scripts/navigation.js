
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



document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");


  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("hidden");
  });
});
