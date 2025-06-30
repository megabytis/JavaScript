"use strict";

// 📊 Data Transformations: map, filter, reduce

// Let's imagine you run a coffee shop, and these methods are your tools to manage orders!

// ##########################################################################
// ☕ 1. map() - The Menu Modifier
// ##########################################################################
// Analogy: You want to update prices on your menu (transform every item).
const originalFoodPricesInMenu = [20, 18, 7, 10, 5.6, 17];

// i wanna double each food's price in menu
const newPriceOfAllFoods = originalFoodPricesInMenu.map(function (price) {
  return price * 2;
});
console.log(newPriceOfAllFoods);

// example - 2
const dollars = [50, 290, 4000, 100000];
const rupees = dollars.map((prices) => prices * 86);
console.log(rupees);

/*
Key Notes:

    Input: Array → Output: New array (same length).

    Use case: Transform all items (e.g., prices, formatting).

    Does NOT change original array.
*/

// ##########################################################################
// 🚦 2. filter() - The Order Filter
// ##########################################################################
// Analogy: You want to serve only burritos (filter items that pass a test).
const orderedFoods = ["tea", "burrito", "latte", "pizza", "burrito"];
// Now filter only burritos
const burritoOrders = orderedFoods.filter(function (foods) {
  return foods === "burrito";
});
console.log(burritoOrders);
/*
Key Notes:

    Input: Array → Output: New array (shorter/same length).

    Use case: Select items that meet a condition (e.g., prices > $3).

    Original array remains unchanged.
*/

// ##########################################################################
// 🧮 3. reduce() - The Cash Register
// ##########################################################################
// Analogy: You want to calculate total sales (combine all items into one value).
const tips = [2, 3.5, 1.5, 4.2];

// sum of all tips
const totalTips = tips.reduce(function (sum, tip) {
  return sum + tip;
});
console.log(totalTips);
