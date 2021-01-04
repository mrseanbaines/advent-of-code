const parseList = (list: string) => {
  return list
    .trim()
    .split(/\n\n/)
    .map(group => {
      return group
        .trim()
        .split(/\s+/)
        .map(answers => answers.split(''))
    })
}

const getUniqueItems = (arr: any[]) => Array.from(new Set(arr))

export const getUniqueAnswerCounts = (list: string) => {
  return parseList(list).reduce((sum, group) => {
    const uniqueAnswers = getUniqueItems(group.flat())

    return sum + uniqueAnswers.length
  }, 0)
}

export const getCommonAnswerCounts = (list: string) => {
  return parseList(list).reduce((sum, group) => {
    const commonAnswers = getUniqueItems(
      group.reduce(
        (acc, answers) => acc.concat(answers.filter(answer => group.every(answers => answers.includes(answer)))),
        [],
      ),
    )

    return sum + commonAnswers.length
  }, 0)
}
