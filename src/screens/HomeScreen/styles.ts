import { Dimensions, Platform, StyleSheet } from 'react-native'

export const tabsInitialLayout = {
  width: Dimensions.get('window').width,
}

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  containerFab: {
    position: 'absolute',
    bottom: Platform.OS === 'android' ? 16 : 15,
    end: Platform.OS === 'android' ? 16 : 15,
  },
})
