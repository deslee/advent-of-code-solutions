import test from "node:test";
import assert from "node:assert/strict";

import { part1, part2 } from "./solution.js";

const example = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`

const part1Answer = 3;

test("Part 1 solution", () => {
  assert.equal(part1.solve(example), part1Answer);
});

const part2Answer = 14;

test("Part 2 solution", () => {
  assert.equal(part2.solve(example), part2Answer);
});