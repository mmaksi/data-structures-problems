/**
 * O(n Log (n)) Time | O(1) Space 
 * Requires maths knowledge to solve it
 */
function nonConstructibleChange(coins: number[]) {
  // Sort the array in ascending order
  coins.sort((a, b) => a - b);

  let change = coins[0];
  for (let i = 1; i < coins.length; i++) {
      if (coins[i] <= change + 1) {
          change = change + coins[i];
    } else {
      return change + 1;
    }
  }
  return change + 1;
}

const answer = nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]);
console.log(answer);
