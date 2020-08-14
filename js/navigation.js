//  mobile navigation
const buttonOpen = document.querySelector(".nav__inner--mobile button");
const buttonClose = document.querySelector(".close-btn");
const wrapper = document.querySelector(".wrapper__mobile");

buttonOpen.addEventListener("click", function (e) {
  wrapper.classList.add("is-shown");
  this.setAttribute("aria-expanded", "true");

  e.preventDefault();
});

buttonClose.addEventListener("click", function (e) {
  wrapper.classList.remove("is-shown");
  buttonOpen.setAttribute("aria-expanded", "false");
  e.preventDefault();
});

// disable the links to be highlighted by keyboard users
const linkSlideshow = document.querySelectorAll(".grid-slideshow__desc a");
linkSlideshow.forEach(function (item, idx) {
  item.setAttribute("tabindex", "-1");
  item.setAttribute("aria-hidden", "true");
});
