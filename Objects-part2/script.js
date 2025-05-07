alert("welcome to part2 of objects");

let fullName = "sivareddy";
console.log("Ela unnaru babu");
// This is the Function in js
function wish() {
  console.log(this);
  console.log("Happy BirthDay");
  console.log("Bada chaduvko");
}
wish();

let student = {
  name: fullName,
  phone: 7702604648,
  address: "kadapa",
  // This is the Method in js
  wish: function () {
    console.log("This from inside function of the object:", this);
    console.log(`Happy BirthDay ${this.name}`);
    console.log("Bada chaduvko");
  },
};

student.wish();

alert(JSON.stringify(student));

let patient = {
  height: 162,
  weight: 62,
  "full name": "sivareddy",
};

console.log(patient);
//Here we can not use . notation to access object key in these cases we need to use [] to access keys
console.log(patient["full name"]);

const funObject = {
  1: "siva",
  2: undefined,
  3: "Chandra kala",
  4: "Varshitha",
  null: 100,
  undefined: "urike",
  true: "edi kuda",
  false: "saradaga",
  for: "hi",
  50: "fifty fifty",
};

console.log(funObject);

const key = prompt("Enter whick key you want? name or age");
console.log(key);

const person = {
  name: "Alice",
  age: 25,
};

console.log(person[key]);

const name = "Dhoni";
const age = 42;
const role = "player";

/* const player = {
  name: name,
  age: age,
  role: role,
}; */ // we can avoid reduancy
// We can write object when have same key value pair we can write like as  short hand like below
const player = {
  name,
  age,
  role,
  play() {
    console.log(`${this.name} is palying as a ${this.role}`);
  },
};

console.log(player);
console.log(player.play());
