"use strict";

// ##########################################################################
//  🧮 3. reduce() - The Cash Register
// ##########################################################################
// Analogy: You want to calculate total sales (combine all items into one value).
const tips = [3, 6, 2, 10, 1];

// Now sum all tips
const totalTips = tips.reduce((sum, tips) => sum + tips, 0);
console.log(totalTips);
/*
Key Notes:

    Input: Array → Output: Single value (number, string, object).

    Use case: Aggregations (sum, average, max/min).

    Syntax :
    arr.reduce((accumulator, current) => { ... }, initialValue);
*/

// example - 2
// here also we can add (index,arrName) along with (accumulator,currentValue)
// Now i wanna pay tax on profit money only, not on losses
const monthlyPnl = [10500, -2399, 4988, -3879, 443];
const finalPnl = monthlyPnl.reduce(
  (pnlAccumulator, currentPnl, pnlIndex, entireMonthlyPnlArr) => {
    // console.log(entireMonthlyPnlArr);

    console.log(
      `accumulated till ${pnlIndex + 1}th position : ${pnlAccumulator}`
    );

    if (currentPnl > 0) pnlAccumulator += currentPnl;
    return pnlAccumulator;
  },
  0 // this is the initial value of pnlAccumulator
);
console.log(finalPnl);
