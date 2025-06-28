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

// Another IMPORTANT point
namesArr.forEach(function (names, indexNums, namesArray) {
  console.log(`${indexNums}: ${names}`);
  //   console.log(namesArray);
});
// ✍️ NOTEDOWN :--
// forEach's callback func;
// 1st take 'value', then 'index' as param

// ######## forEach in maps #########
const school = new Map([
  ["name", "DAV Public School"],
  ["location", "Bhubaneswar"],
  ["NumOfStudents", 5000],
]);

school.forEach(function (value, key, school) {
  console.log(`${key}: ${value}`);
  //   console.log(school);
});
// here also, like forEach in array , i.e.
// forEach's callback function 1st take value, then key as param

// ######## forEach in sets #########

const fruits = new Set([
  "apple",
  "banana",
  "grapes",
  "custard apple",
  "litchi",
]);
fruits.forEach((fruit) => {
  console.log(fruit);
});
