import React from 'react'
import { TabView } from 'react-native-tab-view'

import FilesList from '../../components/organisms/FilesList'
import NotesList from '../../components/organisms/NotesList'

import { tabsInitialLayout } from './styles'

const HomeScreenView: React.FC<{
  files: any,
  notes: any,
  onFilePress: (id: string) => void,
  onNotePress: (id: string) => void,
}> = ({
  files, notes, onFilePress, onNotePress,
}) => {
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'files', title: 'Files' },
    { key: 'notes', title: 'Notes' },
  ])

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={({ route }) => {
        switch (route.key) {
          case 'files':
            return (
              <FilesList
                files={files}
                onFilePress={onFilePress}
              />
            );
          case 'notes':
            return (
              <NotesList
                notes={notes}
                onNotePress={onNotePress}
              />
            );
        }
      }}
      onIndexChange={setIndex}
      initialLayout={tabsInitialLayout}
    />
  )
}

export default HomeScreenView
