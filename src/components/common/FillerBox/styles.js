import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  mainText: {
    flex: 2
  },
  mainButton: {
    flex: 2
  },
  subText: {
    flex: 1
  },
  subButton: {
    flex: 1
  },
});