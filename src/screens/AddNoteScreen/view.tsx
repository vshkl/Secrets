import React from 'react'
import { TextInput, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import styles from './styles'

const AddNoteScreenView: React.FC<{
  onNoteTextChange: (text: string) => void,
}> = ({ onNoteTextChange }) => {
  const noteInputRef = React.useRef<TextInput>(null)

  useFocusEffect(() => {
    if (noteInputRef && noteInputRef.current) {
      noteInputRef.current.focus()
    }
  });

  return (
    <View style={styles.containerMain}>
      <TextInput
        style={styles.inputNote}
        ref={noteInputRef}
        multiline
        placeholder="Type something..."
        onChangeText={onNoteTextChange}
      />
    </View>
  )
}

export default AddNoteScreenView
