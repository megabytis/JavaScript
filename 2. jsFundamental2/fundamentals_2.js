"use strict";
// // This is to activate STRICT MODE , always write this on the top of every .js file
// // to avoid bugs,  to see where is the error

// const myAge = 21;
// let myAgeNextYear = myAge + 2 ;

// if(myAge === 21) myAgeNextYear = (myAge + 1) ;
// if(myAgeNextYear === 22) console.log("Hurrah i'm 22") ;

// // ---------------------- Functions --------------------------
// function carsCollection(tataHarrier, mahindraThar) {
//   const cars = `I have total ${tataHarrier} Tata Harrier cars and ${mahindraThar} Mahindra THARs in my garage .`;
//   return cars;
// }

// const Carss = carsCollection(7, 9);
// console.log(Carss);

// console.log(carsCollection(2, 1));

// // ------------------- function declarations V/S Expressions V/S Arrow Function ----------------------
// // Main difference is that we can call anywhere a function , before/after it's declaraton , but we can't call a function before it's expression

// // Function declarartion :--------
// console.log(finalAmount(20000)) ; // calling bfore declrae

// function finalAmount(withdrawlAmount){ // function declaration
//     return 100000 - withdrawlAmount ;
// }
// console.log(finalAmount(20000)) ; // calling after declare

// // Function Expression :---------
// // console.log(initialAmount(50000)) // calling before expression will show error
// const initialAmount = function(withdrawlAmount){ // function expression
//     return 10000 + withdrawlAmount ;
// }
// console.log(initialAmount(50000)) //callign after function expression

// // Arrow Function :----------
// // More better than the above two , u can also say function in one line
// // e.g.1 :-
// const finalAmount = (withdrawlAmount) => 100000 - withdrawlAmount;
// console.log(finalAmount(20000));

// // e.g.2 :-
// const yearsRemainingForRetirement = (yearOfBirth,firstName) => {
//     const age = 2025 - yearOfBirth ;
//     const retire = 65 - age ;
//     return `${firstName} is going to retire 👴 after ${retire} years later .` ;
// }
// const retire = yearsRemainingForRetirement(2004, 'Madhusudan') ;
// console.log(retire) ;

// // अब कौन इतना झंझट में फसेगा function expression , arrow function लिखके nd all those signs, So, FUNCTION DECLARATION METHOD IS BEST 😁 , but yeah u can write any of these , ur wish

// // ----------------- Function calling another function ----------------
// const rentalIncome = (numOfHomes,rentPerHome) => numOfHomes * rentPerHome
// const lendingIncome = function(numberOfBorrowers, profitPerBorrrower) {
//     return numberOfBorrowers * profitPerBorrrower ;
// }
// function totalIncome() {
//     return rentalIncome(10,5000) + lendingIncome(35, 10000) ;
// }

// console.log(`My total income per month is ${totalIncome()} 💵`) ;

// // ---------------------- Array -------------------
// const bhaiChara = ["Liku", "Milan", "Sahil"];
// console.log(bhaiChara);
// const bhaiNumbers = bhaiChara.length;

// const brotherHood = new Array("Harry", "Chrish", "Rob");
// console.log(brotherHood);
// const brotherNumbers = brotherHood.length;

// console.log(bhaiChara[2]);
// bhaiChara[1] = "Miku";
// console.log(bhaiChara);

// const bhaiAndBrother = [
//   bhaiNumbers,
//   brotherNumbers,
//   bhaiChara,
//   brotherHood,
//   "Kamal hai yaar 😄",
// ];
// console.log(bhaiAndBrother);

// function calculateAge(yearOfBirthOfBhais) {
//   return 2025 - yearOfBirthOfBhais;
// }

// const yearOfBirthOfBhais = [2003, 2004, 2000];

// console.log(`${bhaiChara[0]} : ${calculateAge(yearOfBirthOfBhais[0])}
// ${bhaiChara[1]} : ${calculateAge(yearOfBirthOfBhais[1])}
// ${bhaiChara[bhaiNumbers - 1]} : ${calculateAge(
//   yearOfBirthOfBhais[bhaiNumbers - 1]
// )}`);

// // ------------------ Basic Array Operations -----------------
// // 'push()' method : to add elemets at the end of the Array
// const bhaiChara = ["Liku", "Miku", "Sahil"];
// console.log(bhaiChara) ;
// bhaiChara.push('Ramya') ;
// console.log(`${bhaiChara}
// length : ${bhaiChara.length}`) ;

