'use strict';

// #####################################################################
// ############# First class & HIgher class order functions ############
// #####################################################################

// 1. *** FIRST-CLASS FUNCTIONS ***
/*
JavaScript treats functions as first-class citizens, meaning they can be:

    (i) Assigned to variables
    (ii) Passed as arguments to other functions
    (iii) Returned from other functions
    (iv) Stored in data structures (arrays, objects)
*/
// (i) Storing Functions in Variables
const add = (a, b) => a + b;
console.log(add(2, 3));

// (ii) Passing Functions as Arguments
function greet(name) {
  return `Hello, ${name}!`;
}

function processUser(name, callback) {
  return callback(name);
}

console.log(processUser('Alice', greet));

// (iii) Returning Functions from Functions
function createMultiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const triple = createMultiplier(3);
console.log(triple(7));
// ------OR------
const double = createMultiplier(2)(5);
console.log(double); // 10

// (iv) Storing Functions in Data Structures(in array, object, map/set)

// --> Storing Functions in an Array
const mathOperations = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => a / b,
];

const x = 10,
  y = 5;
mathOperations.forEach((op) => console.log(op(x, y)));

// --> Storing Functions in an Object
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

// Use the functions
console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(10, 5));
console.log(calculator.divide(10, 5));

// 2. *** HIGHER-OREDER FUNCTIONS ***
/* those who ;
    (a) Takes one or more functions as arguments (e.g., addEventListener, map, filter).

    (b) Returns a new function (e.g., createMultiplier).
*/
// example ;
//\\ (a) Function Accepting Another Function (aka Callback) //\\
const makeSmall = (string) => {
  return string.toLowerCase();
};

const firstWordCapital = function (string) {
  const [firstWord, ...restWords] = string.toLowerCase().split('#');
  return [firstWord.toUpperCase(), ...restWords].join(' ');
};

function mainHigherOrderFunc(string, func) {
  console.log(`Original: ${string}`);
  console.log(`Modified: ${func(string)}`);
}
// here it is HIGHER-ORDER function, taking 'func' CALLBACK function as argument

mainHigherOrderFunc('Marad#HABA#Raja#Jiii#:)', firstWordCapital); // here i'm passing an callBack func,
// i.e. i don't wanna call 'firstWordCapital' func now,
// but yeah wanna call it after mainHigherOrderFunc, so callback :)
mainHigherOrderFunc('Marad HABA Raja Jiii :)', makeSmall);

//\\ (b) Function Returning a New Function (aka Closure) //\\
const createCounter = (num) => {
  let count = num;
  console.log('num :');

  return function () {
    count++;
    console.log(count);
  };
};

const counter = createCounter(5);
counter();
counter();
// here createCounter() returned a FUNCTION and stored in 'counter'
// so now, 'counter' became an 'function',
/* 
return function () {
  count++;
  console.log(count);
};
this is gonna be called by calling 'counter'
*/
// ----------or--------
// we can also directly call it!
createCounter(6)(); // first (6) for outside main HIGH-ORDER func
// nd next () for inside CLOSURE function
