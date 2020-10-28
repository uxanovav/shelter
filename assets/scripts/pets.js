const burgerMenu = document.querySelector('.burger-menu');
const burgerButton = document.querySelector('.burger');
let burgerToggler = false;

burgerButton.addEventListener('click', showBurgerMenu);

function showBurgerMenu () {
    if (burgerToggler === false){
        burgerMenu.style.height = '220px';
        burgerToggler = true;
    } else {
        burgerMenu.style.height = '0px';
        burgerToggler = false;
    }
}