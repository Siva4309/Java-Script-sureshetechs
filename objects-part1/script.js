// Class using creating objects
class Student {
  static COLLEGE_NAME = "NBKRIST";
  constructor(name, phone, address) {
    this.name = name;
    this.phone = phone;
    this.address = address;
  }
}

let student1 = new Student("siva", 7702604648, "kadapa");
console.log(student1);
//Empty object creation ways
let obj = new Object();
console.log(obj);

let emptyObj = {}; // This is more fast and efficient
console.log(emptyObj);

//Object literals
let student = {
  name: "siva",
  phone: 7702604648,
  address: "kadapa",
  gender: "male",
};

console.log(student);
console.log(`${student.name} is from ${student.address}`);

student.phone = 9848262063;

console.log(student.phone);

student.collegeName = "NBKR";

console.log(student);

delete student.gender;

console.log(student);

let fullname = "sivareddy";
console.log(fullname.toUpperCase());
console.log(fullname.length);

/* The above console.log will execute like below internall java script will create like and provide the output for us this is called as AutoBoxing
let temp = new String('sivareddy');
console.log(temp.length);
temp = null */
