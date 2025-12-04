import test from "node:test";
import assert from "node:assert/strict";

import { part1, part2 } from "./solution.js";

const inputStr = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`

test('part1', (t) => {
	const part1Solution = part1(inputStr);
	assert.deepEqual(part1Solution, { solution: 3, dial: 32 });
});

test('part2', (t) => {
	const part2Solution = part2(inputStr);
	assert.deepEqual(part2Solution, { solution: 6, dial: 32 });
});
