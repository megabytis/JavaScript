"use strict";

// Coding Challenge #6

// we work for a company building a smart home thermometer . Our most recent task is this : "Given an array of thermometer of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error. "

// const temperatures = [5, "error", 21, "error", -7, -3, 93, -10, 73, 22, -29];

// function amplitude(temp) {
//   let bigTemp = 0;
//   let smallTemp = 0;

//   for (let i = 0; i < temp.length; i++) {
//     if (typeof temp[i] === String) {
//       continue;
//     } else {
//       if (temp[i] > bigTemp) {
//         bigTemp = temp[i];
//       } else if (temp[i] < smallTemp) {
//         smallTemp = temp[i];
//       }
//     }
//   }
//   console.log(bigTemp, smallTemp);
//   return bigTemp - smallTemp;
// }

// console.log(
//   `The amplitude of  [${temperatures}]  is  ${amplitude(temperatures)} .`
// );

// Now if function will take 2 temperature arrays
const temp1 = [2, 35, "error", 9, 89, 21, 20];
const temp2 = new Array(345, 33, 634, "error", 222, 34);

// ---OR----
// for (let i = 0; i < temp2.length; i++) {
//   temp1.push(temp2[i]);
// }

function amplitude(temp1, temp2) {
  const temp1Temp2 = temp1.concat(temp2);
  let bigTemp = temp1Temp2[0];
  let smallTemp = temp1Temp2[0];

  for (let i = 0; i < temp1Temp2.length; i++) {
    const currentTemp = temp1Temp2[i];
    if (typeof currentTemp === String) {
      continue;
    } else {
      if (currentTemp > bigTemp) {
        bigTemp = currentTemp;
      } else if (currentTemp < smallTemp) {
        smallTemp = currentTemp;
      }
    }
  }
  console.log(bigTemp, smallTemp);
  return bigTemp - smallTemp;
}

console.log(`The amplitude of is  ${amplitude(temp1, temp2)} .`);
