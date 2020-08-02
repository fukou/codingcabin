const buttonOpen = document.querySelector(".nav__inner--mobile button");
const buttonClose = document.querySelector(".close-btn");
const wrapper = document.querySelector(".wrapper__mobile");

buttonOpen.addEventListener("click", () => {
  wrapper.classList.add("is-shown");
});

buttonClose.addEventListener("click", () => {
  wrapper.classList.remove("is-shown");
});
