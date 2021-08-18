import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrinks from "./setDrinks.js";

const presentDrinks = async (url) => {
  // fetch drinks
  const drinksObj = await fetchDrinks(url);
  // then display drinks
  const section = await displayDrinks(drinksObj);
  if (section) {
    setDrinks(section);
  }
};
export default presentDrinks;
