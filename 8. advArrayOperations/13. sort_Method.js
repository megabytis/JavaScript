"use strict";

// sort() method :----
/*
syntax: arrName.sort([compareFunction]);

-> by default, it sorts elements as STRINGS
-> returns The Sorted, original Mutated Array
*/

// Default string sorting
const fruits = ["litchi", "banana", "apple", "cherry"];
console.log(fruits.sort());

const numbers = [10, 2, 100];
console.log(numbers.sort()); // [10, 100, 2] 😱 (because '10' < '2' in string comparison)

// Numeric Sorting (IMP)
// Ascending sorting
console.log(
  numbers.sort((currentValue, nextValue) => currentValue - nextValue)
);

// Descending sorting
console.log(
  numbers.sort((currentValue, nextValue) => nextValue - currentValue)
);

/*
##### Cheat Sheet ######
    Task	            Code Example
String sort	        arr.sort()
Numeric ascending   arr.sort((a,b) => a - b) , where a = currentValue, b = nextValue
Numeric descending  arr.sort((a,b) => b - a)
Object property	    arr.sort((a,b) => a.prop - b.prop)
Case-insensitive    arr.sort((a,b) => a.localeCompare(b))
Preserve original	[...arr].sort()
*/
