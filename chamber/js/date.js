// chamber/js/date.js

document.addEventListener('DOMContentLoaded', () => {
    // Dynamically set the copyright year
    const copyrightYearSpan = document.getElementById('year'); // Corrected ID to 'year'
    if (copyrightYearSpan) {
        copyrightYearSpan.textContent = new Date().getFullYear();
    } else {
        console.error("Copyright year span element with ID 'year' not found.");
    }

    // Dynamically set the last modified date
    const lastModifiedParagraph = document.getElementById('lastModified');
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
    } else {
        console.error("Last modified paragraph element with ID 'lastModified' not found.");
    }
});
