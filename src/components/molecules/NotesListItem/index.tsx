import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import moment from 'moment'

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
      <View style={styles.containerTitle}>
        <Text style={styles.textTitle} numberOfLines={2} ellipsizeMode="tail">{title}</Text>
      </View>
      <Text style={styles.textSubtitle}>{`Expires ${moment(expiry).fromNow()}`}</Text>
    </TouchableOpacity>
  )
}

export default NotesListItem
