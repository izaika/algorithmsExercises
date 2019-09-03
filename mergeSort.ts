const merge = (arr1: number[], arr2: number[]): number[] => {
  const results: number[] = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  if (i < arr1.length) results.push(...arr1.slice(i));
  if (j < arr2.length) results.push(...arr2.slice(j));

  return results;
};

const mergeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

// console.log(merge([1, 10, 50], [2, 14, 99, 100]));
console.log(mergeSort([2, 99, 10, 1, 14, 100, 50]));
