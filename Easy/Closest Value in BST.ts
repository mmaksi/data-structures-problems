import { BinarySearchTree as BST } from "../Medium/BST Construction.ts";

const bst = new BST();
bst.insert([10, 15, 5, 22, 13, 5, 2, 14, 1]);

function findClosestValue(target: number) {
  let currentNode = bst.getRoot();
  let closestValue = currentNode.value;
  while (currentNode) {
    // compare to update the closest value
    if (
      Math.abs(closestValue - target) > Math.abs(currentNode.value - target)
    ) {
      closestValue = currentNode.value;
    }
    // proceed through the nodes until null
    if (currentNode.value < target) {
      currentNode = currentNode.right;
    } else if (currentNode.value > target) {
      currentNode = currentNode.left;
    } else if (currentNode.value === target) {
      return currentNode.value;
    }
  }
  return closestValue;
}

const answer = findClosestValue(12);
console.log(answer);
