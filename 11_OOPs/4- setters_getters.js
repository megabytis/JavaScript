"use strict";

// In Objects (Object Literals)
const user = {
  _email: "user@example.com", // Convention: _prefix for "private" fields

  // Getter
  get email() {
    return this._email.toUpperCase();
  },

  // Setter
  set email(value) {
    this._email = value;
  },
};

user.email = "new@example.com"; // setter
console.log(user.email); // "NEW@EXAMPLE.COM" (getter)

// another imp thing
console.log(typeof user.email); // string , so it's not an function 🤣, it's an property
// ⚠️⚠️⚠️ Very IMPORTANT ⚠️⚠️⚠️
/*
both '_email' and 'email' are keys/properties of the object, but they behave very differently

1. _email (The Actual Data Storage)

    A regular property that directly stores the value.

    Convention: The _ prefix suggests it's "private" (but technically still accessible).

2. email (The Getter/Setter Property)
  - A special property that doesn't store data itself.
  - Backed by getter/setter functions:
      # When you read user.email → Calls the get email() function.
      # When you assign user.email = "new@example.com" → Calls the set email(value) function.
*/
