import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displaySingle = (data) => {
  // extract data from API response
  const drink = data.drinks[0];
  console.log(drink);
  const {
    strDrink: name,
    strDrinkThumb: drinkImg,
    strInstructions: desc,
    strCategory: type,
  } = drink;
  let list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
    drink.strIngredient6,
    drink.strIngredient7,
    drink.strIngredient8,
    drink.strIngredient9,
    drink.strIngredient10,
  ];

  // some other works
  const imgContainer = get(".img-container");
  const btn = get(".btn");
  imgContainer.classList.remove("hide");
  btn.classList.remove("hide");

  // select DOM elements
  const img = get(".img-container img");
  const heading = get(".drink-head");
  const drinkDesc = get(".drink-desc");
  const drinkType = get(".type");
  const drinkIngredients = get(".drink-ingredients");

  hideLoading();
  // display
  document.title = name;
  img.src = drinkImg;
  heading.textContent = name;
  drinkDesc.textContent = desc;
  drinkType.textContent = type;
  list = list.filter((item) => {
    return item !== null && item !== "";
  });

  const Ingredientlist = list
    .map((item) => {
      return `<li><i class="far fa-check-square"></i>${item}</li>`;
    })
    .join("");
  drinkIngredients.innerHTML = Ingredientlist;
};
export default displaySingle;
