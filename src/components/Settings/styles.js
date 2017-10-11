import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  settingsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  }
});