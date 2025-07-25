"use strict";

// ################################
// 1. flat() - The Array Flattener
// ################################
// It converts a nested array into a flat (1D) array by "flattening" it.
/*
syntax : arrName.flat(depth)
-> here 'depth' is OPTIONAL, it means how deep to flatten (default: 1)
i.e. inside an array, there is also an array, i.e. depth-level = 1
- if inside main arr, there is also arr inside it again another arr, i.e. depth-level = 2
like this .....
*/
// e.g. :--
// depth-level = 1
const nestedArr = [1, [2, 3], 4, [5, 6, 7], 8, 9];
const FlattenedArr = nestedArr.flat();
console.log(FlattenedArr);

// depth-level = 3
const deeperNestedArr = [1, [2, 3], 4, [5, [6, [7]]], 8, 9];
console.log(deeperNestedArr.flat(2)); // won't flatten fully, cuz it's depth-level is 3
console.log(deeperNestedArr.flat(3));

// depth-level = infinity
const infinityDepthArr = [1, [2, [3, [4, [5, [6, [7, [8, [[9]]]]]]]]]]; // 🤣
console.log(infinityDepthArr.flat(Infinity)); // it flattens completely doesn't matter how much depth it is

// Real world USE-CASES
// Cleaning Data
const messyData = [1, , , 2, [3, 4]];
const cleanedData = messyData.flat();
console.log(cleanedData);

// #####################################
// 2. flatMap() - Map + Flat in One Step
// #####################################
/*
    - First maps each element (like map()),
    - Then flattens the result by 1 level (like flat()).
*/
/*
syntax : arrName.flatMap(callback(currentvalue, [index], [array]));
    
    - callback: Function that produces an element for the new array (can return an array).
    - Automatically flattens the result by 1 level.
*/
const arr2 = [34, 22, -920, 393];
const arr3 = [494, -93, 387, -1000];
const allArr = [arr2, arr3];

// MANUAL METHOD : here both map, flat being used
const final = allArr
  .map((m) => m)
  .flat()
  .reduce((acc, cur) => acc + cur);
console.log(final);

// flatMap() method
const final2 = allArr.flatMap((m) => m).reduce((acc, cur) => acc + cur);
console.log(final2);

// Another best examples of flatMap() :---
// Splitting sentences into words
console.log(
  ["Hello world", "Javascript is BEST 👍"].flatMap((doSplit) =>
    doSplit.split(" ")
  )
);

// Doubling each number in an array
console.log([10, 20, 30, 40].flatMap((nums) => [nums, nums * 2]));

// Real world USE-CASES
// 1. Flattening API Responses
const apiData = [
  { id: 1, tags: ["js", "node"] },
  { id: 2, tags: ["react"] },
];

const allTags = apiData.flatMap((item) => item.tags);
console.log(allTags);

// 2. Expanding Arrays
const shoppingCart = [
  {
    items: ["📱", "💻"],
  },
  {
    items: ["🎧", "📢"],
  },
];
const allItems = shoppingCart.flatMap((orders) => orders.items);
console.log(allItems);
