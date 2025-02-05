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

module.exports = findDuplicates;

const findDuplicates = (array) => {
    const seen = new Set();
    const duplicates = new Set();
  
    for (const item of array) {
      if (seen.has(item)) {
        duplicates.add(item);
      } else {
        seen.add(item);
      }
    }
    
    return [...duplicates];
  };
  
  console.log(findDuplicates([1, 2, 2, 3, 4, 4])); 
  console.log(findDuplicates([1, 1, 1, 2, 3]));   
  console.log(findDuplicates([1, 2, 3]));           
  