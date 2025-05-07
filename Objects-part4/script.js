console.log("Welcome to object.assign and spread operator");

let student = {
  name: "siva",
  phone: 7702604648,
  address: "kadapa",
};

console.log("student:", student);
// This will copy the object refence of student to student1
let student1 = student;
console.log("student1:", student1);

//This will copy the entire object of student into studnet1
let student2 = Object.assign({}, student);

console.log("studnet2:", student2);

student1.name = "john jigiri";

console.log(student1.name);
console.log(student.name);
console.log(student2.name);

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

const target = { a: 1 };
Object.assign(target, { b: 2 }, { c: 3 });
console.log(target);

let student4 = {
  name: "siva",
  phone: 9848262063,
  address: "kadapa",
};

console.log("student4:", student4);

let student5 = { ...student4 };

console.log("student5:", student5);
