import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');
const actionButtonSize = width / 4;
export default StyleSheet.create({
  localActionButtons: {

  },
  localActionButtonContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'space-around',
  },
  localActionButtons: {
    height: actionButtonSize,
    width: actionButtonSize,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOpacity: 2,
    alignItems: 'center',
    margin: actionButtonSize / 10,
  }
});