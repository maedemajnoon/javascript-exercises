/**
 * Problem:
 * Write a function that checks whether a given number is a palindrome. A palindrome number is one that reads
 * the same backward as forward.
 *
 * Your task:
 * Implement the function `isPalindrome` that checks whether the number is a palindrome.
 *
 * Example:
 * isPalindrome(121) should return true.
 * isPalindrome(-121) should return false (negative numbers are not palindromes).
 * isPalindrome(10) should return false.
 */
function isPalindrome(num) {
  let numArray = num.toString().split("");
  if (num < 0) return false;
  if (num < 10) return true;
  if (num < 100) {
    if (numArray[0] === numArray[1]) {
      return true;
    } else {
      return false;
    }
  }
  if (num < 1000) {
    if (numArray[0] === numArray[2]) {
      return true;
    } else {
      return false;
    }
  }
  if (num < 10000) {
    if (numArray[0] === numArray[3] && numArray[1] === numArray[2]) {
      return true;
    } else {
      return false;
    }
  }
  if (num < 100000) {
    if (numArray[0] === numArray[4] && numArray[1] === numArray[3]) {
      return true;
    } else {
      return false;
    }
  }
}
module.exports = isPalindrome;
