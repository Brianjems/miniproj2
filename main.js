let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
menu.classList.toggle('uil-times');
navbar.classList.toggle('active');
};
window.onscroll =  () => {
  menu.classList.remove('uil-times');
  navbar.classList.remove('active');
}
let swiper = new Swiper(".home", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

//ModalLoginSignup

function signupToggle(){
  let container = document.querySelector('.container');
  container.classList.toggle('active');
  let popup = document.querySelector('.signup-form');
  popup.classList.toggle('active');
}
function loginToggle(){
  let container = document.querySelector('.container');
  container.classList.toggle('active');
  let popup = document.querySelector('.login-form');
  popup.classList.toggle('active');
}

//swiper

var swiper2 = new Swiper(".coming-container", {
  slidesPerView: 5,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

