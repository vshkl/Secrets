import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useNavigation } from '@react-navigation/native'

import HeaderButton from '../../components/atoms/HeaderButton'
import { Share } from '../../resources/icons'
import { NoteDetailsRouteProp } from '../../navigation'

import NoteDetailsScreenView from './view'
import notesSelectors from '../../store/models/notes/selectors'
import { Note } from '../../store/models/notes/types'

const NoteDetailsScreenContainer: React.FC<{
  route: NoteDetailsRouteProp,
  note: Note,
}> = ({ note }) => {
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
    <NoteDetailsScreenView
      note={note}
    />
  )
}

const mapStateToProps = createStructuredSelector({
  note: notesSelectors.noteByIdSelector,
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetailsScreenContainer)
