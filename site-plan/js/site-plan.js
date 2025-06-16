 document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('copyright-year').textContent = new Date().getFullYear();
            document.getElementById('last-modified').textContent = new Date(document.lastModified).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        });