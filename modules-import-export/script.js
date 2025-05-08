//import { add as sum, subtract as minus } from "./math.js"; //named export
//import greet from "./message.js"; // default export
import message from "./message.js";
import * as operations from "./math.js";

// const addition = add(10, 20);
// console.log(addition);
// console.log(subtract(50, 20));
// console.log(greet("siva reddy"));

// const addition = sum(10, 20);
// console.log(addition);
// console.log(minus(50, 20));
// console.log(message("siva reddy"));

const addition = operations.add(10, 20);
console.log(addition);
console.log(operations.subtract(50, 20));
console.log(message("siva reddy"));
