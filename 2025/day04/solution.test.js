import test from "node:test";
import assert from "node:assert/strict";

import { part1, part2 } from "./solution.js";

const part1Example = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`;

const part1Marked = `..xx.xx@x.
x@@.@.@.@@
@@@@@.x.@@
@.@@@@..@.
x@.@@@@.@x
.@@@@@@@.@
.@.@.@.@@@
x.@@@.@@@@
.@@@@@@@@.
x.x.@@@.x.`;

const part1Solution = 13;

await test("Part 1 components", () => {
  assert.deepEqual(part1.getAccessibleRolls(part1Example), part1Marked);
});

await test("Part 1 solution", () => {
  assert.equal(part1.solve(part1Example), part1Solution);
});

await test("Part 2 components", () => {
  for (let stateIdx = 0; stateIdx < part2States.length - 1; ++stateIdx) {
    const currentState = part2States[stateIdx];
    const nextState = part2States[stateIdx + 1];
    const result = part2.step(
      currentState.state
        .split("\n")
        .map((line) => line.replaceAll("x", "."))
        .join("\n")
    );
    assert.deepEqual(result.state, nextState.state);
    assert.deepEqual(result.removed, nextState.removed);
  }
});

await test("Part 2 solution", () => {
  assert.equal(part2.solve(part2States[0].state), part2Solution);
});

const part2States = [
  {
    state: `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`,
    removed: null,
  },
  {
    state: `..xx.xx@x.
x@@.@.@.@@
@@@@@.x.@@
@.@@@@..@.
x@.@@@@.@x
.@@@@@@@.@
.@.@.@.@@@
x.@@@.@@@@
.@@@@@@@@.
x.x.@@@.x.`,
    removed: 13,
  },
  {
    state: `.......x..
.@@.x.x.@x
x@@@@...@@
x.@@@@..x.
.@.@@@@.x.
.x@@@@@@.x
.x.@.@.@@@
..@@@.@@@@
.x@@@@@@@.
....@@@...`,
    removed: 12,
  },
  {
    state: `..........
.x@.....x.
.@@@@...xx
..@@@@....
.x.@@@@...
..@@@@@@..
...@.@.@@x
..@@@.@@@@
..x@@@@@@.
....@@@...`,
    removed: 7,
  },
  {
    state: `..........
..x.......
.x@@@.....
..@@@@....
...@@@@...
..x@@@@@..
...@.@.@@.
..x@@.@@@x
...@@@@@@.
....@@@...`,
    removed: 5,
  },
  {
    state: `..........
..........
..x@@.....
..@@@@....
...@@@@...
...@@@@@..
...@.@.@@.
...@@.@@@.
...@@@@@x.
....@@@...`,
    removed: 2,
  },
  {
    state: `..........
..........
...@@.....
..x@@@....
...@@@@...
...@@@@@..
...@.@.@@.
...@@.@@@.
...@@@@@..
....@@@...`,
    removed: 1,
  },
  {
    state: `..........
..........
...x@.....
...@@@....
...@@@@...
...@@@@@..
...@.@.@@.
...@@.@@@.
...@@@@@..
....@@@...`,
    removed: 1,
  },
  {
    state: `..........
..........
....x.....
...@@@....
...@@@@...
...@@@@@..
...@.@.@@.
...@@.@@@.
...@@@@@..
....@@@...`,
    removed: 1,
  },
  {
    state: `..........
..........
..........
...x@@....
...@@@@...
...@@@@@..
...@.@.@@.
...@@.@@@.
...@@@@@..
....@@@...`,
    removed: 1,
  },
];

const part2Solution = 43;
