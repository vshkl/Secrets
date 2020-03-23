import React from 'react'
import { Alert, Share } from 'react-native'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useNavigation } from '@react-navigation/native'
import moment from 'moment'

import HeaderButton from '../../components/atoms/HeaderButton'
import { Share as ShareIcon } from '../../resources/icons'
import { NoteDetailsRouteProp } from '../../navigation'
import notesSelectors from '../../store/models/notes/selectors'
import { Note } from '../../store/models/notes/types'

import NoteDetailsScreenView from './view'

const NoteDetailsScreenContainer: React.FC<{
  route: NoteDetailsRouteProp,
  note: Note,
}> = ({ note }) => {
  const navigation = useNavigation()

  const shareLink = async () => {
    try {
      await Share.share({
        message: `The link expires ${moment(note.expiry).fromNow()}\n${note.link}`,
      })
    } catch (error) {
      Alert.alert('Sharee failed', error.message)
    }
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton onPress={shareLink}>
          <ShareIcon color="#000000" width={24} height={24}/>
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
