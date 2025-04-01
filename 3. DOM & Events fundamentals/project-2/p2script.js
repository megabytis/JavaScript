"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const hidden = document.querySelector(".hidden");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

btnCloseModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
