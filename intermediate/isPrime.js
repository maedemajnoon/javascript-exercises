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
function isPrime(num) {
  let temp = 0;
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      temp = temp + 1;
    }
  }
  if (temp == 2) {
    return true;
  } else {
    return false;
  }
}
module.exports = isPrime;
