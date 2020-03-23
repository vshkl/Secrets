import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useNavigation } from '@react-navigation/native'

import HomeScreenView from './view'
import notesSelectors from '../../store/models/notes/selectors'
import { Note } from '../../store/models/notes/types'

const dummyFiles = [1, 2, 3, 4, 5]
  .map((it) => ({
    id: it.toString(),
    title: `File ${it}`,
    size: it * 42,
    expiry: new Date(),
  }))

const HomeScreenContainer: React.FC<{ notes: Note[] }> = ({ notes }) => {
  const navigation = useNavigation()

  return (
    <HomeScreenView
      files={dummyFiles}
      notes={notes}
      onFilePress={(id: string) => console.log(id)}
      onNotePress={(id: string) => navigation.navigate('NoteDetails', { noteId: id })}
      onAddFile={() => navigation.navigate('AddFile')}
      onAddNote={() => navigation.navigate('AddNote')}
    />
  )
}

const mapStateToProps = createStructuredSelector({
  notes: notesSelectors.notesSelector,
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenContainer)
