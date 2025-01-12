/**
 * Problem:
 * Write a function that takes a positive integer as input and returns the sum of its digits.
 *
 * Your task:
 * Implement the function `sumOfDigits` that calculates the sum of digits in the given number.
 *
 * Example:
 * sumOfDigits(123) should return 6 (1 + 2 + 3).
 * sumOfDigits(987) should return 24 (9 + 8 + 7).
 */
function sumOfDigits(num) {
  let str_num_array = num.toString().split("");
  let num_array = [];
  str_num_array.forEach((element) => {
    num_array.push(Number(element));
  });
  let sum = num_array.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return sum;
}
module.exports = sumOfDigits;
