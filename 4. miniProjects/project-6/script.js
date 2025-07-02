"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// MONEYFLOW APP

// Data
const account1 = {
  owner: "Prabhanjan Sahoo",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Suryanarayan Acharya",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Karan Samal",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Arpita Pradhan",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// Updating 'movements' div
const updatingMovements = function (account) {
  account.forEach(function (value, index) {
    let depositOrWithdrawl = value > 0 ? "deposit" : "withdrawal";

    const htmlElement = `
        <div class="movements__row">
          <div class="movements__type movements__type--${depositOrWithdrawl}">
            ${index} ${depositOrWithdrawl}
          </div>
          <div class="movements__value">₹${value}</div>
        </div>
  `;

    containerMovements.insertAdjacentHTML("afterbegin", htmlElement);
  });
};

updatingMovements(account1.movements);

// Now trynna extract username from actual name & place those usernames in respective accounts
const addingUserName = (accounts) => {
  accounts.forEach((acc) => {
    // ########### MANUAL METHOD : 1 #################
    // // first making username out of Real Name
    // let usrname = "";
    // for (const letter of acc.owner.split(" ")) {
    //   usrname += letter[0].toLowerCase();
    // }
    // acc.username = usrname;
    // ########### using BIG-CHAIN method : 2 ##########
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((n) => n[0])
      .join("");
  });
};
addingUserName(accounts);

// Now setting Currentbalance
const settingCurrentBal = (movements) => {
  const storeage4LebelBal = movements.reduce(
    (valsSum, currentVal) => valsSum + currentVal,
    0
  );
  labelBalance.textContent = `₹${storeage4LebelBal}`;
};
settingCurrentBal(account1.movements);
// console.log(labelBalance.textContent);

// Now setting total IN, OUT & INTEREST i.e. total deposits, withdrawl & interest user get :)
const summary = (movements) => {
  // IN
  const totalDeposits = movements
    .filter((mov) => mov > 0)
    .reduce((acc, curr) => acc + curr);

  labelSumIn.textContent = `₹${totalDeposits}`;

  // OUT
  const totalWithdrawl = movements
    .filter((mov) => mov < 0)
    .reduce((acc, curr) => acc + curr);

  labelSumOut.textContent = `₹${Math.abs(totalWithdrawl)}`;
  // here Math.abs() will remove the -ve sign from withdrawl

  // INTEREST
  const totalInterest = movements
    .filter((mov) => mov > 0)
    .map((price) => (price * 1.8) / 100)
    .reduce((acc, curr) => acc + curr, 0);
  labelSumInterest.textContent = `₹${parseFloat(totalInterest.toFixed(2))}`;
  // here i've used parsseFloat(). toFixed() methods to display interest money upto a fixed decimal point
};
summary(account1.movements);
