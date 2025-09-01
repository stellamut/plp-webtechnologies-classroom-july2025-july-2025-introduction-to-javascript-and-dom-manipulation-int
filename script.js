//  Part 1: JavaScript Basics — Variables, Data Types, Conditionals
let favoriteFood = "";
const healthyFoods = ["salad", "fruit", "vegetables", "smoothie"];

document.getElementById("checkFoodBtn").addEventListener("click", () => {
  favoriteFood = document.getElementById("foodInput").value.toLowerCase();

  if (healthyFoods.includes(favoriteFood)) {
    document.getElementById("foodMessage").textContent = " That's a healthy choice!";
  } else if (favoriteFood === "") {
    document.getElementById("foodMessage").textContent = " Please enter a food.";
  } else {
    document.getElementById("foodMessage").textContent = " Tasty, but maybe not the healthiest!";
  }
});

//  Part 2: Functions — Reusability

// Function to format food names
function formatFoodName(food) {
  return food.charAt(0).toUpperCase() + food.slice(1);
}

// Function to calculate total calories (mock example)
function calculateCalories(foodArray) {
  let total = 0;
  foodArray.forEach(food => {
    if (food === "pizza") total += 300;
    else if (food === "salad") total += 150;
    else total += 200;
  });
  return total;
}

//  Part 3: Loops — Repetition

const popularFoods = ["pizza", "burger", "sushi", "salad", "pasta"];
const foodList = document.getElementById("foodList");

// Using for loop to display formatted food items
for (let i = 0; i < popularFoods.length; i++) {
  const li = document.createElement("li");
  li.textContent = formatFoodName(popularFoods[i]);
  foodList.appendChild(li);
}

// Using while loop to simulate countdown
let countdown = 3;
while (countdown > 0) {
  console.log(`Countdown: ${countdown}`);
  countdown--;
}

//  Part 4: DOM Manipulation

// Toggle dark/light theme
document.getElementById("toggleThemeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Dynamically create a new food item
const newFood = document.createElement("li");
newFood.textContent = "Ice Cream";
foodList.appendChild(newFood);

// Change heading text on click
document.querySelector("h1").addEventListener("click", () => {
  document.querySelector("h1").textContent = "Welcome to the Food Sector!";
});
