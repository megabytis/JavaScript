const student = function (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
};

// Instance methods : using prototype property
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
