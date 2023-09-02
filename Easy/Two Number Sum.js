/**
 * O(n) Time | O(n) Space
 * Solution 1: define x and calculate y = target - x
 * look for y in the hashtable
 */
function twoNumberSum(array, target) {
  // Create a hashtable
  const obj = {};
  // Traverse the array and find each number's complementary in the hashtable
  for (let i = 0; i < array.length; i++) {
    const num1 = array[i];
    const num2 = target - num1;
    // If found return the numbers
    if (obj[num2] === true) {
      return [num1, num2];
    } else {
      // If not found add it to the hashtable
      obj[num1] = true;
    }
  }
  // If no pair is found, return an empty array
  return [];
}

// const answer = twoNumberSum([11, -4, -1, 8, 3, 1, 5, 6], 10);
// console.log(answer);

/**
 * Solution 2: sort the array
 * use two pointers of the indices of head and tail of the array
 * move the pointers according to sum and the target
 */

function twoNumberSum2(array, target) {
  // Sort the array
  array.sort((a, b) => a - b);
  // Set pointers
  let p1 = 0;
  let p2 = array.length - 1;
  // Combine sum of pointers to the target
  while (p1 < p2) {
    const sum = array[p1] + array[p2];
    if (sum > target) {
      p2 = p2 - 1;
    } else if (sum < target) {
      p1 = p1 + 1;
    } else if (sum === target) {
      return [array[p1], array[p2]];
    }
  }
  return [];
}
const answer2 = twoNumberSum2([11, -4, -1, 8, 3, 1, 5, 6], 10);
console.log(answer2);
