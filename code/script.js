// Start here

// Step 1 - Welcome and introduction
// 1a - initial welcome message
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);
// 1b - ask for user name
const userName = prompt("What's your name?");
// 1c - greet user with their name
alert(`Hi and welcome, ${userName}!`);

// Step 2 - Food choice
// 2a - present a menu to the user and ask for their choice
const foodChoice = prompt(`
  Please select the type of food you want to order:
  1. Pizza
  2. Pasta
  3. Salad
  
  Enter the number of your choice (1, 2, or 3):
  `);
//2b - validate the user's input and determine their choice
let chosenFood;
if (foodChoice === "1") {
  chosenFood = "Pizza";
} else if (foodChoice === "2") {
  chosenFood = "Pasta";
} else if (foodChoice === "3") {
  chosenFood = "Salad";
} else {
  // 2c -  handle invalid input
  alert("Sorry, that's not a valid choice. Please refresh the page and try again.");
}
// 2d - confirm the user's selection is valid
if (chosenFood) {
  alert(`You selected: ${chosenFood}. Enjoy your meal!`);
}

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
