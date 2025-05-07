"use strict";
console.log("Welcome to Java script learning");
const pickNumberBtn = document.getElementById("pickNumberBtn");
const result = document.getElementById("result");
const lotterySheetContainer = document.getElementById("lotterySheetContainer");
const tick = new Audio("tap.wav");
const complete = new Audio("complete.wav");
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
  for (let i = 1; i <= 50; i++) {
    document.getElementById(i).classList.remove("winningBox");
  }
  result.textContent = "Please wait ...";
  // setTimeout(function () {
  //   let randomNum = Math.random() * 50;
  //   let drawnNumber = Math.floor(randomNum) + 1;
  //   result.textContent = `You have got ${drawnNumber}, and you won ${
  //     gifts[drawnNumber - 1]
  //   }`;
  //   document.getElementById(drawnNumber).classList.add("winningBox");
  // }, 5000);
  let secondsCounter = 0;
  const intervelId = setInterval(function () {
    tick.pause();
    tick.currentTime = 0;
    tick.play();
    secondsCounter++;
    const randomBox = Math.floor(Math.random() * 50) + 1;
    for (let i = 1; i <= 50; i++) {
      if (i === randomBox) {
        document.getElementById(i).classList.add("highlightedBox");
      } else {
        document.getElementById(i).classList.remove("highlightedBox");
      }
    }
    if (secondsCounter === 5) {
      let randomNum = Math.random() * 50;
      let drawnNumber = Math.floor(randomNum) + 1;
      result.textContent = `You have got ${drawnNumber}, and you won ${
        gifts[drawnNumber - 1]
      }`;
      document.getElementById(randomBox).classList.remove("highlightedBox");
      document.getElementById(drawnNumber).classList.add("winningBox");
      complete.pause();
      complete.currentTime = 0;
      complete.play();
      clearInterval(intervelId);
    }
  }, 1000);
});

gifts.forEach(function (value, i) {
  const boxElement = `<div class="box" id=${i + 1}>${i + 1}. ${value}</div>`;
  console.log(boxElement);
  lotterySheetContainer.insertAdjacentHTML("beforeend", boxElement);
});
