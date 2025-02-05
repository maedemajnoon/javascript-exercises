/**
 * Problem:
 * Write a recursive function that calculates the factorial of a given number.
 *
 * Your task:
 * Implement the function `factorial` which calculates the factorial of the input number recursively.
 *
 * Example:
 * factorial(5) should return 120.
 * factorial(0) should return 1.
 */

// Write your solution here

module.exports = factorial;

const factorial = (num) => (num <= 0 ? 1 : [...Array(num).keys()].reduce((a, b) => a * (b + 1), 1));

console.log(factorial(5));   
console.log(factorial(45));  
