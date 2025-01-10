/**
 * Problem:
 * Write a function that calculates the average of the numbers in an array.
 *
 * Your task:
 * Implement the function `calculateAverage` that returns the average of the numbers.
 *
 * Example:
 * calculateAverage([1, 2, 3, 4]) should return 2.5.
 * calculateAverage([10, 20, 30]) should return 20.
 */
function calculateAverage(arr) {
  let sum = 0;
  let avg = 0;
  arr.forEach((i) => {
    sum += i;
  });
  return (avg = sum / arr.length);
}
module.exports = calculateAverage;
