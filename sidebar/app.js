"use strict";
const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector("aside");

// console.log(sidebar.classList);
toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("sidebar-toggle");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("sidebar-toggle");
});
