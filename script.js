// Prompt the user to enter their age
let votersAge = (prompt("Enter your age:"));

// Prompt the user to enter if they are a citizen.

let isCitizen = prompt("Are you a citizen? (yes or no)").toLowerCase();

// Check eligibility status

if (age >= 18 && isCitizen === "yes") {
  console.log("You are eligible to vote!");
} else {
  console.log("You are not eligible to vote.");
}
