import { Platform, StyleSheet } from 'react-native'

export default StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  containerInput: {
    paddingHorizontal: Platform.OS === 'android' ? 16 : 15,
    paddingVertical: Platform.OS === 'android' ? 8 : 5,
  },
  inputNote: {
    fontSize: 18,
  },
})
