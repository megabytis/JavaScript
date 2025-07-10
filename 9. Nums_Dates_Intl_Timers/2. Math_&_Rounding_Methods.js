"use strict";

//  all 'Math' methods

// .sqrt()
console.log(Math.sqrt(100)); // 10
// ----or----
console.log(100 ** (1 / 2)); // 100 to the power 1/2, same bro, like previous one :)

// .max()
console.log(Math.max(1, -33, 90, 21, 3)); // 90
console.log(Math.max(3, "12", -90)); // 12
console.log(Math.max(-12, "90dollars", 829)); // NaN

// .min()
console.log(Math.min(24, -13, 324, 1)); // -13
console.log(Math.min("23ff", 23, 0)); // NaN

// .PI
console.log(Math.PI * Number.parseInt("10exel") ** 2);

// ######### BASIC ROUNDING METHODs ###########
// .round()
console.log(Math.round(2.3)); // 2
console.log(Math.round(-9.1)); // -9 (towards +∞)

// .floor()
console.log(Math.floor(3.8)); // 3
console.log(Math.floor(-1.4)); // -2 (towards -∞)

// .ceil()
console.log(Math.ceil(3.1)); // 4
console.log(Math.ceil(-1.2)); // -1 (towards +∞)

// .trunc()  : cuts off decimal part
console.log(Math.trunc(8.9)); // 8
console.log(Math.trunc(-3.2)); // -3

// ######### Precision Rounding #########
// returns string
console.log((3.2243).toFixed(2)); // gives string
console.log(+(67.1323).toFixed(3)); // '+' converts back to number

// ########### Random Numbers ###########
// Math.random() -> 0 ≤ result < 1 (floating point)
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInt(3, 15));
