const mySame = (arr1: number[], arr2: number[]): boolean => {
  if (arr1.length !== arr2.length) return false;
  arr1.sort();
  arr2.sort();

  return arr1.every((val, index) => val ** 2 === arr2[index]);
};

const same = (arr1: number[], arr2: number[]): boolean => {
  if (arr1.length !== arr2.length) return false;

  const frequencyCounter1: { [x: number]: number } = {};
  const frequencyCounter2: { [x: number]: number } = {};

  for (const key of arr1) {
    frequencyCounter1[key] = ++frequencyCounter1[key] || 1;
  }

  for (const key of arr2) {
    frequencyCounter2[key] = ++frequencyCounter2[key] || 1;
  }

  for (const key in frequencyCounter1) {
    const squaredKey = parseInt(key) ** 2;

    if (!(squaredKey in frequencyCounter2)) return false;
    if (!(frequencyCounter2[squaredKey] !== frequencyCounter1[key]))
      return false;
  }

  return true;
};

console.log(mySame([1, 2, 3], [4, 1, 9])); // true
console.log(mySame([1, 2, 3], [1, 9])); // false
console.log(mySame([1, 2, 1], [4, 4, 1])); // false
