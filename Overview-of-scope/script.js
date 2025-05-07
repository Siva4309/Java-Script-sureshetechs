let username = "siva";
let password = "1234";

{
  var a = 10;
  var b = 20;
  console.log(a + b);
  console.log(username);
}
console.log(a, b);

isValidUser();
function isValidUser() {
  console.log("inside function", a, b);
  var isAdmin = false;
  if (username === "siva" && password === "12345") {
    console.log("valid user");
  } else {
    console.log("wrong Credentials");
  }
}
//console.log(isAdmin); //var is a function scoped
