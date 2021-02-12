subToggle = document.querySelector('#subToggle');

subMenu = document.querySelector('.submenu');
console.log(subToggle, subMenu);
subToggle.onclick = () => {
    console.log('f');
    subMenu.classList.toggle('submenu--active')
}

let tel = document.querySelector('input[type="tel"]')
let mask = new Inputmask('+7( 999 ) 999 - 99 - 99');
mask.mask(tel);