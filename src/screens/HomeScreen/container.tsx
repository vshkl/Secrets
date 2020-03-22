import React from 'react'

import HomeScreenView from './view'

const dummyFiles = [1, 2, 3, 4, 5]
  .map((it) => ({
    id: it.toString(),
    title: `File ${it}`,
    size: it * 42,
    expiry: new Date(),
  }))

const dummyNotes = [1, 2, 3, 4, 5]
  .map((it) => ({
    id: it.toString(),
    title: `Note ${it}`,
    expiry: new Date(),
  }))

const HomeScreenContainer = () => {
  return (
    <HomeScreenView
      files={dummyFiles}
      notes={dummyNotes}
      onFilePress={(id: string) => {
        console.log(id)
      }}
      onNotePress={(id: string) => {
        console.log(id)
      }}
      onAddFile={() => {
        console.log('Add file')
      }}
      onAddNote={() => {
        console.log('Add note')
      }}
    />
  )
}

export default HomeScreenContainer
