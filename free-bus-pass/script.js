const seatAvailable = document.getElementById("seatAvailable");
const ageAbove50 = document.getElementById("ageAbove50");
const hasAadhar = document.getElementById("hasAadhar");
const checkButton = document.getElementById("checkStatus");
const passengerStatus = document.getElementById("status");

checkButton.addEventListener("click", function () {
  let isSeatAvailable = seatAvailable.checked;
  let isAgeAbove50 = ageAbove50.checked;
  let hasAadharCard = hasAadhar.checked;
  console.log(isSeatAvailable, isAgeAbove50, hasAadharCard);
  let feedback;
  if (isSeatAvailable) {
    console.log("seat is available");
    feedback = "seat is available";
    if (isAgeAbove50) {
      console.log("Age is  Above 50");
      feedback = feedback + ", Age is  Above 50";
      if (hasAadharCard) {
        console.log("Aadhar is available");
        feedback = feedback + ", Aadhar is available";
        let confirmmsg = confirm("Are you sure? Do you want to come inside");
        if (confirmmsg) {
          alert("Please come inside the bus");
        }
      } else {
        console.log("But you don't have Aadhar card");
        feedback = feedback + ", But you don't have Aadhar card";
      }
    } else {
      console.log("But your age is below 50 years");
      feedback = feedback + ", But your age is below 50 years";
    }
  } else {
    console.log("Seat is not available");
    feedback = "Seat is not available";
  }

  passengerStatus.textContent = feedback;
});
