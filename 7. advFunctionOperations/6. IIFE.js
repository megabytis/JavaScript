'use strict';

// IIFE (Immediately Invoked Function Expression)
// pronounced "iffy" :)
// Basic Syntax
(function () {
  console.log('Normal func Runs Immediately');
})();

(() => console.log('Arrow func runs Immediately'))();

// 💡 Why Were IIFEs So Popular?
// (i) Creates a private scope (avoiding global namespace pollution)
(function () {
  var canYouAcessMe = "I'm hidden Bro";
})();
// console.log(canYouAcessMe);
/*
-> As we already knew that 'let','const' variables can't be accessed outside scope,
-> but 'var' variables can be accessed ,
-> but here in case of IIFE, 'var' also also can't be accessed 
*/
