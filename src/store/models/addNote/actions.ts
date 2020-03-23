import types, { AddNoteAction } from './types'

export default {
  addNote: {
    init: (text: string): AddNoteAction => ({
      type: types.addNote.init,
      payload: { text },
    }),
    success: (): AddNoteAction => ({
      type: types.addNote.success,
      payload: null,
    }),
    failure: (): AddNoteAction => ({
      type: types.addNote.failure,
      payload: null,
    }),
  },
}
