const helperCollectOdds = (nums: number[]) => {
  const odds: number[] = [];

  const helper = (nums: number[]) => {
    const numsLength = nums.length;
    if (!numsLength) return;

    const lastItem = nums[0];

    if (lastItem % 2) odds.push(lastItem);
    helper(nums.slice(1));
  };

  helper(nums);

  return odds;
};

const pureCollectOdds = (nums: number[], result: number[] = []): number[] => {
  if (!nums.length) return result;

  const firstNum = nums[0];

  return pureCollectOdds(
    nums.slice(1),
    firstNum % 2 ? [...result, firstNum] : result
  );
};

const filterCollectOdds = (nums: number[]) => nums.filter(num => num % 2);

const reduceCollectOdds = (nums: number[]) =>
  nums.reduce((acc, val) => (val % 2 ? [...acc, val] : acc), []);

const power = (num: number, pow: number): number =>
  pow < 1 ? 1 : pow <= 1 ? num : num * power(num, pow - 1);

const factorial = (num: number): number =>
  num <= 1 ? 1 : num * factorial(num - 1);

const productOfArray = (nums: number[]): number => {
  let result = 1;

  const helper = (nums: number[]) => {
    if (!nums.length) return;
    result *= nums[0];
    helper(nums.slice(1));
  };

  helper(nums);

  return result;
};

const recursiveRange = (num: number): number => {
  let result = 0;

  const helper = (num: number) => {
    if (num < 1) return;
    result += num;
    helper(num - 1);
  };

  helper(num);

  return result;
};

const fib = (num: number): number =>
  num <= 2 ? 1 : fib(num - 2) + fib(num - 1);
