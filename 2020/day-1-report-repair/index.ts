export const findSumParts = (sum: number, numbers: number[]) => {
  let index = 0

  const findMatchingNumbers = (currentNum: number): [number, number] => {
    const otherNumbers = numbers.filter(num => num !== currentNum)
    const match = otherNumbers.find(num => currentNum + num === sum)

    if (match) {
      return [match, currentNum]
    }

    // If there's no next number, then we've gone through every combination and there is no match
    if (!numbers[index + 1]) {
      throw new Error(`Couldn't find sum from input numbers`)
    }

    return findMatchingNumbers(numbers[index++])
  }

  return findMatchingNumbers(numbers[index])
}
