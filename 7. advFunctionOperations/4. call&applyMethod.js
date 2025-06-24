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
      `seat number ${seatNum} of ${this.name}, fligt number ${this.flightNum} has booked for ${travellerName}`,
    );
  },
};

// const iWannaBookASeat = train.bookSeat;
// iWannaBookASeat('Radhe', 78); // won't work bcuz,
/* ⚠️⚠️⚠️ V. V. IMP ⚠️⚠️⚠️ bcuz,,, 
-> here i've assigned train.bookSeat function only, to this variable, not entire Object, right !
-> so, u can imagine an copy of 'bookSeat' object is assigned to 'iWannaBookASeat' which no doubt lose control to rest of the Object's properties 
-> i.e. now we can't acces trian's variables / any other properties using 'iWannaBookASeat' method  

But..But..But... to get access to entire object after assigning only 'bookSeat' func to this variable,

we can use ;
*/
// (i) ARROW FUNCTION inside object, or,
// (ii) .bind() method permanently bind the context
// const iWannaBookASeat2 = train.bookSeat.bind(train);
// iWannaBookASeat2('Radhe', 39);
// (iii) .call() & .apply() method

/*
.call(), .apply() lets you:

    - Set 'this' keyword value explicitly

    - Borrow methods from one object to use on another

    - Execute the function immediately
*/

//\\ ########## call() method ############# //\\
const iWannaBookASeat = train.bookSeat;
iWannaBookASeat.call(train, 'Prabhu', 78);

const iWannaBookASeat2 = flight.bookSeat;
iWannaBookASeat2.call(flight, 'Miku', 20);

/*
HOW .Call() WORKS ?

-> syntax : function.call(objectName, arg1, arg2, ...)
-> whatever objectName i'll give, this variable will get a FULL COPY of that particular object .
-> So, making changes in 'iWannaBookASeat2', won't affect real 'flight' object
*/
// e.g. ;-
iWannaBookASeat2.flightNum = 40949;
console.log(flight);

//\\ ########## apply() method ############# //\\

const seatBookKariba = train.bookSeat;
seatBookKariba.apply(train, ['Prachi', 1]);
// Same result as .call() but arguments are in an array

/*
💡 Then When to Use .apply() :-------
 -> When you have arguments as an array (common with dynamic arguments)

    const args = ['Radhe', 42];
    iWannaBookASeat.apply(train, args);

 ->In ES6+, you can often use the spread operator instead:

    const args = ['Prabhu', 78];
    iWannaBookASeat.call(train, ...args); // Equivalent to .apply()
*/
