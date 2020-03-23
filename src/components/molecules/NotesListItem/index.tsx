import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './styles'

const NotesListItem: React.FC<{
  id: string,
  title: string,
  expiry: Date,
  onPress: (id: string) => void,
}> = ({
  id, title, expiry, onPress,
}) => {
  return (
    <TouchableOpacity style={styles.containerMain} onPress={() => onPress(id)}>
      <Text style={styles.textTitle}>{title}</Text>
      <Text style={styles.textSubtitle}>{expiry.toString()}</Text>
    </TouchableOpacity>
  )
}

export default NotesListItem
