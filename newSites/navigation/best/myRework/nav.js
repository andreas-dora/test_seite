const navbarToggler = document.querySelector(".nav__btn");
const navbarMenu = document.querySelector(".navbar ul");
const navbarLinks = document.querySelectorAll(".navbar a");

navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
  navbarToggler.classList.toggle("open.nav__btn");
  navbarMenu.classList.toggle("open");
}

navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick() {
  if(navbarMenu.classList.contains("open")) {
    navbarToggler.click();
  }
}
