import {Dimensions, StyleSheet} from 'react-native';
import {font, colors} from '@constants/style';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  profileContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    margin: height / 50,
  },
  activityGraph: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  dayLabel: {
    fontSize: font.normal,
    fontWeight: font.heavy,
    color: colors.White
  }
});