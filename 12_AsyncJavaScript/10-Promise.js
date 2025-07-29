"use strict";

//#####################
// pre-defined PROMISE
//#####################

// Promise is a "container" or "envelope" that WILL hold the response.
/*
Real-world Analogy:

Promise = Empty envelope
Response = Letter inside the envelope

You get the envelope FIRST (Promise)
Later, the letter arrives and goes inside (Response)
*/

const promise = fetch("http://universities.hipolabs.com");
// ↑ This is NOT the response data
// ↑ This is a PROMISE object - like an empty box waiting for data

console.log(promise);
// Output: Promise { <pending> } ← It's just a pre-built Promise-box!
// There is nothing inside it, i.e. before response arrive, we printed it, so abviously there would be nothing inside promise container :)

promise.then((response) => {
  // ↑ NOW we get the actual response
  console.log(response); // ← This is the REAL response
});

/* 🤩 best Analogy :---
Think of it this way:
When you order food online:
Restaurant gives you a TICKET (Promise) - "Your order is being prepared"
Ticket is NOT your food - it's just a placeholder
When food is ready - they call your ticket number
You get your ACTUAL food (Response data)
*/

/*
Promise States:

Promise can be in 3 states:

1. PENDING   → Waiting for the data (empty envelope)
2. FULFILLED → Got the data successfully (envelope with letter)
3. REJECTED  → Something went wrong (envelope with error note)
*/

//#####################
// user-creted PROMISE
//#####################
// we can create a promise using ' new Promise() '
// syntax :-
const myPromise = new Promise((resolve, reject) => {
  // OUR custom async logic goes here

  // OUR container (myPromise) gets filled by:
  // Call resolve(value) when successful
  resolve("Success data!"); // ← Fills YOUR container with success data
  // OR
  // Call reject(error) when failed
  reject("Error data!"); // ← Fills YOUR container with error data
});

// Later:
myPromise.then((data) => {
  console.log(data); // Gets what YOU put in YOUR container via resolve()
});
// new Promise() returns an Promise<> object like fetch() was returning pre-built pormise
// where 'resolve' and 'reject' are functions provided by the Promise constructor
// resolve(value) → Fills container with success data, reject(error) → Fills container with error data

/*
When i use new Promise(), i'm creating my own custom container where I define:

What async operation to perform
When to put data in the container (success)
When to put an error in the container (failure)

*/

// Example-1 : custom Timer Promise
function wait(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Waited for ${seconds} seconds!`); // this fills
    }, 1000);
  });
}
wait(2).then((message) => console.log(message));

// Example-2 : Random Number Game
function guessNumber(target) {
  return new Promise((resolve, reject) => {
    const randomNum = Math.floor(Math.random() * 10) + 1;

    if (randomNum === target) {
      resolve(`💐 Correct! It was ${target}`);
    } else {
      reject(`💩 Wrong! it was ${randomNum}, not ${target}`);
    }
  });
}

guessNumber(5)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

// Another thing
Promise.resolve("Anything....").then((res) => console.log(res));
/*
Previously i was creating a user-defined Empty Promise container,
but here writing directly Promise.resolve will create an automatic promise container having resolve's message i.e. "Anything...." inside the promise container
*/

Promise.reject(new Error("Bug found!🐞")).catch((err) => console.log(err));
// same here, also it will create an promise container having an erro message written inside it !