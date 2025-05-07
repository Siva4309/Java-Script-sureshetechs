"use strict";
console.log("Welcome to Java script learning");
let student = {
  name: "siva",
  phone: 7702604648,
  address: "Andhra Pradesh",
};

console.log(student);

const animal = {
  eats: true,
  walk() {
    console.log("Animal walks.");
  },
};

const dog = {
  barks: true,
};

console.log(dog);
console.log(dog.eats);
// dog.__proto__ = animal;
Object.setPrototypeOf(dog, animal);
//console.log(dog.__proto__);
console.log(Object.getPrototypeOf(dog));

console.log(dog);
console.log(dog.eats);

const animalDetails = Object.create(animal);

console.log(animalDetails);

const grandparent = { surname: "yarragudi" };
const parent = Object.create(grandparent);
parent.firstname = "sivareddy";

const child = Object.create(parent);
child.age = 10;

console.log(child);

console.log(child.surname);
console.log(child.firstname);
console.log(child.age);

const emptyobject = Object.create(null);
console.log(emptyobject);
