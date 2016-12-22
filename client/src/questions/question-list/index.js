import { BUTTON_EVENT } from '../../../../common/websocket'
import questionReducer, { START } from '../question'

export const DELETE = 'clicker/questions/DELETE'

export default function reducer(state = [], action) {
  switch (action.type) {
  case START: {
    return [
      ...state,
      questionReducer(undefined, action)
    ]
  }
  case BUTTON_EVENT: {
    let last = getLastQuestion(state)
    if (! last) return state
    let newLast = questionReducer(last, action)
    if (last === newLast) return state
    return [
      ...state.slice(0, -1),
      newLast,
    ]
  }
  case DELETE:
    return state.filter(q => q.id !== action.id)
  default: return state
  }
}

export function deleteQuestion(id) {
  return { type: DELETE, id }
}

export function getNextId(state) {
  return state
    .map(q => q.id)
    .reduce((max, i) => Math.max(max, i), 0)
    + 1
}

export function getQuestion(state, id) {
  return state.find(q => q.id === id)
}

export function getLastQuestion(state) {
  return state.slice(-1)[0]
}