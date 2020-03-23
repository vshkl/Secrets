import React from 'react'

import { Note } from '../../store/models/notes/types'

const NoteDetailsScreenView: React.FC<{ note: Note }> = ({ note }) => {
  console.log(JSON.stringify(note))

  return null
}

export default NoteDetailsScreenView
