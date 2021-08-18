import get from "./getElement.js";

const loadingGif = get(".loading");
const section = document.querySelector(".section-center");
const title = document.querySelector(".title");

export const showLoading = () => {
  loadingGif.classList.remove("hide-loading");
  if (section) {
    section.innerHTML = null;
  }
  if (title) {
    title.textContent = "";
  }
};
export const hideLoading = () => {
  loadingGif.classList.add("hide-loading");
};
