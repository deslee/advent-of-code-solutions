function parseInput(inputStr) {
  const ranges = [];
  const ingredients = [];

  let isParsingIngredients = false;
  for (const line of inputStr.split("\n")) {
    if (line === "") {
      isParsingIngredients = true;
      continue;
    }

    if (isParsingIngredients) {
      ingredients.push(parseInt(line));
    } else {
      ranges.push(line.split("-").map((i) => parseInt(i)));
    }
  }

  return { ranges, ingredients };
}

export const part1 = {
  solve(inputStr) {
    const { ranges, ingredients } = parseInput(inputStr);

    return ingredients.filter((ingredient) =>
      ranges.some((range) => ingredient >= range[0] && ingredient <= range[1])
    ).length;
  },
};

export const part2 = {
  solve(inputStr) {
    const { ranges, ingredients } = parseInput(inputStr);

    // sort the ranges by their lower bound
    ranges.sort((a, b) => a[0] - b[0]);

    // initialize the fresh ingredient count from the first range
    let [prevLower, prevUpper] = ranges[0];
    let values = prevUpper - prevLower + 1;

    // walk through the next ranges, updating the valid fresh ingredient count
    for (let [curLower, curUpper] of ranges.slice(1)) {
      if (curLower <= prevUpper) {
        curLower = prevUpper + 1;
      }

      if (curLower <= curUpper) {
        values += curUpper - curLower + 1;
        prevLower = curLower;
        prevUpper = curUpper;
      }
    }

    return values;
  },
};
