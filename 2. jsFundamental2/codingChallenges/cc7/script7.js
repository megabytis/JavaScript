"use strict";

// Coding Challenge #7

/*
Let's say you are buiding a time tracking application for  freelancers . At some point in building this app, you need a function tht recieves daily work hours for a certain week, and returns :
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Wheather the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

function freelancers(hoursData) {
  let totalHoursWorked = 0,
    nthdayWithMostHoursWorked = hoursData[0],
    dayWithMostHoursWorked = "",
    numOfDaysWorked = 0,
    didWorkedFullTime = "No",
    mostHoursWorked;

  for (let i = 0; i < hoursData.length; i++) {
    totalHoursWorked += hoursData[i];

    if (hoursData[i] === 0) continue;
    else numOfDaysWorked += 1;

    if (hoursData[i] > nthdayWithMostHoursWorked)
      mostHoursWorked = hoursData[i];
    nthdayWithMostHoursWorked = i;
  }

  switch (mostHoursWorked) {
    case hoursData[0]:
      dayWithMostHoursWorked = "Monday";
      break;
    case hoursData[1]:
      dayWithMostHoursWorked = "Tuesday";
      break;
    case hoursData[2]:
      dayWithMostHoursWorked = "Wednesday";
      break;
    case hoursData[4]:
      dayWithMostHoursWorked = "Thursday";
      break;
    case hoursData[5]:
      dayWithMostHoursWorked = "Friday";
      break;
    case hoursData[6]:
      dayWithMostHoursWorked = "Saturday";
      break;
  }

  if (totalHoursWorked >= 35) didWorkedFullTime = "Yes";

  return `  Total hours worked : ${totalHoursWorked} hours
  Day with most hour worked : ${dayWithMostHoursWorked} i.e. ${nthdayWithMostHoursWorked}th day
  Number of Days Worked : ${numOfDaysWorked}
  Worked full time or not : ${didWorkedFullTime}`;
}

console.log(freelancers([7.5, 8, 6.5, 0, 8.5, 4, 0]));
