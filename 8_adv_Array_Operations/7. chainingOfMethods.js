"use strict";

const transactionsInUSD = [230, -232, 2313, 890, -1900, -679];

const USDtoINR = 86;

const depositsInINR = transactionsInUSD
  .filter((trans1) => trans1 > 0)
  .map((trans2) => trans2 * USDtoINR)
  .reduce((acc, curr) => acc + curr, 0);

console.log(depositsInINR);
