const addNote = {
  init: 'ADD_NOTE.INIT',
  success: 'ADD_NOTE.SUCCESS',
  failure: 'ADD_NOTE.FAILURE',
}

export type Note = {
  text: string,
  key: string,
  link: string,
  expiry: Date,
}

export type NotesState = {
  notes: Note[],
  addingStatus: 'idle' | 'loading' | 'success' | 'failure',
}

export type AddNoteAction = {
  type: typeof addNote.init | typeof addNote.success | typeof addNote.failure,
  payload: any,
}

export default {
  addNote,
}
