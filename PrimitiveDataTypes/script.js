//NUMBER

let age = 30;
let percentage = 89.67;
console.log(typeof age);
console.log(2 ** 3);
//2**53 -1 is = 9007199254740991
/* let marks = 9007199254740991;
console.log(marks);
++marks;
console.log(marks);
++marks;
console.log(marks); */

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);

console.log(typeof Infinity);

console.log(0 / 0);
console.log("siva" / 10);
console.log("30" / 10); // type conversion js inbuilt

let result = "siva" / 10;
console.log(result);
let result1 = result + 1;
console.log(result1);
console.log(result1 ** 0);
console.log(typeof NaN);

//String BODMAS rule

console.log(typeof "suresh" / 10);
console.log(typeof ("suresh" / 10));

//Built in objects

let mathMarks = 80;
console.log(mathMarks);
let mathMarks1 = Number(90);
console.log(mathMarks1);
console.log(typeof mathMarks);
console.log(typeof mathMarks1);

let socialmarks = new Number(100);
console.log(socialmarks);

//BIGINT This can be used when store more than a safe value

let noOfLikes = 9007199254740994n;
noOfLikes = noOfLikes + 1n;
console.log(typeof noOfLikes);
console.log(noOfLikes);

let noOfLikes1 = BigInt(100);
console.log(noOfLikes1);
console.log(typeof noOfLikes1);
let noOfLikes2 = BigInt("100");
console.log(noOfLikes2);
console.log(typeof noOfLikes2);

let convertBigInt = Number(noOfLikes);
console.log(convertBigInt);

let num1 = "50";
console.log(Number(num1)); //convert string to number
console.log(+num1); // convert string to number

let num2 = 60n;
console.log(typeof num2);
// console.log(typeof +num2);
console.log(Number(num2));

//Boolean

let isBookGood = true;
console.log(typeof isBookGood);

//String

let myName = "sivareddy";
console.log(typeof myName);
let myName1 = String("sivareddy");
console.log(typeof myName1);
let myName2 = new String("sivareddy");
console.log(typeof myName2);
console.log(myName2.toUpperCase()); // Built in methods

//undefined means not defined it will set by js engine

let dabba;
console.log(dabba);
dabba = 100;
console.log(dabba);

let physicsmarks = undefined; // we can not physically set undefined untill unless set by Js engine
console.log(physicsmarks);

//null -  does not point to any object

let marks;
console.log(marks);
marks = 40;
console.log(marks);
marks = null;
console.log(marks);
console.log(typeof marks);

//symbol

let id1 = Symbol("id");
console.log(id1);
console.log(id1.description);

let id2 = Symbol("id");
console.log(id2);
console.log(id2.description);
