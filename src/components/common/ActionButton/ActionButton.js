import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

import {colors} from '@constants/style';
import styles from './styles'

export default (props) => {
  const {
    buttonText,
    secondaryColor,
    onPress,
    icon,
    style
  } = props;

  const backgroundColor = secondaryColor ? colors.secondary : colors.primary;
  return (
    <TouchableOpacity style={[{backgroundColor}, style]} onPress={onPress}>
      <Text> {buttonText} </Text>
      <Text> {icon} </Text>
    </TouchableOpacity>
  )
}