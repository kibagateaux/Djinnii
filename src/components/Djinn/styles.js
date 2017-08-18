import {StyleSheet} from 'react-native';
import { height, width } from '@lib/constants/style';

export default StyleSheet.create({
  container: {
    height: height / 4, 
    width: width,
    margin: width / 10,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  spriteContainer: {
    flex: 1
  },
  statsContainer: {
    flex: 1
  }
})