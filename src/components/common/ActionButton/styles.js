import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');
const actionButtonSize = width / 4;
export default StyleSheet.create({
  icon: {
    position: 'absolute',
    flexDirection: "row",
    justifyContent: 'center'
  }
});
