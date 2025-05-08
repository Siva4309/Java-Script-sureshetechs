"use strict";
console.log("Welcome to Java script learning");

const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const incrementBy5 = document.getElementById("incrementBy5");
const decrementBy5 = document.getElementById("decrementBy5");
const result = document.getElementById("result");
const reset = document.getElementById("reset");
console.log(incrementBtn);
let counter = 0;
incrementBtn.addEventListener("click", function (event) {
  console.log("incremnet btn:", event);
  console.log("Increment button clicking");
  counter = counter + 1;
  result.textContent = counter;
});
decrementBtn.addEventListener("click", function () {
  console.log("decrement button clicking");
  if (counter > 0) {
    counter = counter - 1;
  }
  result.textContent = counter;
});
incrementBy5.addEventListener("click", function () {
  console.log("Increment button clicking");
  counter = counter + 5;
  result.textContent = counter;
});
decrementBy5.addEventListener("click", function () {
  console.log("decrement button clicking");
  if (counter > 4) {
    counter = counter - 5;
  }
  result.textContent = counter;
});

reset.addEventListener("click", function () {
  counter = 0;
  result.textContent = counter;
});

console.log("Flow is continining....");
