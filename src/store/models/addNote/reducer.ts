import types, { AddNoteAction, AddNoteState } from './types'

const initialState: AddNoteState = {
  text: '',
  status: 'idle',
}

const addNoteReducer = (
  state: AddNoteState = initialState,
  action: AddNoteAction,
): AddNoteState => {
  switch (action.type) {
    case types.addNote.init:
      return state
    case types.addNote.success:
      return state
    case types.addNote.failure:
      return state
    default:
      return state
  }
}

export default addNoteReducer
