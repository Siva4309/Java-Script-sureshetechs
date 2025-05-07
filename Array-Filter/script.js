"use strict";
console.log("Welcome to Java script learning");

const marks = [80, 55, 70, 65, 96, 60];

const result = marks.filter((value) => value > 65);
console.log(marks);

console.log(result);

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((value) => value % 2 === 0);

console.log(evenNumbers);

const words = ["apple", "bat", "cat", "elephant"];

const result1 = words.filter((word) => word.length > 3);

console.log(result1);

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 30 },
];

const newData = users.filter((user) => user.age > 18);
console.log(newData);
