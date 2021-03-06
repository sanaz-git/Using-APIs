// Exercise 2: Is it a double digit number?

// Complete the function called checkDoubleDigits such that:
// It takes one argument: a number
// It returns a new Promise.
// If the number is between 10 and 99 it should resolve to the string "This is double digit number!".
// For any other number it should reject with an an Error object containing: 
// "Expected a double digit number but got number", where number is the number that was passed as an argument.

function checkDoubleDigits(number) {
    return new Promise((resolve, reject) => {
      if (number >= 10 && number <= 99) {
        resolve('This is a double digit number!');
      } else {
        reject(`Expected a double digit number but got ${number} !`);
      }
    })
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  checkDoubleDigits(9);
  checkDoubleDigits(100);