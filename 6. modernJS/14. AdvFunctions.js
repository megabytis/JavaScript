'use strict';

// ###############################################################
// ##################### DEFAULT PARAMETERs ######################
// ###############################################################

const takeCollegeAdmission = (
  boardPercentage,
  studentName,
  collegeName = 'Utkal University',
) => {
  const finalAdm = {
    boardPercentage,
    studentName,
    collegeName,
  };

  console.log(finalAdm);
};

takeCollegeAdmission(78);
takeCollegeAdmission(80, 'Madhusudan Bhukta');
takeCollegeAdmission(90, 'Amuka Dhamuka', 'KIIT');

// ########################################################################
// ########## pass by VALUE (PBV) v/s pass by REFERENCE (PBR) #############
// ########################################################################

/* ⚠️ IMP ⚠️ ;
Remember 🤨 ?
-> (variables/Primitives) r PBV, directly stored in CALL STACK
-> but (objects & Arrys) r PBR, stored in HEAP & referenced in Call Stack
*/
const collegeName = 'Utkal University';
const student = {
  name: 'Madhusudan Bhukta',
  ID: 'PBR100',
};

function entryToCollege(collegeLocation, student, collegeName) {
  collegeLocation = 'Bhubaneswar';
  student.ID = 'PBR209U';
  collegeName = 'NIIS college of Institute';

  if (student.ID.includes('PBR') && student.ID.endsWith('U')) {
    console.log(
      `Mr. ${student.name} welcome to ${collegeName}, ${collegeLocation}`,
    );
  } else {
    console.log('Invalid ID');
  }
}

entryToCollege('BBSR', student, collegeName);
console.log(student.ID);
console.log(collegeName);
/* ⚠️⚠️ IMP ⚠️⚠️
See, here student ID is changed permanently, but collegeName not changed permanently, only changed inside function block
-> bcuz, student ID is stored inside 'student' OBJECT, which is PBR LoL😆, 
but collegeName is just a variable/Primitive, which is PBV, so 2 copies of it being created, one is outside & another is inside function block .
*/

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
// (a) Function Accepting Another Function (aka Callback)
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

// Callback Function
function logNumber(num) {
  console.log(`Number: ${num}`);
}

repeat(3, logNumber);

// (b) Function Returning a New Function (aka Closure)
function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter();
counter();
