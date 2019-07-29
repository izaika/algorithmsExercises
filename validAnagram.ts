const countChars = (str: string) =>
  str.split("").reduce<{ [x: string]: number }>((acc, val) => {
    acc[val] = ++acc[val] || 1;
    return acc;
  }, {});

const myValidAnagram = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) return false;

  const charCount1 = countChars(str1);
  const charCount2 = countChars(str2);

  for (const [key, value] of Object.entries(charCount1)) {
    if (!(key in charCount2)) return false;
    if (charCount2[key] !== value) return false;
  }

  return true;
};

const validAnagram = (str1: string, str2: string): boolean => {
  if (str1.length !== str2.length) return false;

  const charCount1 = str1
    .split("")
    .reduce<{ [x: string]: number }>((acc, val) => {
      acc[val] = ++acc[val] || 1;
      return acc;
    }, {});

  for (let i = 0; i < str2.length; i++) {
    const symbol = str2[i];
    const symbolFreq = charCount1[symbol];
    if (!symbolFreq) return false;
    charCount1[symbol] -= 1;
  }

  return true;
};

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("aadz", "zzda"));
console.log(validAnagram("azdza", "zzdaa"));
