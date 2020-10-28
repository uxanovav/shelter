alert('Добрый день сокурсники, надеюсь на Вашу солидарность и прошу зайти в конце срока кросс-чека и перепроверить работу. В связи с основной занятостью очень мало времени остается на учебу. Успел только верстку 2-ух страниц и начал делать адаптив..\n 28.10.2020 "treger78: по верстке и ссылкам были исправлены ваши замечения, адаптив завершен, работаю над DOM"');

const burgerMenu = document.querySelector('.burger-menu');
const burgerButton = document.querySelector('.burger');
const burgerIcon = document.querySelector('#burger-icon');
const header = document.querySelector('header');
const logo = document.querySelector('.logo');
const logotitle = document.querySelector('.logo-title');
let burgerToggler = false;

burgerButton.addEventListener('click', showBurgerMenu);

function showBurgerMenu () {
    if (burgerToggler === false){
        burgerMenu.style.height = '240px';
        header.style.position = 'fixed';
        logo.style.display = 'none';
        logotitle.style.display = 'none';
        burgerButton.style.marginLeft = '226px';
        burgerIcon.src = './assets/img/start_screen/close-button-png-30234.png';
        burgerIcon.style.width = '40px';
        burgerIcon.style.height = '40px';
        document.querySelector('.start-screen-content').style.marginTop = '80px';
        burgerToggler = true;
    } else {
        burgerMenu.style.height = '0px';
        logo.style.display = '';
        logotitle.style.display = '';
        burgerButton.style.marginLeft = '40px';
        header.style.position = '';
        document.querySelector('.start-screen-content').style.marginTop = '60px';
        burgerIcon.src = './assets/img/start_screen/Burger.png';
        burgerIcon.style.width = '30px';
        burgerIcon.style.height = '22px';
        burgerToggler = false;
    }
}