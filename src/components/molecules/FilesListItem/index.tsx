import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import moment from 'moment'

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
      <View style={styles.containerTitle}>
        <Text style={styles.textTitle}>{title}</Text>
      </View>
      <View style={styles.containerRow}>
        <Text style={styles.textSubtitle}>{`Expires ${moment(expiry).fromNow()}`}</Text>
        <Text style={styles.textSubtitle}>{size}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default FilesListItem
