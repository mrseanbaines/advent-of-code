const firstHalf = (arr: any[]) => arr.slice(0, arr.length / 2)
const lastHalf = (arr: any[]) => arr.slice(arr.length / 2)

type State = {
  row: number[]
  col: number[]
}

const reducer = (state: State, char: string) => {
  switch (char) {
    case 'F': {
      return {
        ...state,
        row: firstHalf(state.row),
      }
    }

    case 'B': {
      return {
        ...state,
        row: lastHalf(state.row),
      }
    }

    case 'L': {
      return {
        ...state,
        col: firstHalf(state.col),
      }
    }

    case 'R': {
      return {
        ...state,
        col: lastHalf(state.col),
      }
    }

    default: {
      throw new Error('Unknown code character')
    }
  }
}

export const findSeatPosition = (code: string) => {
  const totalRows = Array.from(Array(128), (_, i) => i)
  const totalCols = Array.from(Array(8), (_, i) => i)

  let state = {
    row: totalRows,
    col: totalCols,
  }

  code.split('').forEach(char => {
    state = reducer(state, char)
  })

  return Object.values(state).flat()
}

export const getSeatIDFromPosition = ([row, col]: number[]) => row * 8 + col

const range = (start: number, end: number) => Array.from(Array(end - start + 1), (_, i) => start + i)

export const findMissingSeat = (codes: string[]) => {
  const result = codes.map(findSeatPosition).map(getSeatIDFromPosition)

  return range(result[0], result.slice(-1)[0]).find(x => !result.includes(x))
}
