const buttonOpen = document.querySelector(".nav__inner--mobile button");
const buttonClose = document.querySelector(".close-btn");
const wrapper = document.querySelector(".wrapper__mobile");

buttonOpen.addEventListener("click", (e) => {
  wrapper.classList.add("is-shown");

  e.preventDefault();
});

buttonClose.addEventListener("click", (e) => {
  wrapper.classList.remove("is-shown");

  e.preventDefault();
});
