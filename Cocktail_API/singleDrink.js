import fetchDrinks from "./fetchDrinks.js";
import displaySingle from "./displaySingle.js";

const presentDrink = async () => {
  const id = localStorage.getItem("drink");
  if (!id) {
    window.location.replace("index.html");
  } else {
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const data = await fetchDrinks(URL);
    displaySingle(data);
  }
};

window.addEventListener("DOMContentLoaded", presentDrink);
