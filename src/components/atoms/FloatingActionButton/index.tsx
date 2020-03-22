import React from 'react'
import { TouchableOpacity } from 'react-native'

import { Plus } from '../../../resources/icons'

import styles from './styles'

const FloatingActionButton: React.FC<{ onPress: () => void }> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Plus color="#FAFAFA" width={24} height={24}/>
    </TouchableOpacity>
  )
}

export default FloatingActionButton
