import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1, // Sprite height + width must be manually set in component
    flexDirection: "column"
  },
  avatar: {
    // flex: 1,
    width: 3 * (width / 4) ,
    height: height / 3
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  icon:{
    height: height / 30,
    width: height / 30
  }
});
