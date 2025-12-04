import { part1, part2 } from "./solution.js";
import fs from "node:fs";

const inputStr = fs.readFileSync('./input')
.toString();

const part1Solution = part1(inputStr);
const part2Solution = part2(inputStr);

console.log({ part1Solution, part2Solution });
