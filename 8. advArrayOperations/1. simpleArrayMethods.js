"use strict";

let arr = ["ab", "cd", "ef", "gh", "ij", "kl"];

// 'SLICE' method
/* 
-> syntax :- arrayName.slice(startIndex,stopIndex)
-> it will return an array
-> It DOESN'T MUTATE the original array
*/
console.log(arr.slice(2));
console.log(arr.slice(2, 5));
console.log(arr.slice(-1));
console.log(arr.slice(2, -2));
console.log(arr);

console.log("----------------------------------------");

// 'SPLICE' method
/*
-> syntax :- arrayName.splice(startIndex,deleteCount)
-> same as SLICE, but IT MUTATES THE ORIGINAL ARRAY
*/
arr = ["a", "b", "c", "d", "e", "f"];

console.log(arr.splice(4)); // i.e. it will EXTRACT OUT every element starting from index 4 of the array2
console.log(arr);

arr.splice(1, 2); //i.e. it will EXTRACT OUT 2 elements starting from Index 1
console.log(arr);

console.log("----------------------------------------");

// 'REVERSE' Method
arr = ["ab", "cd", "ef", "gh", "ij", "kl"];
console.log(arr.reverse());

console.log("----------------------------------------");

// 'CONCAT' Method
arr = ["a", "b", "c", "d", "e", "f"];
let arr2 = ["w", "x", "y", "z"];
console.log(arr.concat(arr2));

const concartenatedArr = arr.concat(arr2);
console.log(concartenatedArr);

// we can also concartenate using spread oprtr 😉
// console.log([...arr, ...arr2]);

console.log("----------------------------------------");

// 'JOIN' method
console.log(concartenatedArr.join("~"));
