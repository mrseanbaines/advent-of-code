type Movements = [right: number, down: number]

export const countTrees = (map: string, [right, down]: Movements) => {
  const rows = map
    .trim()
    .split('\n')
    .map(row => row.trim())

  let treeCount = 0
  let x = 0
  let y = 0

  while (!!rows[y]) {
    if (rows[y][x] === '#') {
      treeCount++
    }

    x = (x + right) % rows[y].length
    y += down
  }

  return treeCount
}
