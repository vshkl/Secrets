import React from 'react'
import { FlatList } from 'react-native'

import NotesListItem from '../../molecules/NotesListItem'

type Note = {
  id: string,
  title: string,
  expiry: Date,
}

const NotesList: React.FC<{
  notes: Note[],
  onNotePress: (id: string) => void,
}> = ({ notes, onNotePress }) => {
  return (
    <FlatList
      data={notes}
      keyExtractor={(item: Note) => item.id}
      renderItem={({ item }: { item: Note }) => (
        <NotesListItem
          id={item.id}
          title={item.title}
          expiry={item.expiry}
          onPress={onNotePress}
        />
      )}
    />
  )
}

export default NotesList
