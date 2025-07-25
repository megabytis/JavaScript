"use strict";

console.log(69 === 69.0);
console.log(0.2 + 0.1);
console.log(0.2 + 0.1 === 0.3);

// Numbers Conversion
console.log(Number("69"));
// ----or----
console.log(+"39");
console.log(-"23");

// Parsing numbers
// 1. Core Parsing Methods

// Number.parseInt(string, radix/base)
// here, radix means binary(2),octal(8), decimal(10),hexadecimal(16),etc...
// Extracts an integer from the beginning of a string until it hits a non-digit character.
console.log(Number.parseInt("100rs", 10)); // 100 ✅
console.log(Number.parseInt("f", 16));

// Number.parseFloat(string)
// it's base always 10
// Extracts a floating-point number until invalid characters.
console.log(Number.parseFloat("9.23CGPA")); // 9.23 ✅
console.log(Number.parseFloat("1.2e3")); // special case , cuz 'e' is a scientific notation
console.log(Number.parseFloat("1.2lulla3"));

// 2. Critical Behaviour
console.log(Number.parseInt("$100")); // NaN (starts with non-digit)
console.log(Number.parseFloat("π3.14")); // NaN

// Edge Cases
console.log(Number.parseFloat("14.232.313.412")); // stops when 2n deciml came
console.log(Number.parseInt("  100x  ")); // trims WhiteSpace
console.log(Number.parseInt("0x20")); // hexadecimal

// Number Validation Methods
// 1. Number.isNaN() vs isNaN()
// avoid global isNaN() ❌
console.log(isNaN(undefined)); // true

// Recommended ✅
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN(9 / 0)); // false
console.log(Number.isNaN(0 / 0)); // true

// 2. Number.isInteger()
console.log(Number.isInteger(5)); // true
console.log(Number.isInteger("5")); // false (string)
console.log(Number.isInteger(7.9)); // false (float)
console.log(Number.isInteger(Infinity)); //false

// 3. Number.isFinite() vs isFinite()
// avoid global isFinite() ❌
console.log(isFinite("100")); // true (converts string to num)

// Recommended ✅
console.log(Number.isFinite(100)); // true
console.log(Number.isFinite("200")); // false (string)
console.log(Number.isFinite(1 / 0)); // false (it's infinite)
