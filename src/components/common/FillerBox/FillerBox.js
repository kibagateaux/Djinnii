import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import styles from './styles';

export default (props) => {
  const {
    mainText,
    mainButtonFunc,
    mainButtonText,
    subText,
    subButtonFunc,
    subButtonText,
  } = props;
  console.log('filler box', mainButtonFunc);
  return (
    <View style={styles.container}>
      {(mainText && <Text style={styles.mainText}> {mainText} </Text>)}
      {(mainButtonFunc && 
        <TouchableOpacity
          onPress={mainButtonFunc}
          style={styles.mainButton}> {mainButtonText} </TouchableOpacity>)}
      {(subText && <Text style={styles.subText}> {subText} </Text>)}
      {(subButtonFunc && 
        <TouchableOpacity
          onPress={subButtonFunc}
          style={styles.subButton}> {subButton} </TouchableOpacity>)}
    </View>
  );
};