import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  containerMain: {
    paddingHorizontal: Platform.OS === 'android' ? 16 : 15,
    paddingVertical: Platform.OS === 'android' ? 8 : 5,
  },
  containerTitle: {
    paddingBottom: Platform.OS === 'android' ? 4 : 5,
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTitle: {
    fontSize: 18,
  },
  textSubtitle: {
    fontSize: 12,
  },
})
