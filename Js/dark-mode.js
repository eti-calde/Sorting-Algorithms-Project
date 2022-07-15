const toggleTheme = document.getElementById('toggle-theme');

toggleTheme.addEventListener('click', () => {

    if (document.body.classList[0] == 'dark') {
        document.body.classList.replace('dark', 'white');
    } else if (document.body.classList[0] == 'white') {
        document.body.classList.replace('white', 'colorful');
    } else if ((document.body.classList[0] == 'colorful')) {
        document.body.classList.replace('colorful', 'dark');
    }
})