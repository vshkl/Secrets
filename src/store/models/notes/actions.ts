import types, { AddNoteAction, Note } from './types'

export default {
  addNote: {
    init: (text: string): AddNoteAction => ({
      type: types.addNote.init,
      payload: { text },
    }),
    success: (note: Note): AddNoteAction => ({
      type: types.addNote.success,
      payload: { note },
    }),
    failure: (): AddNoteAction => ({
      type: types.addNote.failure,
      payload: null,
    }),
  },
}
