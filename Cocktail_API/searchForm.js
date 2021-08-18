import presentDrinks from "./presentDrinks.js";
import get from "./getElement.js";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const form = get(".search-form");
const input = get("input[name='drink']");

form.addEventListener("keyup", function (e) {
  e.preventDefault();
  const value = input.value;
  if (!value) {
    presentDrinks(baseURL + "a");
    return;
  }
  presentDrinks(`${baseURL}${value}`);
});
