"use strict";
const transactions = [343, 493, -282, 390, -2399, -242];

console.log(transactions);
const firstWithdrawl = transactions.find((money) => money < 0);
console.log(firstWithdrawl);

/* Difference between filter() & find() method :
-> both use to search elements acording to given condition
-> filter() method returns AN ARRAY of elements, which satisfies the condition,
but, find() methods returns ONLY FIRST ELEMENT, which satisfy the condition
*/

// example - 2 (MOST POWERFUL real life use-case)
const arr = [
  {
    name: "Karan Kundra",
    age: 90,
    sharabi: true,
  },
  {
    name: "Raghab Yadubanshi",
    age: 23,
    sharabi: false,
  },
  {
    name: "Javed Ali",
    age: 48,
    sharabi: true,
  },
  {
    name: "Vaishali Thakur",
    age: 23,
    sharabi: false,
  },
];

const checkingName = arr.find((obj) => obj.name === "Vaishali Thakur");
console.log(checkingName);
