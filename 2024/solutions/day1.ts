import fs from 'node:fs/promises'
import assert from 'node:assert'

const input = await fs.readFile('inputs/day1.txt', { encoding: 'utf-8' })

const left: number[] = []
const right: number[] = []

for (const line of input.split('\n')) {
  if (line.length) {
    const comps = line.split(' ')
    left.push(parseInt(comps.at(0)!))
    right.push(parseInt(comps.at(-1)!))
  }
}

left.sort();
right.sort();

assert(left.length === right.length);

let part1 = 0;
for (let i = 0; i < left.length; ++i) {
  const difference = Math.abs(left[i] - right[i]);
  part1 += difference;
}

console.log(`part 1: ${part1}`);

let part2 = 0;
for (const n of left) {
  // how many times does n appear in right?
  const count = right.filter(x => x === n).length;
  const similarity = n * count;
  part2 += similarity;
}

console.log(`part 2: ${part2}`);