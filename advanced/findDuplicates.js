/**
 * Problem:
 * Write a function that finds the duplicate elements in an array.
 *
 * Your task:
 * Implement the function `findDuplicates` that returns an array of all duplicate elements in the input array.
 *
 * Example:
 * findDuplicates([1, 2, 2, 3, 4, 4]) should return [2, 4].
 * findDuplicates([1, 2, 3]) should return [].
 */

// Write your solution here
function findDuplicates(array) {
  let flagged_array = [];
  let pushed_array = [];
  for (let i = 0; i <= array.length; i++) {
    if (flagged_array.includes(array[i]) && !pushed_array.includes(array[i])) {
      pushed_array.push(array[i]);
    } else {
      flagged_array.push(array[i]);
    }
  }
  return pushed_array;
}
module.exports = findDuplicates;
