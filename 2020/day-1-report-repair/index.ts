export const findSumParts = (sum: number, numbers: number[], numItems: number) => {
  const getMatchingSum = (combination: number[]) => combination.reduce((sum, num) => sum + num, 0) === sum

  const match = combinations(numbers, numItems).find(getMatchingSum)

  if (!match) {
    throw new Error(`Couldn't find sum from input numbers`)
  }

  return match
}

const combinations = (arr: number[], numItems: number) => {
  if (numItems > arr.length) {
    return []
  }

  if (numItems === arr.length) {
    return [arr]
  }

  if (numItems === 1) {
    return arr.map(value => [value])
  }

  return arr.reduce((acc: number[][], current, index) => {
    const tail = combinations(arr.slice(index + 1), numItems - 1)

    tail.forEach(value => acc.push([current, ...value]))

    return acc
  }, [])
}
