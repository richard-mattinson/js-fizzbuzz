// Task
// The function should return an array containing all the numbers from lower to upper, including lower and upper themselves - with the following exceptions:

// Where a number is a multiple of three (3, 6, 9, etc.) the array should contain the string Fizz instead of the number.
// Where a number is a multiple of five (5, 10, etc.) the array should contain Buzz instead of of the number.
// For numbers which are multiples of both three and five (15, 30, etc.) the array should contain the string FizzBuzz instead of the number.

// Pseudo
// - Create a const with low and high values
// - Create an empty array
// - Create a for loop
//     - if the number is divisible by 3 return fizz
//     - if the number is divisible by 5 return buzz
//     - if neither (else?), return the original number
//     - push the value to the array

// TODO: Write your function in this file

const fizzBuzz35None = {
  fizzThree: {
    value: 3,
    text: 'Fizz'
  },

  fizzFive: {
    value: 5,
    text: 'Buzz'
  },

  fizzNone: {
    text: 'FizzBuzz'
  }
}

function fizzBuzz(lower, higher) {
  const fizzBuzzArray = []
  for (let i = lower; i <= higher; i++) {
    if (
      i % fizzBuzz35None.fizzThree.value === 0 &&
      i % fizzBuzz35None.fizzFive.value !== 0
    ) {
      fizzBuzzArray.push(fizzBuzz35None.fizzThree.text)
    } else if (
      i % fizzBuzz35None.fizzFive.value === 0 &&
      i % fizzBuzz35None.fizzThree.value !== 0
    ) {
      fizzBuzzArray.push(fizzBuzz35None.fizzFive.text)
    } else if (
      i % fizzBuzz35None.fizzThree.value === 0 &&
      i % fizzBuzz35None.fizzFive.value === 0
    ) {
      fizzBuzzArray.push(fizzBuzz35None.fizzNone.text)
    } else {
      fizzBuzzArray.push(i)
    }
  }
  console.log(fizzBuzzArray)

  return fizzBuzzArray
}

// console.log(fizzBuzz(any))

// TODO: Change undefined below to the name of your function
module.exports = fizzBuzz
