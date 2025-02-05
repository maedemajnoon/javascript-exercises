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

module.exports = calculateAverage;

const calculateAverage = (arr) => arr.reduce((sum, value) => sum + value, 0) / arr.length;

console.log(calculateAverage([1, 2, 3, 4]));  
