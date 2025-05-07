console.log("Welcome to copy by value and copy by reference");

let student = {
  name: "siva",
  phone: 7702604648,
  address: "kadapa",
};

console.log(student);

let student1 = student;

console.log("studnet1:", student1);

student1.name = "john jigiri";

console.log(student1.name);
console.log(student.name);

let a = 10;
let b = 10;

console.log(a === b);

let obj1 = {
  name: "john jigiri",
};

let obj2 = {
  name: "john jigiri",
};

console.log(obj1 === obj2);

let obj3 = obj1;

console.log(obj3 === obj1);
