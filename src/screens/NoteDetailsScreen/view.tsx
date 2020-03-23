import React from 'react'
import { View, Text } from 'react-native'
import moment from 'moment'

import { Note } from '../../store/models/notes/types'

import styles from './styles'

const NoteDetailsScreenView: React.FC<{ note: Note }> = ({ note }) => {
  return (
    <View style={styles.containerMain}>
      <View style={styles.containerExpiry}>
        <Text style={styles.textExpiry}>{`The link expires ${moment(note.expiry).fromNow()}`}</Text>
      </View>
      <Text style={styles.textNote}>{note.text}</Text>
    </View>
  )
}

export default NoteDetailsScreenView
