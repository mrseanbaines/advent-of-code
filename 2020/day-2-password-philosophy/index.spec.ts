import { getValidPasswords1, getValidPasswords2 } from './'

describe('Day 2: Password Philosophy', () => {
  const list = `
    1-3 a: abcde
    1-3 b: cdefg
    2-9 c: ccccccccc
  `

  describe('Min-max character count', () => {
    it('given a list, tells how many passwords are valid', () => {
      const result = getValidPasswords1(list)
      const expected = 2

      expect(result).toHaveLength(expected)
    })
  })

  describe('Characters in given positions', () => {
    it('given a list, tells how many passwords are valid', () => {
      const result = getValidPasswords2(list)
      const expected = 1

      expect(result).toHaveLength(expected)
    })
  })
})
