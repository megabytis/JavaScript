"use strict";
/*
Inheritance in JavaScript: 3 Key Approaches

inheritance in JavaScript using:
(i) Constructor Functions (ES5 style)
(ii) ES6 Classes (syntactic sugar for prototypes)
(iii) Object.create() (pure prototypal inheritance)
*/

// #####################################
// (i) Constructor Functions (ES5 style)
// #####################################

// Parent Constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}
// methods for parent Constructor
Person.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

// Child Constructor
function Student(name, age, grade) {
  this.grade = grade;

  // cuz name, age are also present in Person class, no need to initialize here again
  // step-1 :
  // inheriting 'Person' Constructor Function
  Person.call(this, name, age); // like super() in python
}

// step-2 :
// linking parent prototypes to child
Student.prototype = Object.create(Person.prototype);

// step-3
// adding child methods
Student.prototype.introduce = function () {
  console.log(`Hi, My name is ${this.name}, i am in ${this.grade}`);
};

// object creation
const s1 = new Student("Miku", 21, "+3");

// using Object
console.log(s1.age);
s1.greet(); // calling Parent class's function
s1.introduce(); // calling child class's own function

// ⚠️⚠️⚠️ Important ⚠️⚠️⚠️
/*
Key Steps involved for inheriting parent class to child class :

    1. Call parent constructor
      Person.call(this, ...parent_variables...)

    2. Link prototypes (
      childObj.prototype = Object.create(Parent.prototype)

    3. Fix constructor reference.
*/

// #################################
// (ii) Inheritance with ES6 Classes
// #################################

// parent class
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

// child class
class Student2 extends Person2 {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying !`);
  }
}

// creating object
const s2 = new Student2("Debashish", 22, "D");
s2.greet(); // calling Parent class's function
s2.study(); // calling child class's function

// ###################################################
// (iii) Inheritance with Object.create() (Prototypal)
// ###################################################

// Parent Object
const Person3 = {
  init(name, age) {
    this.name = name;
    this.age = age;
  },
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
};

// child object
const Student3 = Object.create(Person3);
Student3.init = function (name, age, grade) {
  Person3.init.call(this, name, age); // "super" call
  this.grade = grade;
};

Student3.study = function () {
  console.log(`${this.name} is studing! `);
};

// creating object from the above\
const s3 = Object.create(Student3);
s3.init("Madhusmita", 20, "A+");
s3.greet();
s3.study();
