"use strict";
console.log("Welcome to Java script learning");

const numbers = [10, 20, 30, 40, 50];

/* for (let i = 0; i < numbers.length; i++) {
  // console.log(numbers[i]);
  if (numbers[i] > 25) {
    console.log(numbers[i]);
    break;
  }
} */

const num = numbers.find(function (value) {
  return value > 25; //true
});
console.log(num);

const position = numbers.findIndex(function (value) {
  return value > 25;
});

console.log(position);

const marks = [70, 25, 45, 40, 80];

const result = marks.some(function (value) {
  return value > 35;
});

console.log(result);

const allPass = marks.every(function (value) {
  return value > 35;
});

console.log(allPass);
