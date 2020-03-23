import { createSelector } from 'reselect'
import { Note } from './types'

const getState = (state: any) => state.notes

const notesSelector = (state: any) => getState(state).notes

const noteByIdSelector = createSelector(
  notesSelector,
  (_: any, props: any) => props.route.params.noteId,
  (notes: Note[], id: string) => notes.find((note: Note) => note.key === id),
)

export default {
  notesSelector,
  noteByIdSelector,
}
