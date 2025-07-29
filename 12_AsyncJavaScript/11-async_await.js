"use strict";

/*
What is async/await?

It's syntactic sugar for Promise chains
    - async: A keyword used to declare an asynchronous function
    - await: A keyword that pauses execution until a Promise settles (resolves or rejects)
*/

// Async/await makes asynchronous code look and behave like synchronous code, while still being non-blocking.

// ###########################
//  Basic Syntax and Structure
// ###########################

// Function declaration
async function myAsyncFunction() {
  // Function body
}

// Arrow function
const myAsyncArrowFunction = async () => {
  // Function body
};

// Method in object
const obj = {
  async myMethod() {
    // Method body
  },
};

// Using await:
async function example() {
  const result = await somePromise; // Pauses until Promise settles
  console.log(result); // Executes after Promise resolves
  return result; // Async functions always return a Promise
}

/*
⚠️⚠️⚠️IMPORTANT ⚠️⚠️⚠️
most confusing aspects of async/await is : 
Q. If await pauses until promise settles, then how it is Non-blocking ???

Ans: await PAUSES the current async function, but does NOT BLOCK the entire program
*/
// Proof It's Non-Blocking:

console.log("Start");

async function timer1() {
  console.log("Timer 1 started");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Timer 1 finished"); // This takes 2 seconds to appear
}

async function timer2() {
  console.log("Timer 2 started");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Timer 2 finished"); // This takes 1 second to appear
}

timer1(); // Starts 2-second timer
timer2(); // Starts 1-second timer
console.log("End");

// Output:
// Start
// Timer 1 started
// Timer 2 started
// End
// Timer 2 finished (after 1 second)
// Timer 1 finished (after 2 seconds)

/*
✨✨✨✨✨✨✨✨✨✨✨✨✨✨
✨✨✨ The Golden Rule : ✨✨✨
✨✨✨✨✨✨✨✨✨✨✨✨✨✨
- await PAUSES/FREEZES 🥶 the current async function
- BUT does NOT BLOCK the JavaScript thread
- OTHER code i.e. outside the function codes continues to execute
- The paused function resumes later when the Promise settles
*/

// EXAMPLE-1 :---

// using traditional .then() chaining
fetch("https://api.data.gov.sg/v1/environment/air-temperature")
  .then((res) => res.json())
  .then((data) => console.log(data));

// using MODERN async/await
async function fetchData() {
  const response = await fetch(
    "https://api.data.gov.sg/v1/environment/air-temperature"
  );
  const data = await response.json();
  console.log(data);
}
fetchData();
