import { createStore } from "redux"
import { ACTION_TYPES } from "./action"

const initialState = {
  number: 0
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case ACTION_TYPES.ADD:
      return {
        ...state,
        number: state.number + 1
      }
    case ACTION_TYPES.SUBSTRACT:
      return {
        ...state,
        number: state.number - 1
      }
    default:
      return state
  }
}

let store = createStore(reducer)

export default store