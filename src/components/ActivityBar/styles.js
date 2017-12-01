import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  bar: {
    height: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  }
});