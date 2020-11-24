const state = {
  count: 0
}

export const reducer = (mutableState = { ...state }, action) => {
  switch (action.type) {
    case 'INCREASE':
      return {
        ...mutableState,
        count: mutableState.count + 1
      }
    case 'DECREASE':
      return {
        ...mutableState,
        count: mutableState.count - 1
      }
    default:
      return mutableState
  }
}
