"use strict";
const btn = document.querySelector(".btn");
const closeBtn = document.querySelector("button.close-btn");
const modal = document.querySelector("div.modal-overlay");

// console.log(modal.classList);

btn.addEventListener("click", function () {
  modal.classList.toggle("show-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.toggle("show-modal");
});
