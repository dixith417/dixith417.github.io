// hex color generator, first app :)
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const size = hex.length;
const btn = document.querySelector(".btn");
// Random generator function
function getRandom() {
  return (random = Math.floor(Math.random() * size));
}
// eventlistener for click
btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; ++i) {
    let r = getRandom();
    hexColor += hex[r];
  }
  // console.log(hexColor);
  document.body.style.backgroundColor = hexColor;
  const place = document.querySelector(".color");
  place.textContent = hexColor;
});
