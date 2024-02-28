// Exercise 1
var string = "12";
var numeric = 12;
if (string === numeric) {
  console.log("The values AND types are equal.");
} else if (string == numeric) {
  console.log("The values are equal.");
} else {
  console.log("The values and types are not equal.");
}

/* Result in console:
The values are equal. */



// Exercise 2
var hoursSlept = Number(
  prompt(
    "How many hours did you sleep last night? (enter a number from 0 to 12)"
  )
);
if (hoursSlept > 12) {
  console.log("Now, be honest and try again. :)");
} else if (hoursSlept >= 8) {
  console.log("Congrats! You got the recommended 8 hours of sleep!");
} else if (hoursSlept > 5) {
  console.log(
    "You did OK. The recommended amount of sleep is 8 hours a night. Please consider adjusting your schedule so you can get more sleep."
  );
} else {
  console.log(
    "You did not get enough sleep! The recommended amount of sleep is 8 hours a night. Please adjust your schedule to make sure you get more sleep. Sleep is crucial to your health and wellbeing!"
  );
}

/* Result in console if 6 is enetered in the prompts pop up:
You did OK. The recommended amount of sleep is 8 hours a night. Please consider adjusting your schedule so you can get more sleep. */



// Exercise 3
var chocPiecesDesired = Number(
  prompt(
    "How many pieces of chocolate would you like? (Enter a number between 0 and 10)"
  )
);

var chocPiecesLeft = Number(10 - chocPiecesDesired);

if (chocPiecesLeft === 10) {
  alert(
    `We have ${chocPiecesLeft} pieces of chocolate left now. Don't you like chocolate?`
  );
} else if (chocPiecesLeft >= 5) {
  alert(`We have ${chocPiecesLeft} pieces of chocolate left. Still plenty!`);
} else if (chocPiecesLeft >= 1) {
  alert(`We have ${chocPiecesLeft} pieces left. Time to restock!`);
} else {
  alert(`We're completely out of chocolate now!`);
}

/* Result in alert pop up if customer wants 8 pieces of chocolate:
We have 2 pieces left. Time to restock! */