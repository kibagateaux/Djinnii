import {Dimensions, StyleSheet} from 'react-native';
import {font} from '@constants/style';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1
  },
  fillerBoxContainer: {
    height: height / 5,
    marginTop: height / 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  legendItem: {
    flexDirection: 'column',
    margin: 20,
  },
  legendItemIcon: {
    height: 10,
    width: 10, 
    borderRadius: 5,
    alignSelf: "center"
  }    
});