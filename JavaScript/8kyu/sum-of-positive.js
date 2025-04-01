// INSTRUCTIONS:
// You get an array of numbers, return the sum of all of the positives ones.

// SOLUTION:
function positiveSum(arr) {
  return arr.filter((num) => num > 0).reduce((acc, curr) => acc + curr, 0);
}
