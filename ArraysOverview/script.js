"use strict";
console.log("Welcome to Java script learning");

//const friends = ["hareesh", "naressh", "aravind", 1, true];

// console.log(typeof friends);
// console.log(friends);
// console.log(friends[0]);
// console.log(friends[4]);
// console.log(friends[friends.length - 1]);
// console.log(friends.at(1));
// console.log(friends.at(-1));
// console.log(friends.at(-2));

// friends[0] = "siva";
// console.log(friends);
// friends.name = "myname";
// console.log(friends);
// frineds[10] = "myname";
// console.log(friends);

const friends = ["hareesh", "naressh", "aravind"];
// const friends2 = friends;

// friends2[0] = "john jigiri";
// console.log(friends);
// console.log(friends2);

const friends3 = [...friends];
friends3[0] = "john jigiri";
console.log(friends);
console.log(friends3);

//Array Constructor

const data = new Array(10, 20, 30);
console.log(data);

//Array of

const data1 = Array.of(10, "suresh", "naresh");
console.log(data1);

//spare Array

const students = ["john", "suresh", , , 1];
console.log(students);
