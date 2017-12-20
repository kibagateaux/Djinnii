import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import {
  MKButton
} from 'react-native-material-kit'; // FIXME replace with rn-elements to remove MK
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

  const _renderButton = (onPress, text, styleObj) => (
    MKButton.coloredButton()
      .withText(text)
      .withOnPress(onPress)
      .withStyle(styleObj)
      .build()
  );
  return (
    <View style={styles.container}>
      {(mainText && <Text style={styles.mainText}> {mainText} </Text>)}
      {(mainButtonFunc &&
        (<MKButton
          onPress={mainButtonFunc}
          {...styles.mainButton}
        > 
          <Text style={styles.centerText}>{mainButtonText} </Text>
        </MKButton>)
      )}
      {(subText && <Text style={styles.subText}> {subText} </Text>)}
      {(subButtonFunc && 
        (<MKButton
          onPress={subButtonFunc}
          style={styles.subButton}
        >
          <Text> {subButton} </Text> 
        </MKButton>)
      )}
    </View>
  );
};