"use strict";

// class expression
// const Student = class { };

// class declaration
class Student {
  constructor(name, birthYear, schoolName) {
    this.name = name;
    this.birthYear = birthYear;
    this.schoolName = schoolName;
  }

  // Class Method
  calcAge() {
    console.log(2025 - this.birthYear);
  }
}

// Prototype Method
Student.prototype.greet = function () {
  console.log(`Hey ${this.name}`);
};

// Object
const s1 = new Student(
  "Ritesh Bhutia",
  2004,
  "D.A.V. public school, Ananta vihar (O.M.), Talcher ",
);

console.log(s1.birthYear);
s1.calcAge();
s1.greet();

// Class Methods vs. Prototype Methods
console.log(Student.prototype.hasOwnProperty("calcAge"));
console.log(Student.prototype.hasOwnProperty("greet"));
/*
so, it means, we add an method to a class's Prototype using "Prototype method",
but, writing methods iniside class diretly, also being added to class's Prototype automatically under the hood :)
=> so, finally IT'S BETTER TO METHODS DIRETLY INSIDE CLASS

Only use 'Prototype Methods' when:

    - Extending built-in objects (Array, String, etc.).
    - Dynamically adding methods at runtime (rarely needed).
*/
