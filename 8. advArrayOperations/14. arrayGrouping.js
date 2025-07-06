"use strict";

// Array Grouping in JavaScript

// Object.groupBy() method (ES2023)
// it groups array elements into an object based on a key derived from each element.

/* ⚠️⚠️⚠️ IMPORTANT ⚠️⚠️⚠️
Syntax : Object.groupBy(items, callbackFunc)

where, 
# items :- collection of items e.g. arrName
# callbackFunc :- function, whatever returns becomes the "GROUPING KEY" for each element

FEATURES :----
-> doesn't mutate original array
-> returns a new object
*/

// EXAMPLE_1 :--
const inventory = [
  {
    name: "Apple",
    type: "Fruit",
  },
  {
    name: "carrot",
    type: "Vegetable",
  },
  {
    name: "Banana",
    type: "Fruit",
  },
  {
    name: "Brocoli",
    type: "Vegetable",
  },
];

const grouped = Object.groupBy(inventory, (items) => items.type);
console.log(grouped);

// Advance Usage

// EXAMPLE_2 :--
// Grouping by Computed Keys
const numbers = [1, 2, 3, 4, 5, 6, 7];
const numTypeGrps = Object.groupBy(numbers, (num) =>
  num % 2 === 0 ? "Even" : "Odd"
);
console.log(numTypeGrps);

// EXAMPLE_3 :--
// Grouping with Complex Logic
const people = [
  {
    name: "Rinku",
    age: 21,
  },
  {
    name: "Jewel",
    age: 18,
  },
  {
    name: "Karan",
    age: 31,
  },
];

const ageGroups = Object.groupBy(people, (person) => {
  if (person.age < 30) return "Young";
  else return "Senior";
});
console.log(ageGroups);

// EXAMPLE_4 :--
// Handling Edge Cases
const mixedData = ["Hello JS", null, 39, false, undefined];
const groupTypes = Object.groupBy(mixedData, (items) => typeof items);
console.log(groupTypes);
