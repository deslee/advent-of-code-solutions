import test from "node:test";
import assert from "node:assert/strict";

import { part1, part2 } from "./solution.js";

const part1Key = {
  "987654321111111": 98,
  "811111111111119": 89,
  "234234234234278": 78,
  "818181911112111": 92,
};

const part1Solution = 357;

const part2Key = {
  "987654321111111": 987654321111,
  "811111111111119": 811111111119,
  "234234234234278": 434234234278,
  "818181911112111": 888911112111,
};

const part2Solution = 3121910778619;



await test("Part 1 components", () => {
  for (const [str, expectedJoltages] of Object.entries(part1Key)) {
    assert.deepEqual(part1.getJoltages(str), expectedJoltages);
  }
});

await test("Part 1 solution", () => {
  assert.equal(part1.solve(Object.keys(part1Key).join("\n")), part1Solution);
});

await test("Part 2 components", () => {
  for (const [str, expectedJoltages] of Object.entries(part2Key)) {
    assert.deepEqual(part2.getJoltages(str), expectedJoltages);
  }
});

await test("Part 2 solution", () => {
  assert.equal(part2.solve(Object.keys(part2Key).join("\n")), part2Solution);
});