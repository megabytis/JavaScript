"use strict";

// The Remainder Operator (%) in JavaScript

// The remainder operator (%) returns the remainder left over when one number is divided by another.
// Unlike modulo operations in some other languages, JavaScript's % is truly a remainder operator (not a modulo operator) because it preserves the dividend's sign.

console.log(10 % 3); // 1
console.log(-10 % 8); // -2 (negative dividend → negative remainder)
console.log(29 % -2); // 1 (divisor's sign doesn't affect the remainder)
console.log(-33 % -9); // -6 (both negative → still follows dividend's sign)

// e.g. :---
const isEven = (num) => num % 2 === 0;
console.log(isEven(56)); // true
console.log(isEven(77)); // false

// #### Edge Cases ######
// division by 0
console.log(10 % 0); // NaN

// floating-point remainders
console.log(10.5 % 3); // 1.5

// non-numeric values
console.log("10" % 3); // 1 ("10" -> 10 converted automatically)
console.log("s" % 5); // NaN (can't convert "s" to number)
