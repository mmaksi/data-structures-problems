/**
 * Solution: create two pointers for the head and the tail of the sorted array
 * compare the squared values of the head vs. the tail
 * if |tail| > |head| move head's pointer to the left
 * otherwise move tail's pointer to the right
 * push the squared value of the highest number to the new array starting from the tail
 */

function sortAndSquare(array) {
  const n = array.length;
  const squaredArray = new Array(n);
  let head = 0;
  let tail = n - 1;
  let index = n - 1;

  while (head <= tail) {
    const absHead = Math.abs(array[head]);
    const absTail = Math.abs(array[tail]);

    if (absHead > absTail) {
      squaredArray[index] = absHead * absHead;
      head++;
    } else {
      squaredArray[index] = absTail * absTail;
      tail--;
    }
    index--;
  }
  return squaredArray;
}

const sortedSquared = sortAndSquare([-7, -5, -4, 3, 6, 8, 9]);
console.log(sortedSquared);
