interface ICounter {
  [x: string]: number;
}

const numToArr = (num: number) => [...num.toString()];

const getCounter = (arr: Array<string | number>) =>
  arr.reduce<ICounter>((counter, char) => {
    counter[char] = counter[char] + 1 || 1;
    return counter;
  }, {});

const sameFrequency = (num1: number, num2: number): boolean => {
  const numArr1 = numToArr(num1);
  const numArr2 = numToArr(num2);

  if (numArr1.length !== numArr2.length) return false;

  const counter1 = getCounter(numArr1);
  const counter2 = getCounter(numArr2);

  return Object.entries(counter1).every(
    ([char, count]) => counter2[char] === count
  );
};

const areThereDuplicates = (...args: Array<string | number>): boolean =>
  Object.entries(getCounter(args)).some(([_, value]) => value !== 1);
