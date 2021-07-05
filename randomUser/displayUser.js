import get from "./getElement.js";

const userImg = get(".user-img");
const userTitle = get(".user-title");
const userValue = get(".user-value");
const btns = [...document.querySelectorAll(".icon")];

const removeActive = () => {
  btns.forEach((btn) => {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
    }
  });
};
const displayUser = (person) => {
  userImg.src = person.image;
  userTitle.textContent = `My name is`;
  userValue.textContent = person.name;
  removeActive();
  btns[0].classList.add("active");
  btns.forEach((btn) => {
    const label = btn.dataset.label;
    btn.addEventListener("click", () => {
      userTitle.textContent = `My ${label} is`;
      userValue.textContent = person[label];
      removeActive();
      btn.classList.add("active");
    });
  });
};

export default displayUser;
