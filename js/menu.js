
(() => {

    const pathname = window.location.pathname.split('/').pop();
    let menuItem = document.querySelector(`.menu__item[href='${pathname}']`);

    menuItem.classList.add('menu__item--active');


})()

const btnMenu = document.querySelector('#btnMenu');




btnMenu.addEventListener('click', () => {

    let menu = document.querySelector('.nav__menu');

    console.log(menu);
    menu.classList.toggle('hide');

});