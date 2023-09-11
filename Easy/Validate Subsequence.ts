/**
 * Solution: Create a pointer at the subsequence array
 * traverse the original array and compare each number with the pointer
 * if match, move the pointer forward
 *
 * O(n) Time | O(1) Space
 */
function isSubsequentArray(array: number[], subsequence: number[]): boolean {
  let pointer = 0;
  array.forEach((num) => {
    if (pointer === subsequence.length) {
      return true;
    }
    if (num === subsequence[pointer]) {
      pointer += 1;
    }
  });

  return false;
}

const result = isSubsequentArray([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]);
console.log(result);
