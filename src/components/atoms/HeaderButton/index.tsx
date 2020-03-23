import React from 'react'
import { TouchableOpacity } from 'react-native'

import styles from './styles'

const HeaderButton: React.FC<{ onPress: () => void }> = ({ children, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {children}
    </TouchableOpacity>
  )
}

export default HeaderButton
