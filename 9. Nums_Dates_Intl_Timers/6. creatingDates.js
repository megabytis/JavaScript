// "use strict";

// // ===== 1. CREATING DATES =====
// console.log("Current date:", new Date());
// console.log("From ISO string:", new Date("2023-07-15"));
// console.log("From components:", new Date(2023, 6, 15)); // July 15, 2023
// console.log("From timestamp:", new Date(1689456000000));

// // ===== 2. GETTING COMPONENTS =====
// const date = new Date();
// console.log("\nDate Components:");
// console.log("Full Year:", date.getFullYear());
// console.log("Month (0-11):", date.getMonth()); // default : january - 0
// console.log("Date (1-31):", date.getDate());
// console.log("Day (0-6):", date.getDay()); // default : sunday - 0
// console.log("Hours (0-23):", date.getHours());
// console.log("Minutes:", date.getMinutes());
// console.log("Seconds:", date.getSeconds());
// console.log("Milliseconds:", date.getMilliseconds());

// // ===== 3. MODIFYING DATES =====
// const modDate = new Date();
// console.log("\nPre-Modified Date:", modDate);
// modDate.setFullYear(2024);
// modDate.setMonth(11); // December
// modDate.setDate(25); // Christmas
// modDate.setHours(0, 0, 0, 0); // Midnight
// console.log("sModified Date:", modDate);

// // ===== 4. FORMATTING =====
// console.log("\nFormatted Dates:");
// console.log("toLocaleString:", date.toLocaleString());
// console.log("toLocaleDateString:", date.toLocaleDateString());
// console.log("toLocaleTimeString:", date.toLocaleTimeString());
// console.log(
//   "Custom Format:",
//   `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
// );

// // ===== 5. DATE MATH =====
const date1 = new Date("2023-07-15");
const date2 = new Date("2023-07-20");
console.log("\nDate Math:");
console.log("Difference in ms:", date2 - date1);
console.log("Add 5 days:", new Date(date1.getTime() + 5 * 24 * 60 * 60 * 1000));
// here, adding 5 days -> *24 i.e. convert days to hours -> *60 i.e. convert hours to minutes -> *60 i.e. minutes to seconds -> *1000 i.e. sec to millisec by multiplying all
console.log(
  "Days between:",
  Math.round((date2 - date1) / (1000 * 60 * 60 * 24))
);
// here the reverse, i.e. milisec -> sec -> minutes -> hours -> days , by deviding all

// // ===== 6. COMPARISON =====
// console.log("\nComparison:");
// console.log(
//   "Same dates?",
//   new Date("2023-01-01").getTime() === new Date("2023-01-01").getTime()
// );
// console.log(
//   "Different dates?",
//   new Date("2023-01-01").getTime() === new Date("2023-01-02").getTime()
// );

// // ===== 7. LIBRARIES =====
// // Recommended Libraries:
// // - Moment.js (legacy)
// // - date-fns (modern)
// // - Luxon (powerful alternative)
