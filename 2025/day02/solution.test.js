import test from "node:test";
import assert from "node:assert/strict";

import { part1, part2 } from "./solution.js";

const part1Key = {
  "11-22": [11, 22],
  "95-115": [99],
  "998-1012": [1010],
  "1188511880-1188511890": [1188511885],
  "222220-222224": [222222],
  "1698522-1698528": [],
  "446443-446449": [446446],
  "38593856-38593862": [38593859],
};

const part2Key = {
  "11-22": [11, 22],
  "95-115": [99, 111],
  "998-1012": [999, 1010],
  "1188511880-1188511890": [1188511885],
  "222220-222224": [222222],
  "1698522-1698528": [],
  "446443-446449": [446446],
  "38593856-38593862": [38593859],
  "565653-565659": [565656],
  "824824821-824824827": [824824824],
  "2121212118-2121212124": [2121212121],
};

const part1Solution = 1227775554;
const part2Solution = 4174379265;

await test("Part 1 has ranges function", () => {
  assert.ok(part1);
  assert.ok(part1.ranges);
});

await test("Part 1 components", () => {
  for (const [str, ids] of Object.entries(part1Key)) {
    assert.deepEqual(part1.ranges(str), ids);
  }
});

await test("Part 1 solution", () => {
  assert.equal(part1.solve(Object.keys(part1Key).join(",")), part1Solution);
});

await test("Part 2 has ranges function", () => {
  assert.ok(part2);
  assert.ok(part2.ranges);
});

await test("Part 2 components", () => {
  for (const [str, expectedIds] of Object.entries(part2Key)) {
		const ids = part2.ranges(str)
    assert.deepEqual(ids, expectedIds);
  }
});

await test("Part 2 solution", () => {
  assert.equal(part2.solve(Object.keys(part2Key).join(",")), part2Solution);
});
