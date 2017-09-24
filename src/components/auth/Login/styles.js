import {StyleSheet, Dimensions} from 'react-native';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'purple',

  },
  activityIndicator: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  formContainer: {
    height: 250,
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'white'
  },
  input: {
    height: height / 10,
  },
  validationText: {
  },
  signIn: {
    width: width / 2,
    height: width / 10,
  },
});

const inputStyles = {
  height: height / 10,
}