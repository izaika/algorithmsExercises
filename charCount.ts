import { toLower, reduce, pipe, values } from "ramda";

type numObj = { [x: string]: number };

const incrementObjKey = (obj: numObj, key: string): numObj => ({
  ...obj,
  [key]: ++obj[key] || 1
});

const charCode = (char: string) => char.charCodeAt(0);

const isBetweenCreator = (num: number) => (
  rangeStart: number,
  rangeEnd: number
) => num > rangeStart && num < rangeEnd;

const isAlphaNumeric = (char: string) => {
  const isBetween = pipe(
    charCode,
    isBetweenCreator
  )(char);

  return (
    isBetween(47, 58) || // numeric (0-9)
    isBetween(64, 91) || // upper alpha (A-Z)
    isBetween(96, 123) // lower alpha (a-z)
  );
};

const strToArr = (str: string) => str.split("");

const charCount = (str: string): numObj =>
  reduce(
    (acc, val) => (isAlphaNumeric(val) ? incrementObjKey(acc, val) : acc),
    {},
    pipe(
      toLower,
      strToArr
    )(str)
  );

console.log(charCount("Hello world!"));
