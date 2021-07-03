export const displayData = function ({ value: joke }, element, img) {
  element.innerHTML = joke;
  const time = Math.random() * 1000;
  setTimeout(function removeClass() {
    img.classList.remove("chuck");
  }, time);
};
