import { appTitle } from "./app.js";
document.title = appTitle;
const chapters = [
  "Why should I learn Java script",
  "what is java script? what can we do with it?",
  "How to make a web application dynamic? Front-end, Back-end, Full-stack",
  "JavaScript Engine",
  "Interview Questions Chapter 1 to 4",
  "Install visual studio code",
  "First Java script program",
  "Understand console log()",
  "Specification documentation",
  "alert()",
  "Overview of data types",
  "Program on strings(single, double, backticks)",
  "Variables, keywords, idenifiers",
  "let, var, const",
  "Statements, expressions and literals",
  "Why is Javascript single threaded? Synchronous and Asynchronous programming",
  "commnets",
  "Overview of 8 data types",
  "Defination of Java Script",
  "Interview Questions from chapter 7 to 18",
  "prompt",
  "Type conversions",
  "Operators",
  "Deploy online shopping application - continuous deployment",
  "Final Project - All in one app",
];

const chaptersContainer = document.getElementById("chaptersContainer");

chapters.forEach((chapter) => {
  const listItem = document.createElement("li");
  listItem.textContent = chapter;
  listItem.classList.add("font20px");
  listItem.classList.add("whiteText");
  listItem.classList.add("margin10px");
  chaptersContainer.appendChild(listItem);
});
