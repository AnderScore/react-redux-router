const initialState = {
  number: 1,
  weather: ""
}

export const counter = (state = initialState, action) => {
  if(action.type === 'INCREMENT') {
    return Object.assign({}, state, {number: state.number + action.amount})
  }
  else if(action.type === 'DECREMENT') {
    return Object.assign({}, state, {number: state.number - action.amount})
  }
  return state
}

export const weather = (state = initialState, action) => {
  if(action.type === 'LONDON') {
    return Object.assign({}, state, {weather: action.data})
  }
  return state
}