"use strict";

// 📊 Data Transformations: map, filter, reduce

// Let's imagine you run a coffee shop, and these methods are your tools to manage orders!

// ##########################################################################
// ☕ 1. map() - The Menu Modifier
// ##########################################################################

// example - 1
// Analogy: You want to update prices on your menu (transform every item).
const originalFoodPricesInMenu = [20, 18, 7, 10, 5.6, 17];

// i wanna double each food's price in menu
const newPriceOfAllFoods = originalFoodPricesInMenu.map(function (price) {
  return price * 2;
});
console.log(newPriceOfAllFoods);

// example - 2
const dollars = [50, 290, 4000, 100000];
// inside map(), ARROW FUNCTION being used
const rupees = dollars.map((prices) => prices * 86);
console.log(rupees);

/*
Key Notes:

    Input: Array → Output: New array (same length).

    Use case: Transform all items (e.g., prices, formatting).

    Does NOT change original array.
*/

// example - 3
// syntax :-  .map(function(value, index, arrayName) {})
const tradingIncome = [10500, -23900, 8005, 27800, -11000];

tradingIncome.map((pnlPrice, priceIndex, tipsArray) =>
  pnlPrice > 0
    ? console.log(`Person-${priceIndex + 1} made profit of ${pnlPrice}`)
    : console.log(`Person-${priceIndex + 1} made loss of ${pnlPrice}`)
);
