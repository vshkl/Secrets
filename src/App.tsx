import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import AddFileScreen from './screens/AddFileScreen'
import AddNoteScreen from './screens/AddNoteScreen'
import HomeScreen from './screens/HomeScreen'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="AddFile" component={AddFileScreen}/>
        <Stack.Screen name="AddNote" component={AddNoteScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
