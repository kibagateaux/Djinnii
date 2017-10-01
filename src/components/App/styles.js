import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
const actionButtonSize = width / 4;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple'
  },
  localActionButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'space-around',
    // alignItems: 'center'
  },
  localActionButtons: {
    height: actionButtonSize,
    width: actionButtonSize,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOpacity: 2,
    alignItems: 'center',
    margin: actionButtonSize / 10,
    
    // justifyContent: 'space-around',
    // padding: actionButtonSize / 2
  }
})