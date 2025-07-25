"use strict";

// Non-Destructive Array Methods (ES2023+)
// new array methods that don't mutate the original array

// 1. toReversed()
// Creates a reversed copy without modifying the original.
const arr = [1, 2, 3, 4];
const reversedArr = arr.toReversed();
console.log(reversedArr);
console.log(arr); // original not affected

// 2. toSorted()
// Returns a sorted copy while preserving the original.
const nums = [23, -138, 800, 72, 92];
const sortedNums = nums.toSorted();
console.log(sortedNums);
console.log(nums); // unchanged original

// 3. toSpliced()
// Non-destructive version of splice() for adding/removing elements.
const colors = ["brown", "green", "blue", "red"];
const modifiedColors = colors.toSpliced(1, 1, "blue");
console.log(modifiedColors);
console.log(colors); // original not changed

// 4. with()
// Replaces an element at a specific index immutably.
const lettrs = ["a", "b", "c", "d"];
const updatedLetters = lettrs.with(2, "C");
console.log(updatedLetters);
console.log(lettrs); // original not affected
