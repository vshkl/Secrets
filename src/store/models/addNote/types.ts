const addNote = {
  init: 'ADD_NOTE.INIT',
  success: 'ADD_NOTE.SUCCESS',
  failure: 'ADD_NOTE.FAILURE',
}

export type AddNoteState = {
  text: string,
  status: 'idle' | 'loading' | 'success' | 'failure',
}

export type AddNoteAction = {
  type: typeof addNote.init | typeof addNote.success | typeof addNote.failure,
  payload: any,
}

export default {
  addNote,
}
