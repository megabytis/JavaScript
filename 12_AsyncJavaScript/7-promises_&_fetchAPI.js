"use strict";

fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
  .then((response) => {
    // console.log(response); // This is a Response object (with headers, status, etc.)
    return response.json(); // This CONVERTS the response body to JSON i.e. usable JS object format
  })
  .then((data) => {
    // console.log(data); // This is the ACTUAL dictionary data as a JavaScript objec
    return data[0].meanings;
  })
  .then((meanings) => {
    // console.log(meanings);
    return meanings[2];
  })
  .then((def) => {
    console.log(def);
  })
  .catch((err) => console.log(err));

/*
API Response Flow:

API Server ──► Raw Response ──► .json() ──► JavaScript Object
              (Response obj)    (converts)   (usable data)
*/

/*
Here, 
1. fetch() returns a Promise<Response>
2. 1st then() i.e. response.json() returns another Promise<JavaScript Object>
3. 2nd & 3rd .then() also returns 2 Promises
4. final then() is logging result
*/

// ⚠️⚠️⚠️ IMPORTANT ⚠️⚠️⚠️
// here all .this() returns by default a pre-made Promise, we don't have to create an Promise