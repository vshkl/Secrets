const getState = (state: any) => state.notes

const notesSelector = (state: any) => getState(state).notes

export default {
  notesSelector,
}
