"use strict";

// example : 1
// console.log("1. start");

// setTimeout(() => {
//   console.log("2. inside SetTimeout");
// }, 0);

// console.log("3. end");

/*
output :
1. start
3. end
2. inside SetTimeout

Why this order?

Execution Flow:

1. console.log("1. Start") → Call Stack → Execute → Remove
2. setTimeout(...) → Call Stack → Web APIs (0ms timer) → Remove from Call Stack
3. console.log("3. End") → Call Stack → Execute → Remove
4. Event Loop notices timer finished → Moves callback to Callback Queue
5. Event Loop waits for Call Stack to be empty
6. Event Loop moves callback to Call Stack → Execute

*/

// Example 2: Multiple Async Operations
// console.log("A");

// setTimeout(() => console.log("B"), 1000);
// setTimeout(() => console.log("C"), 0);

// console.log("D");

// fetch("https://api.example.com/data").then(() => console.log("E"));

// console.log("F");

// Execution Breakdown:
/*
Timeline:

0ms:   A → Console log
       setTimeout(1000) → Web APIs
       setTimeout(0) → Web APIs  
       D → Console log
       fetch() → Web APIs (Network request)
       F → Console log

1ms:   setTimeout(0) callback → Callback Queue → Call Stack → C

~50ms: fetch() completes → Callback Queue → Call Stack → E

1000ms: setTimeout(1000) callback → Callback Queue → Call Stack → B
*/

// Example : 3
console.log("Test start");

setTimeout(() => console.log("0 sec Timer"), 0);

Promise.resolve("Resolved promise 1. ").then((res) => console.log(res));

Promise.resolve("Resolved promise 2. ").then((res) => {
  for (let i = 0; i < 10; i++) {
    console.log(res);
  }
});

console.log("Test end");

// Here’s a timeline of what happens:
/*
Timeline:

1. console.log('Test start') → Call Stack → Execute → Remove
2. setTimeout(...) → Web APIs → Queued as a macrotask
3. Promise.resolve('Resolved promise 1').then(...) → Queued as a microtask
4. Promise.resolve('Resolved promise 2').then(...) → Queued as a microtask
5. console.log('Test end') → Call Stack → Execute → Remove

Microtask Queue:
- Resolved promise 1 → Execute → Logs 'Resolved promise 1'
- Resolved promise 2 → Execute → Blocking loop starts → Blocks Event Loop

Macrotask Queue:
- setTimeout → Queued → Waits for Event Loop to be free

Final Output:
Test start
Test end
Resolved promise 1
Resolved promise 2
0 sec timer
*/
