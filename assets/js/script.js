const switchBtn = document.getElementById('color-toggle');
const imgBack = document.querySelectorAll('#img-back');

// Function to toggle the color theme
function toggleTheme() {
    const body = document.body;

    // Toggle the values of CSS variables
    if (body.classList.contains('dark-theme')) {
        imgBack.forEach(i => {
            i.classList.remove('img-back');
        })
        body.classList.remove('dark-theme');
    } else {
        imgBack.forEach(i => {
            i.classList.add('img-back');
        })
        body.classList.add('dark-theme');
    };
};

// Event listener toggles themes
switchBtn.addEventListener('click', toggleTheme);