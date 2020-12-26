const firstHalf = (arr: any[]) => arr.slice(0, arr.length / 2)
const lastHalf = (arr: any[]) => arr.slice(arr.length / 2)

type State = {
  row: number[]
  col: number[]
}

type Char = 'F' | 'B' | 'L' | 'R'

const reducer = (state: State, char: Char) => {
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
    state = reducer(state, char as Char)
  })

  return Object.values(state).flat()
}
