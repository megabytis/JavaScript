'use strict';

// 'CLOSURE' means "Function returning a function"

// example: 1 :-------------
const eatingDonuts = function () {
  let numOfDonuts = 1;
  const whatIAte = 'Donuts';

  return function () {
    numOfDonuts++;
    console.log(`I ate ${numOfDonuts} ${whatIAte}`);
  };
};

const howManyIAte = eatingDonuts();
howManyIAte();
howManyIAte();
howManyIAte();

// example: 2 :-------------
function createCounter() {
  let count = 0; // "Private" variable (hidden from outside)

  return {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount()); // 2
// console.log(count); // ERROR! (count is not accessible outside)
