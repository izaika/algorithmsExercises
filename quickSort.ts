const swap = (arr: number[], index1: number, index2: number): number[] => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  return arr;
};

const pivot = (arr: number[], start = 0, end = arr.length - 1) => {
  const pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot <= arr[i]) continue;
    swapIdx++;
    swap(arr, swapIdx, i);
  }

  swap(arr, start, swapIdx);
  return swapIdx;
};

const quickSort = (
  arr: number[],
  left = 0,
  right = arr.length - 1
): number[] => {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
};

const arr = [5, 2, 1, 8, 4, 7, 6, 3];
quickSort(arr);
console.log(arr);
