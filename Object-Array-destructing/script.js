"use strict";
console.log("Welcome to Java script learning");

//object destructuring (order is not imp why bcz we have keys for each property)
const person = { name: "siva", age: 18, city: "kadapa" };

console.log(person.name);
console.log(person.age);

//const { city, age, name } = person;
/* const { city: myCity, age, name } = person;

console.log(name);
console.log(age);
console.log(myCity); */

// const { name, ...rest } = person;

// console.log(name);
// console.log(rest);

const { name, marks = 10, ...rest } = person;

console.log(name);
console.log(marks);

console.log(rest);

//Array destructuring (order is imp why bcz there is no keys)

const numbers = [1, 2, 3, 4];

console.log(numbers[0]);
console.log(numbers[3]);

// const [first, second, third] = numbers;
// console.log(first, second, third);

// const [second, first, third] = numbers;
// console.log(first, second, third);

// const [first, , third] = numbers;
// console.log(first, third);

const [first, ...restofNum] = numbers;
console.log(first, restofNum);
