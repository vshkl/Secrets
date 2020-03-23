import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { prepareStore } from './store/config'
import { MainNavigator } from './navigation'

const App = () => {
  const { store, persistor } = prepareStore()

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigator/>
      </PersistGate>
    </Provider>
  )
}

export default App
