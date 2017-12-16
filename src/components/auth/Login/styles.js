import {StyleSheet, Dimensions} from 'react-native';
const { height, width } = Dimensions.get('window');
import {colors, font} from '@constants/style';

const itemHeight = height / 18;

export default StyleSheet.create({
  container: {
    width,
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',    
  },
  activityIndicator: {
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  heroImage: {
    flex: 0.75
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  inputStyles: {
    height: itemHeight / 2,
    margin: itemHeight / 4
  },
  labelIcon: {
    height: height / 30,
    width: height / 30,
    paddingRight: width / 36
  },
  signInButton: {
    alignSelf: 'center',
    backgroundColor: colors.primary,
    height: itemHeight,
    width: width / 3,    
  },
  signInButtonContainer: {
    width: width / 3,
    height: itemHeight,
  },
  largeFontSize: font.large,
  smallFontSize: font.normal,
  altActionsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: height / 12,
  },
  altButton: {
    height: itemHeight / 2,
    backgroundColor: colors.primary,
  },
});