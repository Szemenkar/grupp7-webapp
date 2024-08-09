document.addEventListener('DOMContentLoaded', function() {
    var theme = localStorage.getItem('theme'); 
    var themeToggle = document.getElementById('theme-toggle');
    
    if (theme === 'dark') {
        document.getElementById('theme-stylesheet').setAttribute('href', '/css/darkmode.css');
        themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', function() {
        if (themeToggle.checked) {
            document.getElementById('theme-stylesheet').setAttribute('href', '/css/darkmode.css');
            localStorage.setItem('theme', 'dark');
        } else {
            document.getElementById('theme-stylesheet').setAttribute('href', '/css/site.css');
            localStorage.setItem('theme', 'light');
        }
    });
});