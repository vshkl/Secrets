import React from 'react'
import { View, Text } from 'react-native'

import { Note } from '../../store/models/notes/types'

import styles from './styles'

const NoteDetailsScreenView: React.FC<{ note: Note }> = ({ note }) => {
  return (
    <View style={styles.containerMain}>
      <Text style={styles.textNote}>
        {note.text}
      </Text>
    </View>
  )
}

export default NoteDetailsScreenView
