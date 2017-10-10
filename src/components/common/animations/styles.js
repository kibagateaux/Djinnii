import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const [containerHeight, containerWidth] = [height, width * 0.8];

export default StyleSheet.create({
  backdrop: {
    flex: 1
  },
  container: {
    height: containerHeight,
    width: containerWidth,
    alignSelf: 'center',
    marginTop: height / 9,
  }
});
