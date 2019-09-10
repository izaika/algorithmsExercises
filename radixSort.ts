const myGetDigit = (num: number, pos: number) => {
  const strNum = num.toString();
  return parseInt(strNum[strNum.length - pos - 1], 10) || 0;
};

const myCountDigits = (num: number) => num.toString().length;

const getDigit = (num: number, i: number) =>
  Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;

const countDigits = (num: number) =>
  num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

console.log(getDigit(123, 1));
