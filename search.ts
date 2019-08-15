const binarySearch = (arr: number[], val: number) => {
  const find = (start: number, end: number): number => {
    const middle = Math.floor((start + end) / 2);
    const middleVal = arr[middle];

    if (val === middleVal) return middle;
    if (end - start === 1) return val === arr[end] ? end : -1;
    if (val > middleVal) return find(middle, end);
    if (val < middleVal) return find(start, middle);
  };

  return find(0, arr.length - 1);
};

// const getMiddle = (start: number, end: number) => Math.floor((start + end) / 2);
// const binarySearch = (arr: number[], val: number) => {
//   let start = 0;
//   let end = arr[arr.length - 1];
//   let middle = getMiddle(start, end);

//   while (middle !== end && middle !== start) {
//     console.log({ start, middle, end });
//     if (val > arr[middle]) {
//       start = middle;
//       middle = getMiddle(start, end);
//     } else if (val < arr[middle]) {
//       end = middle;
//       middle = getMiddle(start, end);
//     } else {
//       return middle;
//     }
//     console.log({ start, middle, end });
//   }

//   return -1;
// };

console.log(binarySearch([1, 2, 3, 4, 5], 5));

// console.log(
//   binarySearch(
//     [
//       5,
//       6,
//       10,
//       13,
//       14,
//       18,
//       30,
//       34,
//       35,
//       37,
//       40,
//       44,
//       64,
//       79,
//       84,
//       86,
//       95,
//       96,
//       98,
//       99
//     ],
//     10
//   )
// ); // 2
// 'binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95) should be 16.'.