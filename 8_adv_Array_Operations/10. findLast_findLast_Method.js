"use strict";

// findLast() method
const arr = [34, -292, 902, 337, -2337];

const lastPositive = arr.findLast((num) => num > 0);
console.log(lastPositive);

// findLastIndex() method
const lastNegativeIndex = arr.findLastIndex((num) => num < 0);
console.log(lastNegativeIndex);
