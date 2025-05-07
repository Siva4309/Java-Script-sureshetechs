console.log("Welcome to Objects Practise");
//Task-1
let dhoni = {
  name: "Mahendra sing dhoni",
  age: 42,
  isCaptionCool: true,
  teams: ["india", "CSK"],
  stats: {
    matches: 538,
    runs: 17266,
    centuries: 16,
  },
  retire: function () {
    return `${this.name} retired from internatioin cricket in 2020`;
  },
};
console.log(dhoni.name);
console.log(dhoni.stats.runs);
console.log(dhoni.teams[0]);
console.log(dhoni.retire());

//Task-2
let calculator = {
  add: function (a, b) {
    return a + b;
  },
  substract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

console.log(calculator.add(5, 3));
console.log(calculator.substract(10, 3));
console.log(calculator.multiply(3, 7));

//Task-3
const library = {
  name: "siva library",
  books: [],
  totalBooks: 0,
  addBook: function (title) {
    this.books.push(title);
    this.totalBooks++;
  },
};

library.addBook("Pythom 11 hours");
library.addBook("C Ptrogramming 18 hours");
library.addBook("Java scripst 25 hours");

console.log(library.books);
console.log(library.totalBooks);
