// chamber/js/navigation.js

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('menu'); // Corrected ID to 'menu'
    const mainNav = document.querySelector('.navigation'); // Select by class for consistency

    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener('click', () => {
            mainNav.classList.toggle('open');
            // Change hamburger icon (☰ to ✕ and vice-versa)
            hamburgerMenu.textContent = mainNav.classList.contains('open') ? '✕' : '☰';
            hamburgerMenu.setAttribute('aria-expanded', mainNav.classList.contains('open'));
        });

        // Close menu when a navigation link is clicked (useful for mobile)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('open')) {
                    mainNav.classList.remove('open');
                    hamburgerMenu.textContent = '☰';
                    hamburgerMenu.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Wayfinding: Add 'active' class to the current page link
        const currentPath = window.location.pathname.split('/').pop();
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href').split('/').pop();
            // Handle both 'index.html' and empty path for home page
            if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    } else {
        console.error("Navigation elements (hamburger menu or main nav) not found.");
    }
});
