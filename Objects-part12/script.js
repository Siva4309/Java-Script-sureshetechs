"use strict";
console.log("Welcome to Java script learning");
let student = {
  name: "siva",
  phone: 7702604648,
  address: "Andhra pradesh",
};

let student1 = Object.create(student);
student1.marks = 50;
console.log(student1);

console.log(Object.keys(student));
console.log(Object.keys(student1));

console.log(Object.values(student));
console.log(Object.values(student1));

for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}

console.log("key values from student1");

for (let key in student1) {
  console.log(`${key}: ${student1[key]}`);
}
console.log("key values from student1 own propertyes");
for (let key in student1) {
  if (student1.hasOwnProperty(key)) {
    console.log(`${key}: ${student1[key]}`);
  }
}

const sivaobj = {
  name: "siva reddy",
  "channel name": "siva techs",
  1: "hareesh",
  4: "swami",
  3: "vishnu",
  50: "fifty fity",
};
console.log(Object.keys(sivaobj));
for (let key in sivaobj) {
  console.log(`${key}: ${sivaobj[key]}`);
}
