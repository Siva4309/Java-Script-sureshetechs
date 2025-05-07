console.log("Welcome to Deep copying");

let student = {
  name: "sivareddy",
  phone: 7702604648,
  address: {
    city: "Khajipeta",
    district: "Kadapa",
  },
  wish: function () {
    console.log(`Happy BirthDay ${this.name}`);
    console.log("Bada chaduvko");
  },
};

console.log("student:", student);

let student1 = { ...student };

console.log("student1", student1);

student1.name = "john jigiri";

console.log(student.name);
console.log(student1.name);

student1.address.city = "kamalapuram";

console.log(student.address.city);
console.log(student1.address.city);

let student2 = structuredClone(student);
