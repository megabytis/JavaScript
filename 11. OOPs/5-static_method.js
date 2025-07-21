"use strict";

// static method can be written in two ways
// way - 1
class ClassName {
  static staticMethodName() {
    console.log("Way-1 static method called");
  }
}

// way - 2
class ClassName2 {}
ClassName2.staticMethodName2 = function (a, b) {
  console.log("Way-2 static method called");
};

const obj1 = new ClassName();
const obj2 = new ClassName2();

// CALLING STATIC METHODS USING CLASS'S INSTANCE / OBJECT
obj1.staticMethodName;
obj2.staticMethodName2;
// both won't work, cuz static method can't be called using Class's Instance/objcet

// CALLING STATIC METHODS USING CLASS NAME
// STATIC METHODS ONLY CAN BE CALLED USING THAT PARTICULAR CLASS NAME
ClassName.staticMethodName(); // Way-1 static method called
ClassName2.staticMethodName2(); // Way-2 static method called

/*
Key Rules of Static Methods

    No Instance Access:
    Cannot be called via instance.method().

    No this Context:
    Cannot access instance properties (this.name).

    Inheritance:
    Child classes inherit static methods.

    Use Cases:

        Utility functions (MathUtils.calculate()).

        Factory methods (User.createAdmin()).

*/
