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
let attempts = 0;
let foodChoice;

while (attempts < 3) {  // Allow up to 3 attempts
  foodChoice = prompt(`
    Please select the type of food you want to order:
    1. Pizza
    2. Pasta
    3. Salad
    
    Enter the number of your choice (1, 2, or 3):
  `);

  // Check if the input is valid
  if (foodChoice === "1" || foodChoice === "2" || foodChoice === "3") {
    break;  // Exit the loop if the choice is valid
  } else {
    // Invalid input, show error and increment attempts
    alert("Sorry, that's not a valid choice. Please try again.");
    attempts++;
  }
}

if (foodChoice === "1") {
  // Proceed to pizza selection (Step 3a)
  const pizzaChoice = prompt(`
    Great choice! What type of pizza would you like?
    1. Margherita
    2. Pepperoni
    3. BBQ Chicken
    4. Meat Lovers
    5. Four Cheese
    6. Buffalo Chicken
    7. Hawaiian
    8. Chicken Parmesan
    9. Supreme
    10. Pesto Chicken
    
    Enter the number of your choice (1-10):
  `);

  // Handle pizza selection (validate and confirm)
  let pizzaSelection;
  if (pizzaChoice === "1") pizzaSelection = "Margherita";
  else if (pizzaChoice === "2") pizzaSelection = "Pepperoni";
  else if (pizzaChoice === "3") pizzaSelection = "BBQ Chicken";
  else if (pizzaChoice === "4") pizzaSelection = "Meat Lovers";
  else if (pizzaChoice === "5") pizzaSelection = "Four Cheese";
  else if (pizzaChoice === "6") pizzaSelection = "Buffalo Chicken";
  else if (pizzaChoice === "7") pizzaSelection = "Hawaiian";
  else if (pizzaChoice === "8") pizzaSelection = "Chicken Parmesan";
  else if (pizzaChoice === "9") pizzaSelection = "Supreme";
  else if (pizzaChoice === "10") pizzaSelection = "Pesto Chicken";

  if (pizzaSelection) {
    alert(`You selected: ${pizzaSelection} pizza! Enjoy your meal.`);
  } else {
    alert("Sorry, that's not a valid pizza choice. Please refresh and try again.");
  }

} else if (foodChoice === "2") {
  // Proceed to pasta selection (Step 3b)
  const pastaChoice = prompt(`
    Awesome! What type of pasta would you like?
    1. Spaghetti
    2. Penne
    3. Fettuccine
    4. Macaroni
    5. Ravioli
    6. Lasagna
    7. Tortellini
    8. Linguine
    9. Rigatoni
    10. Gnocchi
    
    Enter the number of your choice (1-10):
  `);

  // Handle pasta selection (validate and confirm)
  let pastaSelection;
  if (pastaChoice === "1") pastaSelection = "Spaghetti";
  else if (pastaChoice === "2") pastaSelection = "Penne";
  else if (pastaChoice === "3") pastaSelection = "Fettuccine";
  else if (pastaChoice === "4") pastaSelection = "Macaroni";
  else if (pastaChoice === "5") pastaSelection = "Ravioli";
  else if (pastaChoice === "6") pastaSelection = "Lasagna";
  else if (pastaChoice === "7") pastaSelection = "Tortellini";
  else if (pastaChoice === "8") pastaSelection = "Linguine";
  else if (pastaChoice === "9") pastaSelection = "Rigatoni";
  else if (pastaChoice === "10") pastaSelection = "Gnocchi";

  if (pastaSelection) {
    alert(`You selected: ${pastaSelection} pasta! Enjoy your meal.`);
  } else {
    alert("Sorry, that's not a valid pasta choice. Please refresh and try again.");
  }

} else if (foodChoice === "3") {
  // Proceed to salad selection (Step 3c)
  const saladChoice = prompt(`
    Nice! What type of salad would you like?
    1. Caesar
    2. Greek
    3. Garden
    4. Caprese
    5. Mediterranean
    6. Avocado & Cucumber Salad
    7. Cobb Salad
    8. Spinach & Bacon Salad
    9. Lemon & Herb Salad
    10. Roasted Sweet Potato Salad
    
    Enter the number of your choice (1-10):
  `);

  // Handle salad selection (validate and confirm)
  let saladSelection;
  if (saladChoice === "1") saladSelection = "Caesar";
  else if (saladChoice === "2") saladSelection = "Greek";
  else if (saladChoice === "3") saladSelection = "Garden";
  else if (saladChoice === "4") saladSelection = "Caprese";
  else if (saladChoice === "5") saladSelection = "Mediterranean";
  else if (saladChoice === "6") saladSelection = "Avocado & Cucumber Salad";
  else if (saladChoice === "7") saladSelection = "Cobb Salad";
  else if (saladChoice === "8") saladSelection = "Spinach & Bacon Salad";
  else if (saladChoice === "9") saladSelection = "Lemon & Herb Salad";
  else if (saladChoice === "10") saladSelection = "Roasted Sweet Potato Salad";

  if (saladSelection) {
    alert(`You selected: ${saladSelection} salad! Enjoy your meal.`);
  } else {
    alert("Sorry, that's not a valid salad choice. Please refresh and try again.");
  }

} else {
  alert("Sorry, something went wrong. Please refresh the page and try again.");
}


// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
