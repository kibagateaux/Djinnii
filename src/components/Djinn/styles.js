import { StyleSheet } from 'react-native';
import { height, width } from '@lib/constants/style';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: width / 10,
    marginTop: width / 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'gold'
  },
  switchButton: {
    position: 'absolute',
    height: height / 20,
    top: height / 2.5
  }
})