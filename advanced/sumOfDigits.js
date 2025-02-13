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
const sumOfDigits = (num) => {
    let num_array = num.toString().split("").map(Number); // map function convert string items of array to Number
    return num_array.reduce((acc, curr) =>  acc + curr , 0);
}
module.exports = sumOfDigits;
