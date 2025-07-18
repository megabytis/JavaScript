"use strict";

///////////////////////////////////////
// Modal window

const header = document.querySelector(".header");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const allSections = document.querySelectorAll(".section");
const allButtons = document.getElementsByTagName("button");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// creating & inserting elements
const messege = document.createElement("div");
messege.classList.add("cookie-message");
messege.innerHTML =
  "Hey this website uses cookies for better improvement & functionality <button class='btn btn--close-cookie' > OK </button>";

// header.prepend(messege); // it will plaece the messege div at the top of the page
header.append(messege); // it will plaece the messege div at the end of the page
// so after typing both, it won't create 2 copies of it 🤣, rather it will place the div at bottom, cuz, 'append' been called lastly :)

// header.prepend(messege.cloneNode(true)); // it will create clones of the div :), i.e. top & bottom, on both side it'll now be availabe

// Deleting elements
document.querySelector(".btn--close-cookie").addEventListener("click", (e) => {
  // messege.remove();
  // ------or-----
  messege.parentElement.removeChild(messege);
});

// styles
messege.style.backgroundColor = "rgb(55,56,61";
messege.style.width = "120%";

// // logging any element's property's value
// console.log(messege.style.height);
// console.log(messege.style.backgroundColor);

// more effective way to log element's property's value
console.log(getComputedStyle(messege).color);
console.log(getComputedStyle(messege).height);
