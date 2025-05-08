"use strict";
import { appTitle } from "./app.js";
const title = document.getElementById("title");
console.log(title);
title.textContent = "Nanu Java script nerchukuntunnau".toUpperCase();
// title.textContent = "నేను జవాస్క్రిప్టు నేర్చుకుంటున్నాను";
// title.textContent = "नानू जावा स्क्रिप्ट नेरचुकंटुन्नाउ";
document.title = appTitle;
const titles = [
  "నేను జవాస్క్రిప్టు నేర్చుకుంటున్నాను",
  "नानू जावा स्क्रिप्ट नेरचुकंटुन्नाउ",
];

let counter = 0;
let intervalID = setInterval(function () {
  if (counter < titles.length) {
    title.textContent = titles[counter];
    counter++;
  } else {
    clearInterval(intervalID);
    window.location.href = "home.html";
  }
}, 2000);
