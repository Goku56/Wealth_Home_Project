'use-strict';

const navbar = document.querySelector("[data-navbar]");
const navToggle = document.querySelector("[data-nav-toggler]")

navToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

const header = document.querySelector("[data-header]");

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});