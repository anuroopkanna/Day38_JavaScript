// Prompt the user for input
var dayNumber = prompt("Enter the numbers between 1 and 7:")

// Convert the input to a number
dayNumber = parseInt(dayNumber);

// Initialize a variable to hold the weekday name
var weekday;

// Use a switch statement to determine the weekday
switch (dayNumber) {
  case 1:
    weekday = "Sunday";
    break;
  case 2:
    weekday = "Monday";
    break;
  case 3:
    weekday = "Tuesday";
    break;
  case 4:
    weekday = "Wednesday";
    break;
  case 5:
    weekday = "Thursday";
    break;
  case 6:
    weekday = "Friday";
    break;
  case 7:
    weekday = "Saturday";
    break;
  default:
    weekday = "Invalid input. Please enter a number between 1 and 7.";
}

// Display the weekday
console.log(weekday);
