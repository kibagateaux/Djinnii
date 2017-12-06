import {Dimensions, StyleSheet} from 'react-native';
import styleGuide from '@constants/style';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gold',
    alignSelf: "center",
  },
  mainText: {
    flex: 2,
    fontSize: styleGuide.font.size.large
  },
  mainButton: {
    flex: 2
  },
  mainButtonText: {
    flex: 2,
    fontSize: styleGuide.font.size.large
  },
  subText: {
    flex: 1,
    fontSize: styleGuide.font.size.normal
  },
  subButton: {
    flex: 1
  },
});