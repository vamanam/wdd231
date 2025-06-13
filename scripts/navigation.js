document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Optional: close menu after clicking any link (on small screens)
  const links = navLinks.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
});
