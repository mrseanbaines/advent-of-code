import { getUniqueAnswerCounts, getCommonAnswerCounts } from './'

describe('Day 6: Custom Customs', () => {
  const list = `
    abc

    a
    b
    c

    ab
    ac

    a
    a
    a
    a

    b
  `

  it('Counts total number of unique answers per group', () => {
    expect(getUniqueAnswerCounts(list)).toBe(11)
  })

  it('Counts total number of common answers per group', () => {
    expect(getCommonAnswerCounts(list)).toBe(6)
  })
})
