import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

import styles from './styles'

const FilesListItem: React.FC<{
  id: string,
  title: string,
  size: number,
  expiry: Date,
  onPress: (id: string) => void,
}> = ({
  id, title, size, expiry, onPress,
}) => {
  return (
    <TouchableOpacity style={styles.containerMain} onPress={() => onPress(id)}>
      <Text style={styles.textTitle}>{title}</Text>
      <View style={styles.containerRow}>
        <Text style={styles.textSubtitle}>{size}</Text>
        <Text style={styles.textSubtitle}>{expiry.toDateString()}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default FilesListItem