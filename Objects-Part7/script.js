console.log("Welcome to object keys Example");

const user = {
  name: "siva",
  age: 32,
  country: "india",
};

const keys = Object.keys(user);
console.log(keys);

const values = Object.values(user);
console.log(values);
const entries = Object.entries(user);

console.log(entries);
