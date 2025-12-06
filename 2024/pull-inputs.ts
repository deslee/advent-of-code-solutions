import fs from 'node:fs/promises'

for (let i = 1; i <= 25; ++i) {
  const response = await fetch(`https://adventofcode.com/2024/day/${i}/input`, {
    headers: {
      Cookie: `session=${process.env.AOC_SESSION_ID}`,
    },
  })
  const text = await response.text()

  await fs.writeFile(`inputs/day${i}.txt`, text, { encoding: 'utf-8' })
}
