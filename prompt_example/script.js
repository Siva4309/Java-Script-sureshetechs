let userName = prompt("what is your name?");
console.log(`Welcome, ${userName}. Please sit here`);

// let alertmsg = alert("welcome to super siva youtube channel");

// console.log(alertmsg);

let height = Number(prompt("Please enter your height (cm)"));
let weight = Number(prompt("Please enter your weigh (kg)"));

// let heightinMt = Number(height) / 100;
// console.log("Height in Meters", heightinMt);
// let weightinNumber = Number(weight);
// console.log("Height in Meters", heightinMt);
console.log(height);
console.log(weight);

let heightinMeters = height / 100;

let bmi = Number((weight / heightinMeters ** 2).toFixed(2));

console.log("bmi:", bmi);

/* if (bmi < 18.5) {
  console.log("Thin");
} else if (bmi > 25) {
  console.log("Fat");
} else {
  console.log("Normal");
} */

bmi < 18.5
  ? console.log("Thin")
  : bmi > 25
  ? console.log("Fat")
  : console.log("Normal");
