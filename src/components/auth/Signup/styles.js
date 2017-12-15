
import {StyleSheet, Dimensions} from  'react-native';
import {colors} from '@constants/style';

const {height, width} = Dimensions.get('window');
const itemHeight = height / 12;
// const buttonWidth = width / 3;

export default StyleSheet.create({
  container: {
    width,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-around'
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  labelIcon: {
    height: height / 30,
    width: height / 30,
    paddingRight: width / 36
  },
  inputStyles: {
    height: itemHeight / 2,
    margin: itemHeight / 4
  },
  errorMessage: {
    color: 'red',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  signupButton: {
    backgroundColor: colors.primary,
    height: itemHeight,
  },
  facebookButton: {
    borderRadius: 0,
    height: itemHeight,
    width
  },
  altButtonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  loginButton: {
    height: itemHeight,
    backgroundColor: colors.primary,    
  },
  divider: {
    marginVertical: itemHeight / 4
  },
});