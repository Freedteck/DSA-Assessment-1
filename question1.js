// Write a function to count the number of nodes with both left and right child nodes present in a binary tree.
const countNodesWithChildren = (root) => {
  if (root === null) {
    return 0;
  }

  let count = 0;
  if (root.left && root.right) {
    count++;
  }
  count +=
    countNodesWithChildren(root.left) + countNodesWithChildren(root.right);

  return count;
};

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let root = new Node(5);
root.left = new Node(4);
root.right = new Node(7);
root.left.left = new Node(3);
root.left.right = new Node(7);
root.right.left = new Node(5);
root.right.right = new Node(8);
root.left.left.left = new Node(2);
root.left.left.right = new Node(6);
root.right.right.left = new Node(6);
root.right.right.right = new Node(9);

console.log(countNodesWithChildren(root));
