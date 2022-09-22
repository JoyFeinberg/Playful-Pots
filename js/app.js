const hamburgerButton = document.getElementById('menu-hamburger');
console.log(hamburgerButton)
const closeButton = document.getElementById("menu-close");
const menu = document.querySelector(".menu");

function showMenu() {
  menu.classList.add("menu-open");
}

hamburgerButton.addEventListener("click", showMenu);

function hideMenu() {
  menu.classList.remove("menu-open")
}

closeButton.addEventListener("click", hideMenu);
