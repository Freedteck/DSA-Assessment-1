// Find the duplicate element in a range array.

const findDuplicate = (arr) => {
  const visited = {};

  for (let num of arr) {
    if (visited[num]) {
      return num;
    }
    visited[num] = true;
  }
  return true;
};

console.log("The duplicate element is:", findDuplicate([1, 2, 3, 4, 4]));
