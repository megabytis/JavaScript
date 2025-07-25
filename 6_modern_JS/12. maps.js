'use strict';

/* ⚠️⚠️⚠️ IMPORTANT ⚠️⚠️⚠️
-> map is same as object, i.e. everything is in key, value pair, but not like key:value, but key,value  😀 
-> in object key should be string always, but here in map key can be of any data_type (e.g. number, string, boolean, array) etc...
*/

/* Built-in METHODS :---
set(), get(), has(), delete(), size, clear()

*/

// 2 ways to insert elements to MAP
// METHOD - 1
const hotel = new Map([
  [2000, '1BHK Price'],
  ['swimming Pool Available', true],
  [null, 'WTF'],
]);

// METHOD - 2
// set() method : to add key,value to map one by one
hotel.set('name', 'Hotel Shanti');
hotel.set('location', 'Angul');

// we can set many key,value at a time also,
// using : mapName.set().set().set() .... like this
hotel
  .set(1, 'have 1BHK')
  .set(2, 'have 2BHK')
  .set(3, 'have 3BHK')
  .set(true, 3000)
  .set('couplesAllowed', false);

console.log(hotel);
// here i 1st inserted everything to map, then logged it
// but we can directly log it wile using set(), it will return entire map, e.g.:---
console.log(hotel.set(null, undefined));

// get() method : get value by key
console.log(hotel.get(1));
console.log(hotel.get(true));

// has() method : to check wheather any key is +nt inside map or not
console.log(hotel.has(false));
console.log(hotel.has(2));

// delete() method : to delete an key
console.log(hotel.delete(1));
console.log(hotel);

// size property : to gt no. of key,value pairs inside it
console.log(hotel.size);

// clear() method : to delete everything from map
// hotel.clear();
// console.log(hotel);

// Array as map key
const xtraFacility = ['with balcony', 'with kitchen'];
hotel.set(xtraFacility, 2);
hotel.set(['with diningRoom'], 1);
console.log(hotel);

// ⚠️⚠️⚠️ V.V.V. IMPORTANT ⚠️⚠️⚠️
console.log(hotel.get(['with diningRoom'])); // ❌ result : undefined🤣
/* it's like asking: 

  "Hey Map, do you have this brand-new array ['with diningRoom'] I just made?"
  And the map says: ❌ "Nope, never seen that array before."  
  cuz, arrays are objects and objects (including arrays) are compared 'by reference', not 'by value'
     
*/

console.log(hotel.get(xtraFacility)); // ✅ This works
/*
  cuz, here ['with balcony', 'with kitchen'] is stored in xtraFacility, which is a array name/variable
  which is 'by value' not 'by reference'
     
*/

// we can pass also DOM manupulation stuffs inside it
// hotel.set(document.querySelector('h1', 'Header-1'));
// like this

// ITERATING a MAP
// const officeQuiz = new Map([
//   ['question', 'Who is senior ?'],
//   [1, 'SDE-1'],
//   [2, 'Tech-Lead'],
//   [3, 'Manager'],
//   ['correct', 3],
//   [true, 'correct Answer 💐'],
//   [false, 'Try Again'],
// ]);

// const quizAns = prompt(`${officeQuiz.get('question')}
// 1 : ${officeQuiz.get(1)}
// 2 : ${officeQuiz.get(2)}
// 3 : ${officeQuiz.get(3)}
// `);

// for (const [key, value] of officeQuiz) {
//   if (typeof key === 'number') {
//     console.log(`Option-${key} : ${value}`);
//   }
// }

// if (quizAns === officeQuiz.get('correct')) {
//   // console.log(officeQuiz.get(true));
//   alert(officeQuiz.get(true));
// } else {
//   // console.log(officeQuiz.get(false));
//   alert(officeQuiz.get(false));
// }

// convert MAP to ARRAY
console.log('________________________');

console.log([...hotel]);
console.log([...hotel.keys()]);
console.log([...hotel.values()]);
console.log([...hotel.entries()]);
