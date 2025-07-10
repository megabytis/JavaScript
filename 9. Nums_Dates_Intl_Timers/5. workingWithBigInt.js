"use strict";

// ########## Creating BigInt Values #######
// Literal Syntax (append n)
const big = 2342349289488456849824619470710247219468n;
console.log(big);

// ########## Key Characteristics #########
// can't add with number
// console.log(2313n + 3); // ❌ error

// no decimal part
console.log(52n / 3n); // it truncates decimal

// Can represent extremely large values:
const googol = 10n ** 100n; // i.e. 10¹⁰⁰
console.log(googol);

// ######### Operations with BigInt #########

// Arithmetic Operations
const a = 12345678901234567890n;
const b = 98765432109876543210n;

console.log(a + b); // 111111111011111111100n
console.log(a - b); // -86419753208641975320n
console.log(a * b); // 1219326311370217952237463801111263526900n
console.log(a / b); // 0n (truncated division)
console.log(a % b); // 12345678901234567890n
console.log(a ** 3n); // 1881676372353657772490265749424677022198701224860897069000n

// Comparison Operators
console.log(1n === 1); // false (different types)
console.log(1n == 1); // true (loose equality)
console.log(2n > 3n); // false
console.log(48n < 100n); // true

// Bitwise Operations
console.log(0b1101n & 0b1010n); // 8n
