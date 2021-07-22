const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.menulist ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});