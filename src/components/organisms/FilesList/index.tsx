import React from 'react'
import { FlatList } from 'react-native'

import FilesListItem from '../../molecules/FileListItem'

type File = {
  id: string,
  title: string,
  size: number,
  expiry: Date,
}

const FilesList: React.FC<{
  files: File[],
  onFilePress: (id: string) => void,
}> = ({ files, onFilePress }) => {
  return (
    <FlatList
      data={files}
      keyExtractor={(item: File) => item.id}
      renderItem={({ item }: { item: File }) => (
        <FilesListItem
          id={item.id}
          title={item.title}
          size={item.size}
          expiry={item.expiry}
          onPress={onFilePress}
        />
      )}
    />
  )
}

export default FilesList
