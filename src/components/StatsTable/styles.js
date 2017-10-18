import {StyleSheet} from 'react-native';
import { height, width, fontWeight, fontSize } from '@lib/constants/style';

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
    fontWeight: fontWeight.normal,
    fontSize: fontSize.normal
  },
  statTextContainer: {
    height: height / 30,
    // width: width / 30
  }
})