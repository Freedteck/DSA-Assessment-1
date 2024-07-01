// Generate odd binary numbers between 1 to `n` using a queue.

const generateOddBinaries = (n) => {
  let queue = [];
  let count = 1;

  while (count <= n) {
    queue.push(Number(count.toString(2)));

    count += 2;
  }

  return queue;
};

let n = 10;

console.log(generateOddBinaries(n));
