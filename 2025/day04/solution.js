export const part1 = {
  getAccessibleRolls(inputStr) {
    const rows = inputStr.split("\n").map((row) => row.split(""));
    const result = rows.map((row, rowIdx) => {
      const rowAbove = rows[rowIdx - 1];
      const rowBelow = rows[rowIdx + 1];

      return row.map((cell, cellIdx) => {
        const left = row[cellIdx - 1];
        const right = row[cellIdx + 1];
        const topLeft = rowAbove?.[cellIdx - 1];
        const topRight = rowAbove?.[cellIdx + 1];
        const top = rowAbove?.[cellIdx];
        const bottomLeft = rowBelow?.[cellIdx - 1];
        const bottomRight = rowBelow?.[cellIdx + 1];
        const bottom = rowBelow?.[cellIdx];

        const neighborRolls = [
          left,
          right,
          topLeft,
          topRight,
          top,
          bottomLeft,
          bottomRight,
          bottom,
        ].filter((roll) => roll === "@").length;
        return cell === "@" && neighborRolls < 4 ? "x" : cell;
      });
    });

    return result.map((row) => row.join("")).join("\n");
  },
  solve(inputStr) {
    return this.getAccessibleRolls(inputStr)
      .split("")
      .filter((roll) => roll === "x").length;
  },
};

export const part2 = {
  step(inputStr) {
    const nextStep = part1.getAccessibleRolls(inputStr);
    const removed = nextStep
      .split("\n")
      .join("")
      .split("")
      .filter((r) => r === "x").length;

    return {
      state: nextStep,
      removed,
    };
  },
  solve(inputStr) {
    let state = inputStr;
    let removed = 0;
    while (true) {
      const result = this.step(state);
      if (result.removed === 0) {
        break;
      }
      removed += result.removed;
      state = result.state
        .split("\n")
        .map((line) => line.replaceAll("x", "."))
        .join("\n");
    }
    return removed;
  },
};
