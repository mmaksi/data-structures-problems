/**
 * Binary Tree: a tree of nodes where each node has up to 2 children
 * BST is a Binary Tree that fulfills the BST property;
 * BST property = each node > left node && each node <= right node
 */

class BSTNode {
  public left: BSTNode | null = null;
  public right: BSTNode | null = null;
  constructor(public value: number) {}
}

class BinarySearchTree {
  private root: BSTNode | null = null;

  constructor() {}

  insert(value: number): void {
    // Create a new node
    const newNode = new BSTNode(value);
    // Check if there is no parent node
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode: BSTNode | null = this.root;
      while (currentNode) {
        if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            break;
          }
          currentNode = currentNode.left;
        } else if (value >= currentNode.value) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            break;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
}

const bst = new BinarySearchTree();
