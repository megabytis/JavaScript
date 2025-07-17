const student = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
};

// Instance methods : using prototype property
// prototype is an OBJECT
student.prototype.welcome = function () {
  console.log(`Hello ${this.name}`);
};

student.prototype.calcAge = function () {
  return 2025 - this.birthYear;
};

const s1 = new student("Madhusudan", 21);
s1.welcome();
console.log(s1.calcAge());
// console.log(student.prototype);

const student2 = new student("Prachi", 18);
student2.welcome();
console.log(student2.calcAge());
console.log(student2.__proto__);
console.log(student.prototype);

/*
How It Works Under the Hood :-

[Student Instance (s1)] 
  │── name: "Madhusudan" (own property)
  └── __proto__: Student.prototype
       │── greet() (shared method)
       └── __proto__: Object.prototype
*/
/*
NOTE :

prototype is a property of constructor functions (only).

__proto__ is a property of objects, pointing to their prototype.
*/

/*  ⚠️⚠️⚠️ IMPORTANT ⚠️⚠️⚠️
we know that in Backend :---

const s1 = {
  name: "miku",
  birthYear: 2004,
  __proto__: student.prototype,
};

so, s1 obj don't have welcome(), calcAge() func, but student.prototype have these.
nd s1 object's __proto__ holds 'student.prototype'.

that's how all r connected 
*/

/*
Prototype Chain Visualization (Improved)

s1 (Instance)
│── name: "Madhusudan" (own property)
│── birthYear: 2004 (own property)
└── __proto__: Student.prototype 
     │── welcome() (shared method)
     │── calcAge() (shared method)
     │── constructor: Student() (reference back)
     └── __proto__: Object.prototype 
          │── toString() (default JS methods)
          │── hasOwnProperty()
          └── __proto__: null (end of chain)

*/
// ################## othe built-In methods #####################
console.log(s1.__proto__ === student.prototype); // true
console.log(student.prototype.isPrototypeOf(s1)); // true
console.log(student.prototype.isPrototypeOf(student)); // false

// prototype of linked objects
student.prototype.schoolName = "D.A.V.";
console.log(s1.schoolName, student2.schoolName);

console.log(s1.hasOwnProperty("schoolName"));
console.log(student2.hasOwnProperty("namakarana"));
console.log(student.hasOwnProperty("schoolName"));
