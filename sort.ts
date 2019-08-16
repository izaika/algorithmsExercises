const mySort = (arr: (string | number)[]) =>
  arr.reduce((acc, val) => {
    if (!acc.length) return [val];

    for (let i = acc.length - 1; i >= 0; i--) {
      if (val > acc[i]) {
        return [...acc.slice(0, i + 1), val, ...acc.slice(i + 1, acc.length)];
      }

      if (!i) return [val, ...acc];
    }

    return acc;
  }, []);

console.log([6, 4, 15, 10].sort());
console.log(mySort([3, 2, 5, 4, 0, 1]));
console.log(mySort(["world", "test", "hello"]));
