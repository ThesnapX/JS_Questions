// Write a program that takes a number from 1 to 7 and prints the day of the week using a switch statement.

let num = 10;
let week;
switch (num) {
  case 1:
    week = "Monday";
    break;
  case 2:
    week = "Tuesday";
    break;
  case 3:
    week = "Wednesday";
    break;
  case 4:
    week = "Thursday";
    break;
  case 5:
    week = "Friday";
    break;
  case 6:
    week = "Saturday";
    break;
  case 7:
    week = "Sunday";
    break;
  default:
    week = "Invalid number. The number should be between 1-7";
}

console.log(week);
