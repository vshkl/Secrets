/* eslint-disable import/prefer-default-export */

import React from 'react'
import { NavigationContainer, RouteProp } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Close } from '../resources/icons'

import AddFileScreen from '../screens/AddFileScreen'
import AddNoteScreen from '../screens/AddNoteScreen'
import HomeScreen from '../screens/HomeScreen'
import NoteDetailsScreen from '../screens/NoteDetailsScreen'

type MainStackParamList = {
  AddFile: undefined,
  AddNote: undefined,
  Home: undefined,
  NoteDetails: { noteId: string },
}

export type NoteDetailsRouteProp = RouteProp<MainStackParamList, 'NoteDetails'>

const Stack = createStackNavigator<MainStackParamList>()

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="AddFile"
          component={AddFileScreen}
          options={{
            title: 'New file',
            headerBackImage: () => (
              <Close color="#000000" height={24} width={24}/>
            ),
          }}
        />
        <Stack.Screen
          name="AddNote"
          component={AddNoteScreen}
          options={{
            title: 'New note',
            headerBackImage: () => (
              <Close color="#000000" height={24} width={24}/>
            ),
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Secret' }}
        />
        <Stack.Screen
          name="NoteDetails"
          component={NoteDetailsScreen}
          options={{ title: 'Note details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export {
  MainNavigator,
}
