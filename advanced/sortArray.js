/**
 * Problem:
 * Write a function that takes an array of numbers and sorts it in ascending order.
 *
 * Your task:
 * Implement the function `sortArray` that sorts the given array in ascending order.
 *
 * Example:
 * sortArray([3, 1, 4, 1, 5, 9]) should return [1, 1, 3, 4, 5, 9].
 */
function sortArray(array) {
  let temp;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
module.exports = sortArray;
