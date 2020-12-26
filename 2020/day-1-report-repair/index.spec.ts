import { findSumParts } from './'

describe('Day 1: Report Repair', () => {
  it('Finds 2 numbers whose sum equals 2020, then multiplies those numbers', () => {
    const numbers = [1721, 979, 366, 299, 675, 1456]
    const [a, b] = findSumParts(2020, numbers, 2)

    expect(a * b).toBe(514579)
  })

  it('Finds 3 numbers whose sum equals 2020, then multiplies those numbers', () => {
    const numbers = [1721, 979, 366, 299, 675, 1456]
    const [a, b, c] = findSumParts(2020, numbers, 3)

    expect(a * b * c).toBe(241861950)
  })

  it(`Throws if the sum can't be found`, () => {
    const numbers = [999, 999, 999, 999, 999, 999]

    expect(() => findSumParts(2020, numbers, 2)).toThrow()
  })
})
