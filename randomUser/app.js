"use strict";
import get from "./getElement.js";
import getUser from "./fetchUser.js";
import displayUser from "./displayUser.js";

const btn = get(".btn");

const showUser = async () => {
  // get user from api
  const person = await getUser();
  displayUser(person);
};
btn.addEventListener("click", showUser);
window.addEventListener("DOMContentLoaded", showUser);
