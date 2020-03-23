import React from 'react'
import { FlatList } from 'react-native'

import NotesListItem from '../../molecules/NotesListItem'
import { Note } from '../../../store/models/notes/types'

const NotesList: React.FC<{
  notes: Note[],
  onNotePress: (id: string) => void,
}> = ({ notes, onNotePress }) => {
  return (
    <FlatList
      data={notes}
      keyExtractor={(item: Note) => item.key}
      renderItem={({ item }: { item: Note }) => (
        <NotesListItem
          id={item.key}
          title={item.text}
          expiry={item.expiry}
          onPress={onNotePress}
        />
      )}
    />
  )
}

export default NotesList
