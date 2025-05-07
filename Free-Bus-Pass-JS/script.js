let isSeatAvailable = prompt("Is Seat Available?");

if (isSeatAvailable.toLowerCase() == "yes") {
  console.log("seat is available");
  let isAgeAbove50 = prompt("Is your age above 50 years?");
  if (isAgeAbove50.toLowerCase() == "yes") {
    console.log("Age is  Above 50");
    let hasAadharCard = prompt("Do you have Aadhar card?");
    if (hasAadharCard.toLowerCase() == "yes") {
      console.log("Aadhar is available");
      alert("Please come inside the bus");
    } else {
      console.log("But you don't have Aadhar card");
    }
  } else {
    console.log("But your age is below 50 years");
  }
} else {
  console.log("Seat is not available");
}
