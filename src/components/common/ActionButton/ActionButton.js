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
    Icon,
    Sprite,
    style
  } = props;

  const backgroundColor = primaryColor ? MKColor.Yellow : MKColor.Purple;
  
  const renderIcon = () => (
    typeof icon === 'string' && (<Text style={styles.icon}> {icon} </Text>) ||
    typeof icon === 'object' && (<Icon style={syles.icon}/>) ||
    null
  );

  return (
    <MKButton style={[{backgroundColor}, style]} onPress={onPress}>
      <Text> {buttonText} </Text>
      {Sprite ? <Sprite style={styles.sprite} /> : renderIcon()}
    </MKButton>
  )
}