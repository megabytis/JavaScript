"use strict";

// As the name says ;
// 'findIndex' returns Index by finding the given element
const arr = [
  {
    name: "Karan Kundra",
    age: 90,
    sharabi: true,
  },
  {
    name: "Raghab Yadubanshi",
    age: 23,
    sharabi: false,
  },
  {
    name: "Javed Ali",
    age: 48,
    sharabi: true,
  },
  {
    name: "Vaishali Thakur",
    age: 23,
    sharabi: false,
  },
];

const whatIsTheIndex = arr.findIndex((acc) => acc.name.includes("Thakur"));

console.log(whatIsTheIndex);

console.log(arr.findIndex((profile) => profile.age > 50));
