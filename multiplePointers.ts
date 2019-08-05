const sumToZero = (arr: number[]): number[] => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex < rightIndex) {
    const leftVal = arr[leftIndex];
    const rightVal = arr[rightIndex];

    const sum = leftVal + rightVal;

    if (sum === 0) return [leftVal, rightVal];

    if (sum > 0) {
      rightIndex--;
      continue;
    }

    leftIndex++;
  }
};

const myCountUniqueValues = (arr: number[]): number =>
  arr.length
    ? arr.reduce(
        (acc, val, index2) => {
          const { count, index1 } = acc;

          if (val === count) return acc;
          if (val > arr[index1]) return { count: count + 1, index1: index2 };

          return acc;
        },
        { count: 1, index1: 0 }
      ).count
    : 0;

const myCountUniqueValues2 = (arr: number[]): number => {
  if (!arr.length) return 0;

  let index1 = 0;
  let index2 = 1;

  let count = 1;

  while (index2 < arr.length) {
    const val1 = arr[index1];
    const val2 = arr[index2];

    if (val1 === val2) {
      index2++;
      continue;
    }

    if (val2 > val1) {
      count++;
      index1 = index2;
    }
  }

  return count;
};

const countUniqueValues = (arr: number[]): number => {
  let index1 = 0;

  for (let j = 1; j < arr.length; j++) {
    let val1 = arr[index1];
    const val2 = arr[j];

    if (val1 !== val2) {
      index1++;
      arr[index1] = val2;
    }
  }
  return index1 + 1;
};

// console.log(myCountUniqueValues([0]));
console.log(myCountUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
// console.log(countUniqueValues([1, 1, 1, 1, 1, 3, 4, 5, 7]));

// console.log(sumToZero([-4, -3, -2, -1, 0, 1, 2, 5]));
// console.log(sumToZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));
