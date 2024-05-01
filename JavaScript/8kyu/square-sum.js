// INSTRUCTIONS
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// SOLUTION
function squareSum(numbers) {
  return numbers.reduce((acc, cur) => acc + cur ** 2, 0);
}

// EXPLANATION
// reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
// The reducer function takes four arguments:
// Accumulator (acc)
// Current Value (cur)
// Current Index (idx)
// Source Array (src)
// Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array, and ultimately becomes the final, single resulting value.
