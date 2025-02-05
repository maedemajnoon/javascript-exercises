/**
 * Problem:
 * Write a function that checks if a given number is prime or not.
 *
 * Your task:
 * Implement the function `isPrime` that checks if a number is prime.
 *
 * Example:
 * isPrime(2) should return true.
 * isPrime(4) should return false.
 */

// Write your solution here

module.exports = isPrime;

const isPrime = (num) => num > 1 && [...Array(Math.floor(Math.sqrt(num)) + 1).keys()].slice(2).every(i => num % i !== 0);

console.log(isPrime(53)); 
console.log(isPrime(78)); 
