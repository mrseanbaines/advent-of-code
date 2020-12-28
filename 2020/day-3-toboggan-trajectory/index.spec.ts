import { countTrees } from './'

describe('Day 3: Toboggan Trajectory', () => {
  const map = `
    ..##.......
    #...#...#..
    .#....#..#.
    ..#.#...#.#
    .#...##..#.
    ..#.##.....
    .#.#.#....#
    .#........#
    #.##...#...
    #...##....#
    .#..#...#.#
  `

  it('Counts number of trees encountered through slope', () => {
    const result = countTrees(map, [1, 1])

    expect(result).toBe(2)
  })

  it('Checks multiple slopes and multiples the resulting tree counts', () => {
    const result = [
      countTrees(map, [1, 1]),
      countTrees(map, [3, 1]),
      countTrees(map, [5, 1]),
      countTrees(map, [7, 1]),
      countTrees(map, [1, 2]),
    ].reduce((sum, num) => sum * num, 1)

    expect(result).toBe(336)
  })
})
