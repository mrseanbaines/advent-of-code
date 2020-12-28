import { findSeatPosition, getSeatIDFromPosition, findMissingSeat } from './'

describe('Day 5: Binary Boarding', () => {
  it.each([
    ['BFFFBBFRRR', [70, 7]],
    ['FFFBBBFRRR', [14, 7]],
    ['BBFFBBFRLL', [102, 4]],
  ])('Finds the seat position from seat code %s', (code, expected) => {
    const result = findSeatPosition(code)

    expect(result).toStrictEqual(expected)
  })

  it('Gets seat ID from position', () => {
    expect(getSeatIDFromPosition(findSeatPosition('FBFBBFFRLR'))).toBe(357)
  })

  it('Finds the missing seat ID', () => {
    const codes = ['BFFFBFFLRL', 'BFFFBFFLRR', 'BFFFBFFRLR', 'BFFFBFFRRL']

    expect(findMissingSeat(codes)).toBe(548)
  })
})
