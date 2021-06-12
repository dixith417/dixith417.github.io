"use strict";
const btn = document.querySelector(".nav-center button");
const list = document.querySelector(".list");

btn.addEventListener("click", function () {
  list.classList.toggle("show-list");
  btn.classList.toggle("btn-toggle");
});
