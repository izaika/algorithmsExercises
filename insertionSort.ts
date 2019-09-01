const insertionSort = (arr: number[]): number[] => {
  const result: number[] = [...arr];

  for (let i = 1; i < result.length; i++) {
    const currentVal = result[i];

    for (var k = i - 1; k >= 0 && result[k] > currentVal; k--) {
      result[k + 1] = result[k];
    }
    result[k + 1] = currentVal;
  }

  return result;
};

console.log(insertionSort([37, 45, -3, 111, 29, 8, 112, 113, 114]));
// bubbleSort([37, 45, 111, 29, 8]);
