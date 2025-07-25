"use strict";

const parentObject = {
  greet() {
    console.log(`Hello, ${this.name}!`);
  },
};

const childObject = Object.create(parentObject);
childObject.name = "Miku";
childObject.greet();

// it seems like Object Literals, isn't it :)
/*
⚠️⚠️⚠️ But, When to Use Which? ⚠️⚠️⚠️

Use object literals i.e. {} for:
  - Simple data holders.
  - Objects needing no inheritance.
*/
const config = {
  apiUrl: "https://example.com",
  server: 8080,
  usingOn: "localhost",
};
console.log(config.apiUrl);

/*
Use Object.create() for:
  - Shared methods (memory efficiency).
  - Explicit inheritance chains.
*/
const animal = {
  eat(foodName) {
    console.log(foodName);
  },
};
const dog = Object.create(animal);
dog.eat("cake");
