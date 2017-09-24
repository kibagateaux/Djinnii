
import {StyleSheet, Dimensions} from  'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: height * 0.06,
    paddingHorizontal: width * 0.03

  },
  formContainer: {

    justifyContent: 'space-around',
    // paddingVertical: height * 0.06
  },
});