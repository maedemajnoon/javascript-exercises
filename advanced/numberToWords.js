/**
 * Problem:
 * Write a program that converts a number to its word representation.
 *
 * Your task:
 * Implement the function `numberToWords` that converts a number to its corresponding word form.
 *
 * Example:
 * numberToWords(123) should return "one hundred twenty three".
 * numberToWords(5) should return "five".
 */

// Write your solution here
function numberToWords(number) {
  function recursive(num) {
    if (num === 0) {
      return "zero";
    }
    let teens = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];
    let tens = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];
    if (num < 20) {
      return teens[num];
    }
    if (num < 100) {
      return tens[Math.floor(num / 10)] + " " + (num % 10)
        ? ""
        : teens[num % 10];
    } else {
      return teens[num % 100] + " hundred " + (num % 100)
        ? ""
        : recursive(num % 100);
    }
  }
  recursive(number);
}

module.exports = numberToWords;
