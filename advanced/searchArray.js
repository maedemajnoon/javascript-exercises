/**
 * Problem:
 * Write a function that takes an array of numbers and a target number.
 * It should return `true` if the target exists in the array, otherwise return `false`.
 *
 * Your task:
 * Implement the function `searchArray` that checks if the target is in the array.
 *
 * Example:
 * searchArray([1, 2, 3, 4], 3) should return true.
 * searchArray([1, 2, 3, 4], 5) should return false.
 */

module.exports = searchArray;

const searchArray = (arr, target) => arr.includes(target);

console.log(searchArray([1, 2, 3, 4], 5)); 
console.log(searchArray([1, 2, 3, 4], 4)); 
