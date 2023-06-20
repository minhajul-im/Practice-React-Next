// 1. Date Object

//a. Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns the day of the week for that date. The function should use the Date object.
const getDateFunc = (date) => {
  let convertStr = date + ""; // fast of all convert string

  const dateArr = convertStr.split("-"); // split return array

  const year = parseInt(dateArr[0]);

  const month = parseInt(dateArr[1]);

  const day = parseInt(dateArr[2]);

  const dateFunc = new Date(year, month, day);

  const weekName = [
    // take week name
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "ThusDay",
    "Friday",
    "Saturday",
  ];

  const dayName = weekName[dateFunc.getDay()]; // get to a specific index number in array

  console.log(dayName);

  return dayName;
};

// b. Implement the function to display the day of the week for the current date.
const date = "2002-03-10";
const day = getDateFunc(date);
console.log(day);

// 2.Math Object:

// a. Write a JavaScript function that takes an array of numbers as input and returns the square root of the sum of squares of all the numbers. Use the Math object to perform the necessary calculations.
const sumSquareFunc = (arr) => {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  const root = Math.sqrt(sum).toFixed(2);

  return root;
};

// b. Implement the function to display the square root of the sum of squares for an array of numbers.
let arr = [1, 3, 4, 5, 7, 8, 9];
const sumSquareVal = sumSquareFunc(arr);
console.log(sumSquareVal);

// 3.Numbers:

// a. Write a JavaScript function that takes a positive integer as input and returns true if it is a prime number, otherwise returns false.
const positiveNum1 = (num) => {
  if (num === undefined || num < 2) return false;

  if (num === 2) return true;

  for (let i = 0; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const positiveNum2 = (num) => {
  if (num === undefined || num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else {
    for (let i = 0; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }
};

// b. Implement the function to check if a given positive integer is a prime number.
const positiveNumPrime1 = positiveNum1(2);
console.log(positiveNumPrime1);

const positiveNumPrime2 = positiveNum2(5);
console.log(positiveNumPrime2);
