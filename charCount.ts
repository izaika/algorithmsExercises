import { toLower, reduce } from "ramda";

type numObj = { [x: string]: number };

const incrementObjKey = (obj: numObj, key: string): numObj => ({
  ...obj,
  [key]: ++obj[key] || 1
});

const isCharValid = (char: string) => /[a-z0-9]/.test(char);

const charCount = (str: string): numObj =>
  reduce(
    (acc, val) => (isCharValid(val) ? incrementObjKey(acc, val) : acc),
    {},
    [...toLower(str)]
  );

console.log(charCount("Hello world!"));
