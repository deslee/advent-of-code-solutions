import fs from "node:fs";
import assert from "node:assert/strict";

const inputStr = fs.readFileSync('./input')
	.toString()

const parseInputStr = (inputStr) => inputStr
	.split('\n')
	.filter(i => i !== '')
	.map(input => /^([L|R])(\d+)/.exec(input))
	.map(input => ({dir: input[1], value: parseInt(input[2])}))

export const part1 = (inputStr) => parseInputStr(inputStr)
	.reduce(
		(state, input) => {
			let {dial, solution} = state;
			if (input.dir === 'L') {
				dial -= input.value;
			} else if (input.dir === 'R') {
				dial += input.value;
			} else {
				throw new Error(`${input.dir} is not a valid direction`);
			}


			while (dial > 99) {
				dial -= 100;
			}
			while (dial < 0) {
				dial += 100;
			}

			if (dial === 0) {
				solution++;
			}

			// console.debug(`${state.dial} ${input.dir}${input.value} => ${dial} (${solution})`)


			return {dial, solution}
		},
		{
			dial: 50,
			solution: 0,
		}
	)

export const part2 = (inputStr) => parseInputStr(inputStr)
	.reduce(
		(state, input) => {
			let {dial, solution} = state;
			for (let i = 0; i < input.value; ++i) {
				if (input.dir === 'L') {
					dial--;
				} else if (input.dir === 'R') {
					dial++;
				} else {
					throw new Error(`${input.dir} is not a valid direction`);
				}

				if (dial > 99) {
					dial -= 100;
				}
				else if (dial < 0) {
					dial += 100;
				}

				if (dial === 0) {
					solution++;
				}

				// console.debug(`${input.dir} => ${dial} (${solution})`)
			}

			return {dial, solution}
		},
		{
			dial: 50,
			solution: 0,
		}
	)

// console.log(part2(inputStr))
