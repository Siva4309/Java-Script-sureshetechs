let sureshAge, hareshAge, nareshAge;
let currentTotalAge = 0;
//function expression

/* let thankYouMsg = function () {
  console.log("Thank you for answering");
  console.log("Please subscribe to our channel");
}; */

sureshAge = +prompt("suresh , what is your age");

thankYouMsg("suresh", sureshAge);

hareshAge = +prompt("Hareesh , what is your age");
thankYouMsg("hareesh", hareshAge);

nareshAge = +prompt("naresh , what is your age");
thankYouMsg("naresh", nareshAge);

// function declaration
function thankYouMsg(name, age) {
  console.log(`${name} age is : ${age || "Not Entered"}`);
  currentTotalAge += age;
  if (age > 18) {
    console.log(`${name} , you will get driving license`);
  } else {
    console.log(
      `${name}, you need to wait for ${
        18 - age
      } more years to get driving license`
    );
  }
  console.log(`current total age is ${currentTotalAge}`);

  console.log("Thank you for answering");
  console.log("Please subscribe to our channel");
  21;
}
console.log(`Total age is ${currentTotalAge}`);
