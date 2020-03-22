const arrow = document.querySelector('.fa-arrow-circle-up');
const nav = document.querySelector('nav');

arrow.addEventListener("click", move);


function move() {
    arrow.classList.toggle('on');
    nav.classList.toggle('on');
}