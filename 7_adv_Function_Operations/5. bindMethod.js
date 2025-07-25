'use strict';

const train = {
  name: 'Bande Bharat',
  trainNum: 803003,
  bookings: [],

  bookSeat(travellerName, seatNum) {
    console.log(
      `seat number ${seatNum} of ${this.name}, train number ${this.trainNum} has booked for ${travellerName}`,
    );
  },
};

const flight = {
  name: 'Vistara',
  flightNum: 803003,
  bookings: [],

  bookSeat(travellerName, seatNum) {
    console.log(
      `seat number ${seatNum} of ${this.name}, flight number ${this.flightNum} has booked for ${travellerName}`,
    );
  },
};

// .bind() creates a new function with permanently bound context
const bookTrain = train.bookSeat.bind(train);
bookTrain('Miku', 57); // Works - 'this' keyword is permanently bound to train

const bookFlight = flight.bookSeat.bind(flight);
bookFlight('Bhagodi', 90); // Works - 'this' is bound to flight

// ⚠️ Important Notes ⚠️
/*
1. .bind() returns a NEW function with permanent context binding
2. Arrow functions ignore .bind() (they lexically bind 'this')
3. The binding is permanent - subsequent .call()/.apply() won't override it
*/

// When to use .bind():
/*
- When you need to pass a function reference that maintains its context
- For event handlers where you don't control when the function is called
- When you want to create a function with pre-set arguments (partial application)
*/

// Incorrect usage that won't work:
// const wrongBind = bookSeat.bind(flight); // ❌ bookSeat is not defined
// Must reference the method through its object: flight.bookSeat.bind(flight)
