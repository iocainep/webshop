var button = document.getElementById('menu_btn');
var hover = document.getElementById('hover');
var menu = document.getElementById('nav');
var closeLink = document.getElementById('close-menu');

button.addEventListener('click', function () {
    menu.classList.toggle('header__menu-display-block');
    hover.classList.toggle('header__menu-display-block');
});

closeLink.addEventListener('click', function () {
    menu.classList.toggle('header__menu-display-block');
    hover.classList.toggle('header__menu-display-block');
});

hover.addEventListener('click', function () {
    menu.classList.remove('header__menu-display-block');
    hover.classList.remove('header__menu-display-block');
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
});