
import {StyleSheet, Dimensions} from  'react-native';
import {colors} from '@constants/style';

const {height, width} = Dimensions.get('window');
const itemHeight = height / 12;
// const buttonWidth = width / 3;

export default StyleSheet.create({
  backgroundImage: {
    width,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    // flex: 1,
    width: width / 1.2,
    backgroundColor: 'rgba(255,255,255,0.8)',
    paddingVertical: height / 24,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
    width: width / 1.5,
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
    width: width / 1.5
  },
  facebookButton: {
    borderRadius: 0,
    margin: 0,
    height: itemHeight,
    width: width / 1.5

  },
  altButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
  },
  altButton: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  divider: {
    marginVertical: itemHeight / 4
  },
});