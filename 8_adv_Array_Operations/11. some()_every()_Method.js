"use strict";

const arr = [34, -292, 902, 337, -2337];

// 1. includes() - Simple Value Check
// Purpose: Checks if the array contains the exact value (-292)
console.log(arr.includes(-292)); // true

// 2. some() - Condition Check (Any Element)
// Purpose: Checks if at least one element satisfies the condition
console.log(arr.some((num) => num === -292)); // true

// 3. every() - Condition Check (All Elements)
// Purpose: Checks if every element satisfies the condition
console.log(arr.every((num) => num > 0)); // false
