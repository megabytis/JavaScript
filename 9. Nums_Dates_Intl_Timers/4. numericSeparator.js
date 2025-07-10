"use strict";

// Numeric Separators in JavaScript (_ in Numbers)
// Numeric separators are a JavaScript feature (ES2021) that improves readability of large numbers by allowing underscores (_) as visual separators between digits.

const billion = 1000000000;
const readableBillion = 1_000_000_000; // same as billiom, but more readable
console.log(billion === readableBillion);

// usage ---
console.log(100_000_111_1122); // integer
console.log(9.97_897_97); // float

// Where we CAN'T Use Separators
// ❌ Leading or trailing underscores
// console.log(_0.123);
// console.log(123._86);
// console.log(123_);
