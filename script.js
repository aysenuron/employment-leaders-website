const body = document.querySelector("body");
const mobileNav = document.querySelector(".nav-links");
const burgerMenuBtn = document.querySelector(".menu-toggle");

burgerMenuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    body.classList.toggle("no-scroll");
});