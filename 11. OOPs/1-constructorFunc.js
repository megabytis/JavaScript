"use strict";

// CONSTRUCTOR FUNCTION
const Student = function (name, birthYear) {
  // Instance properties
  this.name = name;
  this.birthYear = birthYear;

  // // never do like this ❌❌❌
  // this.calcAge = function () {
  //   return 2025 - this.birthYear;
  // };
  // // cuz, if we'll make 1000 copies, then 1000 functions will be created 😭, memory wastage
  // // so better use 'prototype'
};

const s1 = new student("miku", 2004);
console.log(`Birthyear: ${s1.birthYear}`);
console.log(`Name: ${s1.name}`);
/* 
A function becomes a constructor when called with the new keyword

what happened after using 'new' ;
1. a new object / {} created in the name 's1' & whatever properties constructor func 'Student' have will be included inside this 's1' obj
2. function is called , where 'this' refere  to that obj i.e. {}
3. Links the object’s __proto__ to the constructor’s prototype.
4. Automatically returns this (the new object).
*/

/* in Backend :---

const s1 = {
  name: "miku",
  birthYear: 2004,
  __proto__: student.prototype,
};

*/

// more objects
const s2 = new student("Raghu", 22);
const s3 = new student("Sheetal", 20);

// so, we can say s1, s2, s3 are instances/objects of 'student'
// let's check ;-
console.log(s2 instanceof student); // true :)

const s4 = "Miku";
console.log(s4 instanceof student); // false
