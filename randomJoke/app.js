"use strict";
import { displayData } from "./functions.js";

const url = "https://api.chucknorris.io/jokes/random";
const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const img = document.querySelector(".container img");

btn.addEventListener("click", async () => {
  img.classList.add("chuck");
  const data = await fetch(url);
  const obj = await data.json();
  displayData(obj, content, img);
});
