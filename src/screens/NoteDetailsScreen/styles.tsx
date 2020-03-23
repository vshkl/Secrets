import { Platform, StyleSheet } from 'react-native'

export default StyleSheet.create({
  containerMain: {
    flex: 1,
    paddingHorizontal: Platform.OS === 'android' ? 16 : 15,
    paddingVertical: Platform.OS === 'android' ? 8 : 5,
    backgroundColor: '#FAFAFA',
  },
  containerExpiry: {
    paddingBottom: Platform.OS === 'android' ? 8 : 5,
  },
  textNote: {
    fontSize: 18,
  },
  textExpiry: {
    fontSize: 14,
  },
})
