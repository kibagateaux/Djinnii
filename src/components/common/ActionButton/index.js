import React from 'react';
import {Text} from 'react-native';
import {MKButton, MKColor} from 'react-native-material-kit';
// import styles from './styles'
export default (props) => {
  const {
    buttonText,
    primaryColor,
    onPress,
    style
  } = props;
  const backgroundColor = primaryColor ? MKColor.Purple : MKColor.Yellow;

  return (
    <MKButton style={[style, {backgroundColor}]} onPress={onPress}>
      <Text> {buttonText} </Text>
    </MKButton>
  )
}