// Find the difference between the sum of all nodes present at the (1st and 2nd levels) and the (3rd and 4th levels) in a binary tree.
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findDifferenceBtwSum(root) {
  sum1 = root.value + root.left.value + root.right.value;

  let totalSum = 0;
  let queue = [];
  queue.push(root);

  while (queue.length != 0) {
    let temp = queue.shift();
    totalSum += temp.value;
    if (temp.left != null) {
      queue.push(temp.left);
    }
    if (temp.right != null) {
      queue.push(temp.right);
    }
  }

  let sum2 = totalSum - sum1;

  return sum1 - sum2;
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

console.log(findDifferenceBtwSum(root));
