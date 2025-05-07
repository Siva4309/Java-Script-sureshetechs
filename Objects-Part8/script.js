"use strict";
const student = {
  name: "siva",
  phone: 7702604648,
  address: "india",
};

console.log(student);

console.log(Object.getOwnPropertyDescriptor(student, "name"));

// console.log(Object.getOwnPropertyDescriptors(student));

console.log(Object.keys(student));
student.name = "siva reddy";
console.log(student.name);

Object.defineProperty(student, "name", {
  enumerable: false,
  writable: false,
  configurable: false,
});

// student.name = "chandu";
// console.log(Object.keys(student));

delete student.name;
console.log(student.name);
