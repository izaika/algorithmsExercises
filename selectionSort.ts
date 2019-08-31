const selectionSort = (arr: number[]): number[] => {
  const result: number[] = [...arr];

  for (let i = 0; i < result.length; i++) {
    let lowestIndex = i;

    for (let k = i + 1; k < result.length; k++) {
      if (result[k] >= result[lowestIndex]) continue;

      lowestIndex = k;
    }

    if (i === lowestIndex) continue;

    const temp = result[i];
    result[i] = result[lowestIndex];
    result[lowestIndex] = temp;
  }

  return result;
};

console.log(selectionSort([37, 45, -3, 111, 29, 8, 112, 113, 114]));
// bubbleSort([37, 45, 111, 29, 8]);
