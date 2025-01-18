// Pizzabot: start here

// Step 1 - Welcome and introduction
// 1a - Initial welcome message
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
);
// 1b - Ask for user name
const userName = prompt("What's your name?");
// 1c - Greet user with their name
alert(`Hi and welcome, ${userName}!`);

// Step 2 - Food choice
// 2a - Present a menu to the user and ask for their choice
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

// Step 3 - Subtype choice
let subChoice;
if (foodChoice === "1") {
  // Pizza selection
  const pizzaChoice = prompt(`
    You've chosen pizza. What type of pizza would you like?
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
  const pizzaOptions = [
    "Margherita", "Pepperoni", "BBQ Chicken", "Meat Lovers", "Four Cheese",
    "Buffalo Chicken", "Hawaiian", "Chicken Parmesan", "Supreme", "Pesto Chicken"
  ];
  subChoice = pizzaOptions[pizzaChoice - 1]; // Retrieve pizza name by index
  if (subChoice) {
    alert(`You selected: ${subChoice} pizza! - Click 'OK' for the next step.`);
  } else {
    alert("Sorry, that's not a valid pizza choice. Please refresh and try again.");
  }

} else if (foodChoice === "2") {
  // Pasta selection
  const pastaChoice = prompt(`
    You've chosen pasta. What type of pasta would you like?
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
  const pastaOptions = [
    "Spaghetti", "Penne", "Fettuccine", "Macaroni", "Ravioli",
    "Lasagna", "Tortellini", "Linguine", "Rigatoni", "Gnocchi"
  ];
  subChoice = pastaOptions[pastaChoice - 1]; // Retrieve pasta name by index
  if (subChoice) {
    alert(`You selected: ${subChoice} pasta! - Click 'OK' for the next step.`);
  } else {
    alert("Sorry, that's not a valid pasta choice. Please refresh and try again.");
  }

} else if (foodChoice === "3") {
  // Salad selection
  const saladChoice = prompt(`
    You've chosen salad. What type of salad would you like?
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
  const saladOptions = [
    "Caesar", "Greek", "Garden", "Caprese", "Mediterranean",
    "Avocado & Cucumber Salad", "Cobb Salad", "Spinach & Bacon Salad",
    "Lemon & Herb Salad", "Roasted Sweet Potato Salad"
  ];
  subChoice = saladOptions[saladChoice - 1]; // Retrieve salad name by index
  if (subChoice) {
    alert(`You selected: ${subChoice} salad! - Click 'OK' for the next step.`);
  } else {
    alert("Sorry, that's not a valid salad choice. Please refresh and try again.");
  }
}

// Step 4 - Age
let ageGroup; // Declare variable to store age group
let ageAttempts = 0; // Initialize attempt counter

while (ageAttempts < 3) { // Allow up to 3 attempts
  ageGroup = prompt(`
    Is this meal for a child or an adult?
    Please type 'child' or 'adult':
  `).toLowerCase(); // Normalize input to lowercase for easier comparison

  if (ageGroup === "child" || ageGroup === "adult") {
    break; // Exit the loop if the input is valid
  } else {
    alert("Invalid choice. Please type 'child' or 'adult'.");
    ageAttempts++;
  }
}

if (ageGroup === "child") {
  alert(`You've ordered a meal for a child. - Click 'OK' for the next step.`);
} else if (ageGroup === "adult") {
  alert(`You've ordered a meal for an adult. - Click 'OK' for the next step.`);
} else {
  alert("Sorry, too many invalid attempts. Please refresh the page and try again.");
}

// Step 5 - Order confirmation
const confirmation = confirm(`
  You've selected the following:
  - Food: ${foodChoice === "1" ? "Pizza" : foodChoice === "2" ? "Pasta" : "Salad"}
  - Sub-choice: ${subChoice} 
  - Age group: ${ageGroup}

  Would you like to confirm your order?
`);

if (confirmation) {
  alert(`Thank you, ${userName}! Your meal (one ${ageGroup}-sized ${subChoice}) will be prepared. See you soon!`);
} else {
  alert("No problem! We hope to see you again soon.");
}
