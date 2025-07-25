"use strict";

// ⚠️⚠️⚠️ MOST IMPORTANT ⚠️⚠️⚠️

// 1. Basic Array Creation
// Literal Syntax (Most Common)
const arr = [1, 2, 3, 4, 5];
console.log(arr);

// 2. Working with Empty Arrays
// new Array() Constructor
console.log(new Array(5, 6, 7, 8, 9));

// ⚠️ Caution:
const arr2 = new Array(7);
console.log(arr2);
// new Array(7) creates an empty array of length 7

// here map()/filter() method also won't work
console.log(arr2.map); //❌ won't work

// SOLUTION :----
// Modifying Existing Arrays with fill() method
// syntax : arrName.fill(value, startIndex, endIndex)
arr2.fill(1); // it will fill all 7 positions with number 7
console.log(arr2);

arr2.fill(9, 3, 5);
console.log(arr2);

// 3. Modern Array Initialization: Array.from()
/* basic syntax :---
arrName.from(arrLike, mapFunction, thisArgument)

-> here 'arrLike' means - an object with a length property
    here we can give :-
        (i) an arr e.g. [1,24,4,5]
        (ii) string (array-like) e.g. "Miku"
        (iii) Dom collection e.g. document.querySelector('className)
        (iv) Arguments of Object, 
            e.g. 
                function example() {
                    return Array.from(arguments); 
                }
                example(1, 2, 3); // [1, 2, 3]
        (v) manual Array like Objects
            e.g. :--
                const arrayLike = {
                    0: 'a',
                    1: 'b',
                    length: 2
                };
                Array.from(arrayLike); // ['a', 'b']

-> 'mapFunction' is a function that processes each element
    here we can give :-
        (i) Using all parameters:
            Array.from(arrayLike, (currentValue, index, array) => { ... })
        (ii) Using currentValue, i.e. only 1st argument
            e.g.
            Array.from([1, 2, 3], x => x * 2); // [2, 4, 6]
        (iii) Using index Only, i.e. skipping 1st arg & using 2nd arg only
            e.g.
            Array.from({ length: 5 }, (_, index) => index * 2); // [0, 2, 4, 6, 8]
        (iv) (_, ind) (Mapping Function Parameters)
            ✍️ NOTE ✍️
            here in (ii) & (iii)'s arg, '_' means, i wanna skip 1st arg 'currentValue' & wanna access 2nd arg 'indexNum'

*/
// (i)
const arr3 = Array.from({ length: 9 }, (_, index) => index + 1);
console.log(arr3);

// (ii)
const arr4 = Array.from(
  [9, 2, 32, 13, 4, 89],
  (currentVal, index, arr) => `${index}: ${currentVal * 2}`
);
console.log(arr4);
