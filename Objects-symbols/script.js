"use strict";
console.log("Welcome to Java script learning");

const name1 = "siva";
const name2 = "siva";

console.log(name1 === name2);

const sym1 = Symbol("siva");
console.log(sym1);

const sym2 = Symbol("siva");

console.log(sym2);
console.log(sym1 === sym2);

const obj = {
  fullname: name1,
  [sym1]: "value1",
  [sym2]: "value2",
};

console.log(obj);
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyDescriptor(obj, sym1));
console.log(Object.getOwnPropertySymbols(obj));
console.log(Reflect.ownKeys(obj));
