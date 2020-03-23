import React from 'react'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import HeaderButton from '../../components/atoms/HeaderButton'

import AddFileScreenView from './view'

const AddFileScreenContainer = () => {
  const navigation = useNavigation()

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton onPress={() => console.log('Save file')}>
          <Text>SAVE</Text>
        </HeaderButton>
      ),
    })
  }, [navigation])

  return (
    <AddFileScreenView/>
  )
}

export default AddFileScreenContainer
