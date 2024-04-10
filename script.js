function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const modeSwitch = document.getElementById("mode-switch");
const body = document.body;

modeSwitch.addEventListener("change", () => {
  body.classList.toggle("dark-mode");
});