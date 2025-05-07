"use strict";
console.log("Welcome to Java script learning");

let fruits = ["apple", "banana"];
console.log(fruits);
//push
fruits.push("oranges", "grapes");
console.log(fruits);
//pop
const removed = fruits.pop();
console.log(removed);
console.log(fruits);

//shift
const first = fruits.shift();
console.log(first);
console.log(fruits);

//unshift

fruits.unshift("dragon", "apple", 1, "apples");
console.log(fruits);
