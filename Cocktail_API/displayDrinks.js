import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrinks = ({ drinks }) => {
  // select drinks section and title
  const section = get(".section-center");
  const title = get(".title");
  if (!drinks) {
    hideLoading();
    section.innerHTML = null;
    title.textContent = `Sorry! No matches for your search :(`;
    return;
  }
  const newDrinks = drinks
    .map((drink) => {
      const { strDrink: name, strDrinkThumb: image, idDrink: id } = drink;

      return `<a href="./drinks.html">
			<article class="cocktail" data-id="${id}">
			<img src="${image}" alt="${name}" />
			<h3>${name}</h3>
			</article>
			</a>`;
    })
    .join("");
  // hide loading as well.
  hideLoading();
  title.textContent = "";
  section.innerHTML = newDrinks;
  return section;
};
export default displayDrinks;
