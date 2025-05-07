"use strict";
console.log("Welcome to Java script learning");

//function declaration
function addDeclaration(a, b) {
  return a + b;
}

//function expression
const addExpression = function (a, b) {
  return a + b;
};

//arrow function

// const addArrowFunction = (a, b) => {
//   console.log(a, b);

//   return a + b;
// };
const addArrowFunction = (a, b) => a + b;

console.log(addArrowFunction(5, 6));

// function greet(name) {
//   return `Hello ${name}`;
// }

const greet = (name) => `Hello ${name}`;

console.log(greet("sivareddy"));

const myObject = {
  value: 42,
  regularFunction: function () {
    console.log(this); // this refer the object scope
    console.log("Regularfuncton", this.value);
  },
  arrowFunction: () => {
    console.log(this); // this refer a global scope
    console.log("arrowFunction", this.value);
  },
};

myObject.regularFunction();
myObject.arrowFunction();
