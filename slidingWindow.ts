type TMaxSubArraySum = (arr: number[], size: number) => number;

const sumValuesInArr = (arr: number[]) =>
  arr.reduce((acc, val) => (acc += val), 0);

const myMaxSubArraySum: TMaxSubArraySum = (arr, size) => {
  const { length } = arr;
  if (size < 0 || size > length) return null;
  if (size === length) return sumValuesInArr(arr);

  const sums = arr.reduce<number[]>((acc, _, startIndex) => {
    const endIndex = startIndex + size;

    if (endIndex > length) return acc;
    const subArr = arr.slice(startIndex, endIndex);

    return [...acc, sumValuesInArr(subArr)];
  }, []);

  return Math.max(...sums);
};

const maxSubArraySum: TMaxSubArraySum = (arr, size) => {
  let maxSum = 0;
  let currentSum = 0;

  if (arr.length < size) return null;

  for (let i = 0; i < size; i++) maxSum += arr[i];
  currentSum = maxSum;

  for (let i = size; i < arr.length; i++) {
    currentSum = currentSum - arr[i - size] + arr[i];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

const myMaxSubArraySum2: TMaxSubArraySum = (arr, size) => {
  const { length } = arr;
  if (size < 0 || size > length) return null;
  if (size === length) return sumValuesInArr(arr);

  const initialSum = sumValuesInArr(arr.slice(0, size));

  return arr.slice(size, arr.length).reduce(
    (acc, val, i) => {
      const index = i + size;

      const [prevSum, maxSum] = acc;
      const nextSum = prevSum - arr[index - size] + val;

      return [nextSum, Math.max(nextSum, maxSum)];
    },
    [initialSum, initialSum]
  )[1];
};

console.log(myMaxSubArraySum2([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(myMaxSubArraySum2([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(myMaxSubArraySum2([4, 2, 1, 6], 1)); // 6
console.log(myMaxSubArraySum2([4, 2, 1, 6, 2], 4)); // 13
console.log(myMaxSubArraySum2([], 0)); // 0
