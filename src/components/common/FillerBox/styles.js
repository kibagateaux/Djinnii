import {Dimensions, StyleSheet} from 'react-native';
import {font, colors} from '@constants/style';
const {height, width} = Dimensions.get('window');

export default {
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: height / 50
  },
  centerText: {
    textAlign: "center",
  },
  button: {
    flex: 1,    
    shadowRadius: 1,
    shadowOffset: { width: 0.2, height: 1 },
    shadowOpacity: 0.6,
    shadowColor: 'black',
    elevation: 5,
  },
  mainText: {
    flex: 2,
    fontSize: font.size.large
  },
  get mainButton () {
    return ({
      ...this.button,
      width: width / 3,
      justifyContent: 'center',
      alignItems: 'center'
    })
  },
  mainButtonText: {
    // flex: 2,
    fontSize: font.size.large
  },
  subText: {
    flex: 1,
    fontSize: font.size.normal
  },
  subButton: {
    flex: 1
  },
};