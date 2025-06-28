"use strict";

const namesArr = ["Miku", "Milan", "Karan", "Shritam", "Ashutosh"];

// Manual method
// for (const names of namesArr) {
//   console.log(names);
// }

// 'forEach' method
namesArr.forEach(function (names) {
  if (names.startsWith("M")) console.log(names);
});
/*
HOW forEach() works ?

-> forEach iterates over namesArr.
-> The forEach method takes a callback function as an argument.
-> This callback runs once for each element in namesArr.

*/
