
import {StyleSheet, Dimensions} from  'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
  },
  formContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    // padding: height / 20
  },
  inputContainer: {
  },
  inputStyles: {
    margin: height / 20
  },
  errorMessage: {
    color: 'red',
  },
  loginButton: {
    justifyContent: 'flex-start'
  },
  signupButton: {
    paddingBottom: height / 20
  }
});