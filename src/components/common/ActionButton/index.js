import React from 'react';
import {Text} from 'react-native';
import {MKButton, MKColor} from 'react-native-material-kit';
import styles from './styles'
export default (props) => {
  const {
    buttonText,
    primaryColor,
    onPress,
    icon,
    sprite,
    style
  } = props;
  const backgroundColor = primaryColor ? MKColor.Yellow : MKColor.Purple;
  // if a sprite return sprite otherwise if icon return icon else return null
  return (
    <MKButton style={[{backgroundColor}, style]} onPress={onPress}>
      <Text> {buttonText} </Text>
      {icon && <Text style={styles.icon}> {icon} </Text>}
    </MKButton>
  )
}