import React from 'react'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import HeaderButton from '../../components/atoms/HeaderButton'

import AddNoteScreenView from './view'

const AddNoteScreenContainer = () => {
  const navigation = useNavigation()

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton onPress={() => console.log('Save note')}>
          <Text>SAVE</Text>
        </HeaderButton>
      ),
    })
  }, [navigation])

  return (
    <AddNoteScreenView/>
  )
}

export default AddNoteScreenContainer
