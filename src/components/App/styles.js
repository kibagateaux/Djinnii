import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const actionButtonSize = width / 3;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  localActionButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    // alignItems: 'center'
  },
  localActionButtons: {
    height: actionButtonSize,
    width: actionButtonSize,
    flex: 2
    // justifyContent: 'space-around',
    // padding: actionButtonSize / 2
  }
})