"use strict";

class Counter {
  constructor() {
    this.value = 0;
  }

  add(num) {
    this.value += num;
    return this;
  }

  subtract(num) {
    this.value -= num;
    return this;
  }

  print() {
    console.log(this.value);
    // return this;
  }
}

// chaining in action
new Counter().add(8).subtract(2).add(3).print();
