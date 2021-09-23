const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__bugger');
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");
let showMenu = false;

menuBtn.addEventListener('click', toggerMenu);

function toggerMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach(i => i.classList.add("open"));
    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach(i => i.classList.remove("open"));
    showMenu = false;
  }
}