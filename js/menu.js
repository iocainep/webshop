var button = document.getElementById('menu_btn');
var hover = document.getElementById('hover');
var menu = document.getElementById('nav');
var close = document.getElementById('close-menu');

button.addEventListener('click', function () {
<<<<<<< HEAD
    menu.classList.toggle('header__menu-display-block');
    hover.classList.toggle('header__menu-display-block');
});

close.addEventListener('click', function () {
    menu.classList.toggle('header__menu-display-block');
    hover.classList.toggle('header__menu-display-block');
});

hover.addEventListener('click', function () {
    menu.classList.remove('header__menu-display-block');
    hover.classList.remove('header__menu-display-block');
=======
    menu.classList.toggle('display-block');
    hover.classList.toggle('display-block');
});

close.addEventListener('click', function () {
    menu.classList.toggle('display-block');
    hover.classList.toggle('display-block');
});

hover.addEventListener('click', function () {
    menu.classList.remove('display-block');
    hover.classList.remove('display-block');
>>>>>>> 6966ea6c2169d48f3951abcf76fbeafd6c7f5f62
});