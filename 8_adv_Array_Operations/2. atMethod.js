"use strict";

// 'AT' method
const arr = [11, 22, 33, 44, 55];
console.log(arr[2]); // traditional method
console.log(arr.at(2)); // new 'at' method

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log("Madhusudan".at(3));
