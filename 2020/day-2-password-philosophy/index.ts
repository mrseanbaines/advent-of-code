const parseList = (list: string) => {
  return list
    .trim()
    .split('\n')
    .map(entry => entry.split(': '))
    .map(([policy, password]) => {
      const [range, char] = policy.trim().split(' ')
      const [min, max] = range.split('-').map(Number)

      return { min, max, char, password }
    })
}

export const getValidPasswords1 = (list: string) => {
  const entries = parseList(list)

  return entries.filter(({ min, max, char, password }) => {
    const charCount = Array.from(password.matchAll(new RegExp(char, 'g'))).length

    return charCount >= min && charCount <= max
  })
}

export const getValidPasswords2 = (list: string) => {
  const entries = parseList(list)

  return entries.filter(({ min, max, char, password }) => {
    const firstChar = password.charAt(min - 1)
    const lastChar = password.charAt(max - 1)

    return [firstChar, lastChar].filter(c => c === char).length === 1
  })
}
