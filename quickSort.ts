const swap = (arr: number[], index1: number, index2: number): number[] => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  return arr;
};

const pivot = (arr: number[], start = 0, end = arr.length + 1) => {
  const pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot <= arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);

  console.log(arr);
  return swapIdx;
};

const arr = [5, 2, 1, 8, 4, 7, 6, 3];
pivot(arr);
