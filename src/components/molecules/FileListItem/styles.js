import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  containerMain: {
    paddingHorizontal: Platform.OS === 'android' ? 16 : 15,
    paddingVertical: Platform.OS === 'android' ? 8 : 5,
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTitle: {
    fontSize: 20,
  },
  textSubtitle: {
    fontSize: 14,
  },
})
