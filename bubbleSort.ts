const bubbleSort = (arr: number[]): number[] => {
  const result = [...arr];
  let counter = arr.length - 2;
  let noSwaps = false;

  while (counter >= 0) {
    noSwaps = true;
    for (let i = 0; i <= counter; i++) {
      const currentVal = result[i];
      const nextVal = result[i + 1];
      if (currentVal > nextVal) {
        result[i + 1] = currentVal;
        result[i] = nextVal;
        noSwaps = false;
      }
    }

    if (noSwaps) break;
    counter--;
  }

  return result;
};

console.log(bubbleSort([37, 45, -3, 111, 29, 8, 112, 113, 114]));
// bubbleSort([37, 45, 111, 29, 8]);
