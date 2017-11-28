import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1 // Sprite height + width must be manually set in component
  },
  avatar: {
    // flex: 1,
    width: width / 1.5,
    height: height / 4
  }
});
