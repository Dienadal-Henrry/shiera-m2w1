 // Menu data
const menu = [
  { dish: "doro wat", price: 180, spicy: true },
  { dish: "pasta", price: 120, spicy: false },
  { dish: "kitfo", price: 200, spicy: true },
  { dish: "salad", price: 90, spicy: false }
];

// Regular function
function spicyLabel(spicy) {
  if (spicy) {
    return "🌶 spicy";
  } else {
    return "mild";
  }
}

// Arrow function with object destructuring
const formatDish = ({ dish, price, spicy }) =>
  `${dish.toUpperCase()} — ${price} birr — ${spicyLabel(spicy)}`;

// Format every dish
const formattedMenu = menu.map(formatDish);

// Print each line
for (const line of formattedMenu) {
  console.log(line);
}

// Count spicy dishes
const spicyDishes = menu.filter(item => item.spicy);
console.log(`Spicy dishes: ${spicyDishes.length}`);

// Compute total price
let total = menu.reduce((sum, item) => sum + item.price, 0);
console.log(`One of everything: ${total} birr`);

// Check total
if (total > 500) {
  console.log("This is a feast!");
} else {
  console.log("A reasonable meal.");
}

// Add a new dish with spread operator
const fullMenu = [
  ...menu,
  { dish: "tibs", price: 190, spicy: true }
];

console.log(`Menu now has ${fullMenu.length} dishes`);