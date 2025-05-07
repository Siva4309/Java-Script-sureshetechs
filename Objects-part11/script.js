"use strict";
console.log("Welcome to Java script learning");
let student = {
  name: "siva",
  phone: 7702604648,
  address: "Andhra pradesh",
};

console.log(student);

if (student.hasOwnProperty("phone")) {
  console.log("property exists");
} else {
  console.log("property does not exist");
}

const student1 = Object.create(student);

console.log(student1);
//This will check only current object
console.log(student1.hasOwnProperty("name"));
// This will  check in entire prototype chain
console.log("name" in student1);
console.log("marks" in student1);
