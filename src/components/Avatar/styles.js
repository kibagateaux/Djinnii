import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  avatar: {
    width: height / 3,
    height: height / 3,
    alignSelf: "center",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  icon: {
    height: height / 30,
    width: height / 30,
  },
  avatarTitleName: {
    alignSelf: "center",
    textAlign: "center"
  }
});
