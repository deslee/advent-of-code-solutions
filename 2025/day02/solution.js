function part1Ranges(inputStr) {
  const [lower, upper] = inputStr.split("-").map((i) => parseInt(i));
  const result = new Set();
  for (let i = lower; i <= upper; ++i) {
    if (hasEvenDigits(i)) {
      if (isPalindrome(i.toString())) {
        result.add(i);
      }
    }
  }
  return Array.from(result);
}

function part2Ranges(inputStr) {
  const [lower, upper] = inputStr.split("-").map((i) => parseInt(i));
  const result = new Set();
  for (let i = lower; i <= upper; ++i) {
    const numDigits = getNumDigits(i);
    for (const substrLen of getAllFactors(numDigits)) {
      const substr = i.toString().substring(0, substrLen);
      // is i a repeating sequence of substr?
      let repeatedStr = "";
      for (let j = 0; j < numDigits / substrLen; ++j) {
        repeatedStr += substr;
      }
      if (repeatedStr === i.toString()) {
        result.add(i);
      }
    }
  }
  return Array.from(result);
}

export const part1 = {
  ranges: part1Ranges,
  solve(inputStr) {
    return inputStr
      .split(",")
      .flatMap((str) => part1Ranges(str))
      .reduce((a, c) => a + c, 0);
  },
};

export const part2 = {
  ranges: part2Ranges,
  solve(inputStr) {
    return inputStr
      .split(",")
      .flatMap((str) => part2Ranges(str))
      .reduce((a, c) => a + c, 0);
  },
};

function getNumDigits(num) {
  return Math.floor(Math.log10(num)) + 1;
}

function hasEvenDigits(num) {
  return getNumDigits(num) % 2 === 0;
}

function isPalindrome(str) {
  const part = str.substring(0, str.length / 2);
  return str === `${part}${part}`;
}

const getAllFactorsCache = new Map();
function getAllFactors(num) {
  if (getAllFactorsCache.has(num)) {
    return getAllFactorsCache.get(num);
  }
  const factors = new Set();
  for (let i = 1; i < num; ++i) {
    if (num % i === 0) {
      factors.add(i);
    }
  }
	const result = Array.from(factors);
  getAllFactorsCache.set(num, result);
  return result;
}
