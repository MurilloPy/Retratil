const Hamburger = document.querySelector(".hamburger");
const Menu = document.querySelector(".menu");

Hamburger.addEventListener("click", () => {

    Hamburger.classList.toggle("open");
    Menu.classList.toggle("show-menu");

}); 