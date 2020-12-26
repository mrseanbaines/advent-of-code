import { findSeatPosition } from './'

describe('Day 5: Binary Boarding', () => {
  it.each([
    ['BFFFBBFRRR', [70, 7]],
    ['FFFBBBFRRR', [14, 7]],
    ['BBFFBBFRLL', [102, 4]],
  ])('Finds the seat position from seat code %s', (code, expected) => {
    const result = findSeatPosition(code)

    expect(result).toStrictEqual(expected)
  })
})
