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

module.exports = numberToWords;

const numberToWords = (num) => {
    const ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    
    if (num === 0) return "zero";
    
    let words = "";
    
    if (num >= 100) {
      words += ones[Math.floor(num / 100)] + " hundred ";
      num %= 100; 
    }
    
    if (num >= 20) {
      words += tens[Math.floor(num / 10)];
      num %= 10;
      if (num > 0) words += " " + ones[num];
    } else if (num > 0) {
      words += ones[num];
    }
    
    return words.trim();  
  };
  
  console.log(numberToWords(123)); 
  console.log(numberToWords(45));  
  console.log(numberToWords(6));   
  console.log(numberToWords(0));   
  console.log(numberToWords(389)); 
  