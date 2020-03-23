import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import HeaderButton from '../../components/atoms/HeaderButton'
import { Share } from '../../resources/icons'
import { NoteDetailsRouteProp } from '../../navigation'

import NoteDetailsScreenView from './view'

const NoteDetailsScreenContainer = () => {
  const navigation = useNavigation()
  const route = useRoute<NoteDetailsRouteProp>()

  console.log(route.params.noteId)

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
