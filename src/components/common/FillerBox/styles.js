import {Dimensions, StyleSheet} from 'react-native';
import {font} from '@constants/style';
const {height, width} = Dimensions.get('window');

export default {
  container: {
    flex: 1,
    backgroundColor: 'gold',
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center"
  },
  centerText: {
    textAlign: "center",
  },
  button: {
    shadowRadius: 1,
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.4,
    shadowColor: 'black',
    elevation: 4,
  },
  mainText: {
    flex: 2,
    fontSize: font.size.large
  },
  get mainButton () {
    return ({
      ...this.button,
      // height: height / 20,
      margin: height / 20,
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