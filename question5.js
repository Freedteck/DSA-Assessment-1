// Sort the following numbers from lowest to the highest using Quick Sort Algorithm:
// 9, -3, 5, 2, 6, 8, -6, 1, 3

const quickSort = (arr, low, high) => {
  if (low < high) {
    let pi = partition(arr, low, high);

    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
};

const partition = (arr, low, high) => {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
};

let arr = [9, -3, 5, 2, 6, 8, -6, 1, 3];
let N = arr.length;

quickSort(arr, 0, N - 1);
console.log(arr.join(" "));
