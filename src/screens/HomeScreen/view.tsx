import React from 'react'
import { View } from 'react-native'
import { TabView } from 'react-native-tab-view'

import FloatingActionButton from '../../components/atoms/FloatingActionButton'
import FilesList from '../../components/organisms/FilesList'
import NotesList from '../../components/organisms/NotesList'

import styles, { tabsInitialLayout } from './styles'

const HomeScreenView: React.FC<{
  files: any,
  notes: any,
  onFilePress: (id: string) => void,
  onNotePress: (id: string) => void,
  onAddFile: () => void,
  onAddNote: () => void,
}> = ({
  files, notes, onFilePress, onNotePress, onAddFile, onAddNote,
}) => {
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'files', title: 'Files' },
    { key: 'notes', title: 'Notes' },
  ])

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={({ route }) => {
          switch (route.key) {
            case 'files':
              return <FilesList files={files} onFilePress={onFilePress}/>
            case 'notes':
              return <NotesList notes={notes} onNotePress={onNotePress}/>
          }
        }}
        onIndexChange={setIndex}
        initialLayout={tabsInitialLayout}
      />
      <View style={styles.containerFab}>
        <FloatingActionButton onPress={index === 0 ? onAddFile : onAddNote}/>
      </View>
    </View>
  )
}

export default HomeScreenView
