"use strict";
function getlement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `The "${selection}" is not a valid selector! Please enter again.`
  );
}

class Counter {
  constructor(element, value) {
    // console.log(element, value);
    this.counter = element;
    this.value = value;
    // change counter value in DOM...
    this.valueDOM = element.querySelector(".count");
    this.valueDOM.textContent = value;
    // select buttons
    this.resetBtn = element.querySelector(".reset");
    this.incrementBtn = element.querySelector(".increment");
    this.decrementBtn = element.querySelector(".decrement");
    // bind functions to this.
    this.increment = this.increment.bind(this);
    this.reset = this.reset.bind(this);
    this.decrement = this.decrement.bind(this);
    // add event listeners
    this.incrementBtn.addEventListener("click", this.increment);
    this.decrementBtn.addEventListener("click", this.decrement);
    this.resetBtn.addEventListener("click", this.reset);
  }
  increment() {
    this.value++;
    this.valueDOM.textContent = this.value;
  }
  decrement() {
    this.value--;
    this.valueDOM.textContent = this.value;
  }
  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }
}

const firstCounter = new Counter(getlement(".first-counter"), 200);
const secondCounter = new Counter(getlement(".second-counter"), 100);
