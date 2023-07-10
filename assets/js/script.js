const switchBtn = document.getElementById('color-toggle');
const imgBack = document.querySelectorAll('#img-back');

// Function to toggle the color theme
function toggleTheme() {
    const body = document.body;
    const root = document.documentElement;

    // Toggle the values of CSS variables
    if (body.classList.contains('dark-theme')) {
        root.style.setProperty('--primary-color', 'rgb(252, 252, 212)');
        imgBack.forEach(i => {
            i.classList.remove('img-back');
        })
        body.classList.remove('dark-theme');
    } else {
        root.style.setProperty('--primary-color', 'rgb(10, 68, 61)');
        imgBack.forEach(i => {
            i.classList.add('img-back');
        })
        body.classList.add('dark-theme');
    };
};

// Event listener toggles themes
switchBtn.addEventListener('click', toggleTheme);