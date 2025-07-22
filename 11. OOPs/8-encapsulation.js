"use strict";

// Encapsulation in JavaScript: Private Fields & Methods (ES6+)

// ###########################
// 1. Private Class Fields (#)
// ###########################
class Wallet {
  #balance = 0;

  deposit(amount) {
    this.#balance = amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const w1 = new Wallet();
w1.deposit(10000);
console.log(w1.getBalance());
// console.log(w1.#balance); // ❌ SyntaxError: Private field must be declared in class

// ######################
// 2. Private Methods (#)
// ######################
class Auth {
  #validatePassword(password) {
    return password.length >= 8;
  }

  login(username, password) {
    if (this.#validatePassword(password)) {
      console.log("Login successful");
    }
  }
}

const a1 = new Auth();
a1.login("Milan", "2978500390237");
// a1.#validatePassword(); // ❌ Error (private)
