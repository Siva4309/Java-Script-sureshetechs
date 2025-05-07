"use strict";
console.log("Welcome to Java script learning");
const pickNumberBtn = document.getElementById("pickNumberBtn");
const result = document.getElementById("result");
const lotterySheetContainer = document.getElementById("lotterySheetContainer");
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
console.log(gifts);
pickNumberBtn.addEventListener("click", function () {
  let randomNum = Math.random() * 50;
  let drawnNumber = Math.floor(randomNum) + 1;
  console.log(gifts[drawnNumber - 1]);
  result.textContent = `You have got ${drawnNumber}, and you won ${
    gifts[drawnNumber - 1]
  }`;
});

gifts.forEach(function (value, i) {
  const boxElement = `<div class="box">${i + 1}. ${value}</div>`;
  console.log(boxElement);
  lotterySheetContainer.insertAdjacentHTML("beforeend", boxElement);
});