// // 'unshift()' method : to add new elemet at athe starting of the Array
// bhaiChara.unshift('Subham');
// console.log(`${bhaiChara}
// length : ${bhaiChara.length}`) ;

// // 'pop()' method : to remove last element
// bhaiChara.pop() ;
// console.log(`${bhaiChara}
// length : ${bhaiChara.length}`) ;

// // 'shift()' method : to remove the first elemet
// bhaiChara.shift() ;
// console.log(`${bhaiChara}
// length : ${bhaiChara.length}`) ;

// // 'includes()' method : to know if an element present inside an array or not true/false
// console.log(bhaiChara.includes('Gaandu'))
// console.log(bhaiChara.includes('Liku'))

// //  'indexOf()' method : to know the index number of a particular element
// console.log(`Index number os Miku insid etha array is ${bhaiChara.indexOf('Miku')}`) ;

// // ------------------- OBJECTS ----------------------
// // here object is like structure in C lang :) It remains like Key value pair , here 'keys' will be called as 'Object elements' and 'values' will be called as 'obj element values'
// // e.g. :-
// const miku = {
//   firstName: "Madhav",
//   lastName: "Bhukta",
//   age: 2025 - 2004,
//   profession: "Inforamtion Technology",
//   friends: ["Soumya Soumyajit", "Prabhanjan", "Trinath"],
// };
// console.log(miku);
// console.log(miku.firstName);
// miku.firstName = "Madhusudan";
// console.log(miku.firstName);
// console.log(
//   `${miku.firstName} has ${miku.friends.length} friends ${miku.friends} & his best friend is ${miku.friends[0]}`
// );

// const userInput = prompt("What do you want to know about miku ? ");

// switch (userInput) {
//   case "firstName":
//     console.log(miku.firstName);
//     break;

//   case "lastName":
//     console.log(miku.lastName);
//     break;

//   case "age":
//     console.log(miku.age);
//     break;

//   case "profession":
//     console.log(miku.profession);
//     break;

//   case "friends":
//     console.log(miku.friends);
//     break;

//   default:
//     console.log(
//       "Please yaar choose between firstName,lastName, age, profession, freinds ."
//     );
//     break;
// }

// // ------------------ Object Methods --------------------
// /* MOST IMPORTANT 👇
// As said, everything we can write inside an OBJECT is in 'key:value' pair style , we can't directly write a function or if-else statement directly
// */
// // for calling nested methods , i.e. method inside method :-
// const demo = {
//   method1: function (test) {
//     this.method2 = function (test, vest) {
//       return test * vest;
//     };
//     this.method3 = function (test) {
//       return test;
//     };
//     return test;
//   },
// };

// // Step 1: Initialize the methods
// demo.method1();

// // Step 2: Now use them
// console.log(demo.method2(2, 3)); // 6
// console.log(demo.method3(5)); // 5

// // e.g. :-
// const miku = {
//   firstName: "Madhav",
//   lastName: "Bhukta",
//   yearOfBirth: 2004,
//   profession: "UnderGrad student",

//   calculateAge: function () {
//     this.fullName = this.firstName + this.lastName; // creating a variable inside an Object's Method
//     return `Age of ${this.fullName} is ${2025 - this.yearOfBirth}`;
//   },

//   eligibleToGetDrivingLicence() {
//     if (2025 - this.yearOfBirth >= 18) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// };

// console.log(miku.calculateAge());
// console.log(miku.eligibleToGetDrivingLicence());

// const aOrNo = miku.eligibleToGetDrivingLicence() ? "a" : "no";

// console.log(
//   `${miku.fullName} is a ${2025 - miku.yearOfBirth} years old ${
//     miku.profession
//   }, and he has ${aOrNo} driver's licence .`
// );

// // ------------- Looping statements -------------
// -----for loop -----
// for (let i = 1; i <= 7; i++) {
//   console.log(`Javascript Rocks 🤘 ${i}`);
// }

// const age = new Array(15, 20, 99, 55, 12);
// const dob = [];

// for(let i=0; i<age.length; i++){
//   dob.push(age[i]);
// }
// console.log(dob);

// // -------- while loop ---------
// let j = 0;
// while (j <= 7) {
//   console.log(`Javascript Rocks 🤘 ${j}`);
//   j++;
// }
