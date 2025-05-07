function greet(name) {
  console.log(`Hello, ${name}`);
}

greet("siva");

// function add() {
//   console.log(arguments);
// }

//rest operator
function add(a, b, c, ...restoftheparameters) {
  console.log(restoftheparameters);

  return a + b + c;
}

const result = add(10, 20, 30, 40, 50, 60);
console.log("add:", result);

let username = "sivareddy";
let marks = 100;

//function expression
let multiplication = function (a, b, greetFun) {
  greetFun(`I am multiplying these number: ${a},${b}`);
  return a * b;
};

// we can pass function as arguments for a function
console.log(multiplication(5, 6, greet));

// function does not have a name called a anonymous funtion
console.log(
  multiplication(5, 6, function (msg) {
    console.log("Iam calling fun");
    console.log(msg);
  })
);

function myDetails() {
  // function myFunction() {
  //   console.log("myFunction");
  //   return 100;
  // }
  // return {
  //   name: "suresh",
  // };

  return function () {
    console.log("myFunction");
    return 100;
  };
}

const myresult = myDetails();

console.log(myresult);
console.log(myresult());

function simpleGa() {
  console.log("javascript is very simple");
}
simpleGa.description = "This function is used to teach functions";
console.log(typeof simpleGa);
console.log(simpleGa instanceof Function);
console.log(simpleGa.description);
console.log(simpleGa.name);
console.log(simpleGa.length);
