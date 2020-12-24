import { findSumParts } from './'

describe('Day 1: Report Repair', () => {
  it('Finds a number pair whose sum equals 2020, then multiplies those two numbers', () => {
    const numbers = [1721, 979, 366, 299, 675, 1456]
    const [a, b] = findSumParts(2020, numbers)

    expect(a * b).toBe(514579)
  })

  it(`Throws if the sum can't be found`, () => {
    const numbers = [999, 999, 999, 999, 999, 999]

    expect(() => findSumParts(2020, numbers)).toThrow()
  })
})
