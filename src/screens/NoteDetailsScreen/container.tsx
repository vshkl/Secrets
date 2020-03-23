import React from 'react'
import { useNavigation } from '@react-navigation/native'

import HeaderButton from '../../components/atoms/HeaderButton'
import { Share } from '../../resources/icons'

import NoteDetailsScreenView from './view'

const NoteDetailsScreenContainer = () => {
  const navigation = useNavigation()

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton onPress={() => {}}>
          <Share color="#000000" width={24} height={24}/>
        </HeaderButton>
      ),
    })
  }, [navigation])

  return (
    <NoteDetailsScreenView/>
  )
}

export default NoteDetailsScreenContainer
