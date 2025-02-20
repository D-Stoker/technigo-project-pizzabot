// switch.js: Refactored Pizzabot Code

// Step 1 - Welcome and Introduction
alert(`Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`);
const userName = prompt("What's your name?");
alert(`Hi and welcome, ${userName}!`);

// Step 2 - Food Choice
let attempts = 0;
let foodChoice;
while (attempts < 3) {
    foodChoice = prompt(`
    Please select the type of food you want to order:
    1. Pizza
    2. Pasta
    3. Salad
    
    Enter the number of your choice (1, 2, or 3):
  `);

    if (["1", "2", "3"].includes(foodChoice)) break;
    alert("Sorry, that's not a valid choice. Please try again.");
    attempts++;
}

// Step 3 - Subtype Choice
let subChoice;
switch (foodChoice) {
    case "1":
        subChoice = getSubChoice("pizza", [
            "Margherita", "Pepperoni", "BBQ Chicken", "Meat Lovers", "Four Cheese",
            "Buffalo Chicken", "Hawaiian", "Chicken Parmesan", "Supreme", "Pesto Chicken",
        ]);
        break;

    case "2":
        subChoice = getSubChoice("pasta", [
            "Spaghetti", "Penne", "Fettuccine", "Macaroni", "Ravioli",
            "Lasagna", "Tortellini", "Linguine", "Rigatoni", "Gnocchi",
        ]);
        break;

    case "3":
        subChoice = getSubChoice("salad", [
            "Caesar", "Greek", "Garden", "Caprese", "Mediterranean",
            "Avocado & Cucumber Salad", "Cobb Salad", "Spinach & Bacon Salad",
            "Lemon & Herb Salad", "Roasted Sweet Potato Salad",
        ]);
        break;

    default:
        alert("Invalid choice. Please refresh and try again.");
        break;
}

function getSubChoice(category, options) {
    const choice = prompt(`
    You've chosen ${category}. What type of ${category} would you like?
    ${options.map((item, index) => `${index + 1}. ${item}`).join("\n")}
    
    Enter the number of your choice (1-${options.length}):
  `);

    const selected = options[choice - 1];
    if (selected) {
        alert(`You selected: ${selected} ${category}! - Click 'OK' for the next step.`);
        return selected;
    } else {
        alert("Sorry, that's not a valid choice. Please refresh and try again.");
        return null;
    }
}