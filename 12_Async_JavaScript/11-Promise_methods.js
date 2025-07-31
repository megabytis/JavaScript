"use strict";

// Important Promise Static Methods

// ################
// 1. Promise.all()
// ################
// VERY COMMON (Used Daily) in real companies
/*
What it does:
Waits for ALL promises to resolve successfully, or rejects immediately if ANY promise rejects.
*/
// Syntax:
// Promise.all([promise1, promise2, promise3])
const urls = [
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka",
  "https://punkapi.online/v3/beers/random",
  "https://world.openfoodfacts.org/api/v0/product/3017620422003.json",
];

// Promise.all(urls.map((url) => fetch(url).then((res) => res.json())))
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log("One or more requests failed: ", err);
//   });

/*
When to use:
- When you need all operations to succeed
- When operations are independent but all required
- Fetching related data from multiple endpoints
*/

// #######################
// 2. Promise.allSettled()
// #######################
//  INCREASINGLY COMMON use in real companies
/*
What it does:
Waits for ALL promises to settle (either resolve or reject) and returns the outcome of each.
*/
// Syntax:
// Promise.allSettled([promise1, promise2, promise3])
// const promises = [
//   fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist"),
//   fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist"),
//   fetch("https://www.yomama-jokes.com/api/v1/jokes/random/"),
// ];

// Promise.allSettled(promises).then((res) => {
//   res.forEach((result, index) => {
//     if (result.status === "fulfilled") {
//       console.log(`Request ${index} succeeded: ${result.value}`);
//     } else {
//       console.log(`Request ${index} failed: ${result.reason}`);
//     }
//   });
//   //   console.log(res);

//   //   return result[0];
// });
/*
When to use:
- When you want to handle all outcomes regardless of success/failure
- When some operations are optional but you want to know their status
- Graceful degradation scenarios
*/

// ##################
// 3. Promise.race()
// ##################
// COMMONly used for Timeouts
/*
What it does:
Returns the result of the FIRST promise that settles (wins the race).
*/
// Syntax:
//Promise.race([promise1, promise2, promise3])

// Timeout Pattern
function fetchWithTimeout(urls, timeout = 5000) {
  return Promise.race([
    fetch(urls),
    new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("Request timeout"));
      }, timeout);
    }),
  ]);
}

// Cache VS Network race
function fetchWithCacheFallback() {
  return Promise.race([
    fetchFromCache(), // Fast Cache
    fetchFromNetwork(), // Slower network
  ]);
}
/*
When to use:
- Timeouts for async operations
- Cache vs Network races
- When you only need the first available result
*/

// ################
// 4. Promise.any()
// ################
/*
What it does:
Waits for the FIRST promise to resolve successfully (ignores rejections until one succeeds).
*/
// Syntax:
// Promise.any([promise1, promise2, promise3])
