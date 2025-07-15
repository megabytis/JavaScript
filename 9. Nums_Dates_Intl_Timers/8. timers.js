"use strict";

// ######### setTimeout() ##########
// Execute code ONCE after a delay
/*
 syntax: 
 const timeoutID = setTimeout(callback, delayInMs, param1, param2, ...);

here, 
Parameters:

    callback: Function to execute

    delayInMs: Delay in milliseconds (default: 0 if omitted)

    param1, param2, ...: (Optional) Arguments passed to the callback
*/
// e.g. :--
setTimeout(() => {
  console.log(90);
}, 1000);
// 1000 milisecond i.e. 1 second,m so after 1 second it will be logged

// with arguments
setTimeout(
  (name, age) => {
    console.log(`Hello ${name}, you are ${age} years old`);
  },
  1000,
  "Alice",
  25
);

// Canceling a Timeout:
const timer = setTimeout(() => {
  console.log(9999);
}, 1000);
clearTimeout(timer); // prevents execution if 'timer' isn't run yet

// ######## setInterval() ###########
// Repeatedly execute code at intervals
/* 
syntax : 
const intervalID = setInterval(callback, delayInMs, param1, param2, ...);

Works similarly to setTimeout but repeats until cleared.
*/
// e.g. 1 :---
let counter = 0;
const interval = setInterval(() => {
  counter++;
  console.log(`Internal run #${counter}`);

  // cancelling an interval
  if (counter >= 10) {
    clearInterval(interval); // stops further execution after 10 times i.e. 10*1000 = 10,000 i.e. 10seconds
  }
}, 1000);

// e.g. 2 :----
setInterval(() => {
  console.log(new Date());
}, 1000);
