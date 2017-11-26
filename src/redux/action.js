export const ACTION_TYPES = {
  ADD: "ADD",
  SUBSTRACT: "SUBSTRACT"
}

export function add() {
  return {
    type: ACTION_TYPES.ADD
  }
}

export function substract() {
  return {
    type: ACTION_TYPES.SUBSTRACT
  }
}