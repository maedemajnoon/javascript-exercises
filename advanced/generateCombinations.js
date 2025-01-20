/**
 * Problem:
 * Write a function that generates all combinations of a set of numbers.
 * The function should return an array of arrays, where each array is a combination of the input numbers.
 *
 * Your task:
 * Implement the function `generateCombinations` that returns all combinations of the given numbers.
 *
 * Example:
 * generateCombinations([1, 2, 3]) should return
 * [ [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3] ].
 */
function generateCombinations(array) {
  let pushed_array = [];
  for (let i = 0; i <= array.length; i++) {
    if (!pushed_array.includes(i)) {
      pushed_array.push[i];
    }
  }
  return pushed_array;
}
module.exports = generateCombinations;
