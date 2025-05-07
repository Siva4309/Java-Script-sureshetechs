"use strict";
console.log("Welcome to Java script learning");
const gifts = [
  "₹100 Cash",
  "Toy Car",
  "Chocolate Box",
  "₹500 Cash",
  "Smartphone Cover",
  "Book",
  "HeadPhones",
  "₹50 Cash",
  "Gift Voucher",
  "Watch",
  "Teddy Bear",
  "Blueetoth speaker",
  "Movie Ticke",
  "₹200 Cash",
  "Puzzle Game",
  "Perfume",
  "sunglasses",
  "₹1000 Cash",
  "Board Game",
  "Fitness Band",
  "Digital Clock",
  "Lamp",
  "Shopping Voucher",
  "Laptop bag",
  "Wireless Mouse",
  "Travel mug",
  "Note book",
  "Gaming Mousepad",
  "₹250 Cash",
  "Key chain",
  "Water Bottle",
  "Portable Charger",
  "Action Figure",
  "₹300 Cash",
  "Travel Pillow",
  "Mini BackPack",
  "Personalise Mug",
  "Gaming Controller",
  "Camera Strap",
  "Toy Robot",
  "₹700 Cash",
  "Sports Equipment",
  "Pen set",
  "Bluettoth Earbuds",
  "Digital photo frame",
  "Wallet",
  "BAckPAck",
  "Gift HAmper",
  "₹800 Cash",
  "₹600 Cash",
];

gifts.forEach(function (value) {
  console.log(value);
});

const result = gifts.map(function (value) {
  return value.toUpperCase();
});
console.log(gifts);
console.log(result);

const studentmarks = [89, 79, 45, 37, 76, 87, 45];
let totalsum = 0;
studentmarks.forEach(function (marks) {
  totalsum = totalsum + marks;
});

console.log(totalsum);

const totalMarks = studentmarks.reduce(function (totalsum, curr, i) {
  console.log(totalsum, curr, i);
  return totalsum + curr;
}, 0);

console.log(totalMarks);

const finalGifts = gifts.reduce(function (updatedArr, curr, i) {
  console.log(updatedArr, curr, i);
  updatedArr.push(curr);
  return updatedArr;
}, []);

console.log(finalGifts);

const finalGiftsObjects = gifts.reduce(function (updatedObj, curr, i) {
  console.log(updatedObj, curr, i);
  updatedObj[i] = curr;
  return updatedObj;
}, {});

console.log(finalGiftsObjects);
