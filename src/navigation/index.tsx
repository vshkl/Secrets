/* eslint-disable import/prefer-default-export */

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Close } from '../resources/icons'

import AddFileScreen from '../screens/AddFileScreen'
import AddNoteScreen from '../screens/AddNoteScreen'
import HomeScreen from '../screens/HomeScreen'

const Stack = createStackNavigator()

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
          options={{ title: 'Home' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export {
  MainNavigator,
}
