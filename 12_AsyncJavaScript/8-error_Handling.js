"use strict";

fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
  .then((response, err) => {
    return response.json();
    console.log(err);
  })
  .then((data, err) => {
    return data[0].meanings;
    console.log(err);
  })
  .then((meanings, err) => {
    return meanings[2];
    console.log(err);
  })
  .then((def, err) => {
    console.log(def);
    console.log(err);
  });
/*
here to handle error we can pass an 2nd argument in each .then() for error, nd then we can log it .

But it's messy, 
so better to use .catch() at the end which will automatically detect error in any .then() of the above  Promise-chain
*/

fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return data[0].meanings;
  })
  .then((meanings) => {
    return meanings[2];
  })
  .then((def) => {
    console.log(def);
  })
  .catch((err) => console.log(err))
  .finally(function () {
    console.log("Program executed fully");
  });

/*
here catch will detect error from the entire promise chain

### finally() ###
it will be executed at the end of the promise chain, doesn't matter there is error or not , it will be executed
*/

//##########################
// Throwing errors manually
//##########################
fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`); // Manual throw
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Caught error:", error.message); // Handles manual error
  });

// When to Throw Errors Manually
/*
1. HTTP Status Check
   └── response.ok is false → throw error

2. Data Validation
   └── Missing required fields → throw error

3. Business Logic
   └── Invalid conditions → throw error

4. Unexpected Data Format
   └── Wrong data type → throw error
*/

/*
Visual Flow Diagram:

Promise Chain Flow with Manual Errors:

fetch() ──► Response ──► Check Status ──► throw Error? ──► .catch()
              │              │               │
              │              │               └── Yes → Error thrown
              │              │
              │              └── OK → Continue chain
              │
              └── .json() ──► Process Data ──► Success!
*/
function fetchWordDefinition(word) {
  return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((response) => {
      // Manual error for HTTP issues
      if (!response.ok) {
        throw new Error(
          `Failed to fetch word: ${response.status} ${response.statusText}`
        );
      }
      return response.json();
    })
    .then((data) => {
      // Manual error for data validation
      if (!data || data.length === 0) {
        throw new Error(`Word "${word}" not found in dictionary`);
      }

      // Manual error for business logic
      if (!data[0].meanings || data[0].meanings.length === 0) {
        throw new Error(`No definitions available for "${word}"`);
      }

      return data[0]; // Return the word data
    })
    .catch((error) => {
      // Handle ALL errors (manual + automatic)
      console.error("Dictionary API Error:", error.message);
      throw error; // Re-throw if needed
    });
}

// Usage
fetchWordDefinition("hello")
  .then((wordData) => {
    console.log("Word:", wordData.word);
    console.log("Definition:", wordData.meanings[0].definitions[0].definition);
  })
  .catch((error) => {
    console.log("Final error handling:", error.message);
  });
