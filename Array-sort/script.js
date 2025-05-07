"use strict";
console.log("Welcome to Java script learning");
// const marks = [10, 60, 22, 54, 80];
// console.log(marks);
// marks.sort();

// console.log(marks);

// const fruits = ["banana", "apple", "cherry", "mango"];

// fruits.sort();

// console.log(fruits);

const marks = [10, 110, 60, 22, 54, 80];

/* Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, UTF-16 code unit order. */

// marks.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return 1;
//   }
// });

marks.sort((a, b) => a - b);
console.log(marks);

marks.sort((a, b) => b - a);
console.log(marks);

const students = [
  { name: "Alice", grade: 25 },
  { name: "Bob", grade: 15 },
  { name: "Charlie", grade: 30 },
];

students.sort((student1, student2) => student1.grade - student2.grade);

console.log(students);
