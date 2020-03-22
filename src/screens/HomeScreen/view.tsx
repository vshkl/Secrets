import React from 'react'
import { Dimensions, View, Text } from 'react-native'
import { TabView } from 'react-native-tab-view'

import FilesList from '../../components/organisms/FilesList'

const dummyFiles = [1, 2, 3, 4, 5]
  .map((it) => ({
    id: it.toString(),
    title: `File ${it}`,
    size: it * 42,
    expiry: new Date(),
  }))

const Files = () => (
  <View>
    <FilesList
      files={dummyFiles}
      onFilePress={(id) => {
        console.log(id)
      }}
    />
  </View>
)

const Notes = () => (
  <View>
    <Text>Files</Text>
  </View>
)

const initialLayout = { width: Dimensions.get('window').width }

const HomeScreenView = () => {
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
            return <Files/>;
          case 'notes':
            return <Notes/>;
        }
      }}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  )
}

export default HomeScreenView
