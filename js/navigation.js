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
