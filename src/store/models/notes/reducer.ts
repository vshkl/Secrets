import types, { AddNoteAction, NotesState } from './types'

const initialState: NotesState = {
  notes: [],
  addingStatus: 'idle',
}

const notesReducer = (
  state: NotesState = initialState,
  action: AddNoteAction,
): NotesState => {
  switch (action.type) {
    // Add note
    case types.addNote.init:
      return {
        ...state,
        addingStatus: 'loading',
      }
    case types.addNote.success:
      return {
        ...state,
        addingStatus: 'success',
        notes: [...state.notes, action.payload.note],
      }
    case types.addNote.failure:
      return {
        ...state,
        addingStatus: 'failure',
      }

    // Default
    default:
      return state
  }
}

export default notesReducer
