"use strict";
import presentDrinks from "./presentDrinks.js";
import "./searchForm.js";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=v";

window.addEventListener("DOMContentLoaded", (url) => {
  presentDrinks(URL);
});
