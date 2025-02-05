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

module.exports = isPalindrome;

const isPalindrome = (number) => {
    const word = number.toString();
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
  };
  
  console.log(isPalindrome(121));  
  console.log(isPalindrome(-121)); 
  console.log(isPalindrome(1321)); 
  