export const part1 = {
  getJoltages(inputStr) {
    // find the largest digit that is not the last digit
    const largestDigit = Math.max(
      ...inputStr.slice(0, -1).split("").map(Number)
    );
    const idx = inputStr.indexOf(largestDigit.toString());
    // find the next largest digit after the largest digit
    const nextLargestDigit = Math.max(
      ...inputStr
        .slice(idx + 1)
        .split("")
        .map(Number)
    );
    return parseInt(`${largestDigit}${nextLargestDigit}`);
  },
  solve(inputStr) {
    return inputStr
      .split("\n")
      .map(this.getJoltages)
      .reduce((a, c) => a + c, 0);
  },
};

export const part2 = {
  getJoltages(inputStr) {
    const result = [];
    let idx = 0;
    for (let digitsLeft = 12; digitsLeft > 0; --digitsLeft) {
      // we need at least digitsLeft, so we can't use the last digitsLeft-1 digits
      const digitsToReserve = digitsLeft - 1;
      const availableStr = inputStr.slice(idx, digitsToReserve > 0 ? -digitsToReserve : undefined);
      // what is the largest digit in the available string?
      const largestDigit = Math.max(...availableStr.split("").map(Number));
      result.push(largestDigit);

      // move idx to the next largest digit
      idx += availableStr.indexOf(largestDigit.toString()) + 1;
    }

    return parseInt(result.join(""));
  },
  solve(inputStr) {
    return inputStr.split("\n").map(this.getJoltages).reduce((a, c) => a + c, 0);
  },
}