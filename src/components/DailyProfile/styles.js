import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    margin: height / 50,
  }
});