import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get("window");
import {font} from '@constants/style';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: width / 50
  },
  statRow: {
    margin: width / 200,
    overflow: 'hidden',
  },
  statText: {
    fontWeight: font.weight.normal,
    fontSize: font.size.normal
  },
  statTextContainer: {
    height: height / 30,
    // width: width / 30
  }
})