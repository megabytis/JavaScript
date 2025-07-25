"use strict";

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

// example - 2
const withdrawls = [343, -223, 505, -940, 342];
const wdAmnt = withdrawls.filter((price) => price < 0);
console.log(wdAmnt);
console.log(withdrawls);

// example - 3
// we can add (value, index, arrayName) like this also inside filter()
// now, i wanna order every odd index foods
const oddFoods = orderedFoods.filter((foods, foodIndex, entireFoodArr) => {
  // console.log(entireFoodArr);
  if ((foodIndex + 1) % 2 === 0) return foodIndex, foods;
});
console.log(oddFoods);
