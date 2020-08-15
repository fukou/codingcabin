//  mobile navigation
const buttonOpen = document.querySelector(".nav__inner--mobile button");
const buttonClose = document.querySelector(".close-btn");
const wrapper = document.querySelector(".wrapper__mobile");

buttonOpen.addEventListener("click", function (e) {
  wrapper.classList.add("is-shown");
  this.setAttribute("aria-expanded", "true");
  document.body.setAttribute("aria-hidden", "true");

  e.preventDefault();
});

buttonClose.addEventListener("click", function (e) {
  wrapper.classList.remove("is-shown");
  buttonOpen.setAttribute("aria-expanded", "false");
  document.body.setAttribute("aria-hidden", "false");
  e.preventDefault();
});

// active state link
const currentLink = location.pathname;
const navLink = document.querySelectorAll(".nav__inner--links ul li a");
navLink.forEach(function (item, idx) {
  if (item.getAttribute("href") === currentLink) {
    item.parentElement.classList.add("active");
  }
});

// dark mode
const btn_dark = document.querySelector(".btn-dark a");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
}

btn_dark.addEventListener("click", function (e) {
  e.preventDefault();
  this.classList.toggle("dark-actived");

  document.body.classList.toggle("dark-theme");

  let theme = "light";
  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
  }

  localStorage.setItem("theme", theme);
});
