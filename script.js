const body = document.querySelector("body");
const mobileNav = document.querySelector(".nav-links");
const burgerMenuBtn = document.querySelector(".menu-toggle");
const sections = document.querySelectorAll("section");
const headerLinks = document.querySelectorAll(".header-links a");

burgerMenuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    body.classList.toggle("no-scroll");
});

headerLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        body.classList.remove("no-scroll");
        mobileNav.classList.remove("active");

        const targetId = link.getAttribute('href').substring(1);

        sections.forEach(section => {
            if(section.id === targetId) {
                section.scrollIntoView({behavior: "smooth"});
            }
        });
    });
});