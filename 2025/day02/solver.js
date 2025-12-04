import fs from "node:fs";
import { part1, part2 } from "./solution.js";

console.log(part1.solve(fs.readFileSync("./input").toString()))
console.log(part2.solve(fs.readFileSync("./input").toString()))
