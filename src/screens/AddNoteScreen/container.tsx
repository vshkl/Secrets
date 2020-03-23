import React from 'react'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import HeaderButton from '../../components/atoms/HeaderButton'

import AddNoteScreenView from './view'

const AddNoteScreenContainer = () => {
  const [noteText, setNoteText] = React.useState('')
  const navigation = useNavigation()

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton onPress={() => console.log(noteText)}>
          <Text>SAVE</Text>
        </HeaderButton>
      ),
    })
  }, [navigation, noteText])

  return (
    <AddNoteScreenView
      onNoteTextChange={setNoteText}
    />
  )
}

export default AddNoteScreenContainer
