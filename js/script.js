subToggle = document.querySelector('#subToggle');

subMenu = document.querySelector('.submenu');
console.log(subToggle, subMenu);
subToggle.onclick = () => {
    console.log('f');
    subMenu.classList.toggle('submenu--active')
}
// subToggle.onclick = () => {
//     subMenu.toggle;
// }

// JQuery(() => {
//     $('#subToggle').onclick = () => {
//         $('.submenu').toggle();
//     }
// })