import React from 'react'
import { TextInput, View } from 'react-native'

import styles from './styles'

const AddNoteScreenView: React.FC<{
  onNoteTextChange: (text: string) => void,
}> = ({ onNoteTextChange }) => {
  return (
    <View style={styles.containerMain}>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.inputNote}
          onChangeText={onNoteTextChange}
        />
      </View>
    </View>
  )
}

export default AddNoteScreenView
