const myGetDigit = (num: number, pos: number) => {
  const strNum = num.toString();
  return parseInt(strNum[strNum.length - pos - 1], 10) || 0;
};

const myCountDigits = (num: number) => num.toString().length;

const getDigit = (num: number, i: number) =>
  Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;

const countDigits = (num: number) =>
  num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

const mostDigits = (nums: number[]) => countDigits(Math.max(...nums));

const radixSort = (nums: number[]) => {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      digitBuckets[getDigit(nums[i], k)].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
};

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
