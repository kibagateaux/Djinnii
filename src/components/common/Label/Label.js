import React from 'react';
import {View} from 'react-native';
import styles from './styles';

export default (props) => {
  return (
    <View style={[
      styles.container,
      {justifyContent: props.justifyContent || "flex-start"}
    ]}>
      {props.children}
    </View>
  )
}