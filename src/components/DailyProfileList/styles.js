import {Dimensions, StyleSheet} from 'react-native';
import {font} from '@constants/style';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1
  },
  fillerBoxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});