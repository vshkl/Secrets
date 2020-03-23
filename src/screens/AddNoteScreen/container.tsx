import React from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useNavigation } from '@react-navigation/native'

import HeaderButton from '../../components/atoms/HeaderButton'
import notesActions from '../../store/models/notes/actions'

import AddNoteScreenView from './view'

const AddNoteScreenContainer: React.FC<{
  addNote: (noteText: string) => void,
}> = ({ addNote }) => {
  const [noteText, setNoteText] = React.useState('')
  const navigation = useNavigation()

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton onPress={() => addNote(noteText)}>
          <Text>SAVE</Text>
        </HeaderButton>
      ),
    })
  }, [navigation, noteText])

  return (
    <AddNoteScreenView
      onNoteTextChange={setNoteText}
    />
  )
}


const mapStateToProps = createStructuredSelector({
})

const mapDispatchToProps = {
  addNote: notesActions.addNote.init,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNoteScreenContainer)
