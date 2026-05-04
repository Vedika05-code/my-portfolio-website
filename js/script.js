const toggleBtn = document.getElementById('theme-toggle');

// Check for saved user preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Save preference
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        toggleBtn.textContent = '☀️ Light Mode';
    } else {
        localStorage.setItem('theme', 'light');
        toggleBtn.textContent = '🌙 Dark Mode';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
