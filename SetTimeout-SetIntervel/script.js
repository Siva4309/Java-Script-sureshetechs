console.log("start");
const cancelBtn = document.getElementById("cancel");
const timerid = setTimeout(function () {
  console.log("end calls after 5 seconds");
  clearInterval(intervelId);
}, 5000);

cancelBtn.addEventListener("click", function () {
  console.log("clicked cancel button");
  clearTimeout(timerid);
});
let counter = 1;
const intervelId = setInterval(function () {
  console.log("1 Sec completed", counter);
  counter++;
}, 1000);
