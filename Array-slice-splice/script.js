"use strict";
console.log("Welcome to Java script learning");

const fruits = ["apple", "banana", "cherry", "mango"];

const newFruits = fruits.slice(1, 3);
console.log(newFruits);

const newFruits1 = fruits.slice(1);
console.log(newFruits1);

const newFruits2 = fruits.slice();
console.log(newFruits2);

const newFruits3 = fruits.slice(-2);
console.log(newFruits3);

const newFruits4 = fruits.slice(-3, -2);
console.log(newFruits4);

const fruits2 = ["apple", "banana", "cherry", "mango"];
// const removed = fruits2.splice(1, 2, "grapes", "orange", "pineapple");
const removed = fruits2.splice(1, 0, "grapes", "orange", "pineapple");
console.log(removed);
console.log(fruits2);
