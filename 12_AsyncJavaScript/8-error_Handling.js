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
