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

  searchFor(value: number): boolean {
    if (this.root && this.root.value === value) {
      return true;
    } else {
      let currentNode: BSTNode | null = this.root;
      while (currentNode) {
        if (value < currentNode.value) {
          currentNode = currentNode.left;
          if (currentNode?.value === value) return true;
        } else if (value >= currentNode.value) {
          currentNode = currentNode.right;
          if (currentNode?.value === value) return true;
        }
      }
      return false;
    }
  }

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

  getRoot() {
    return this.root;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(15);
bst.insert(5);
bst.insert(22);
bst.insert(13);
bst.insert(5);
bst.insert(2);
bst.insert(14);
bst.insert(1);
const exists = bst.searchFor(3);
console.log(exists);
