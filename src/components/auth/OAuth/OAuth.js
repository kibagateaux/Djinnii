import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import ActionButton from '@components/common/ActionButton/ActionButton';
import {Auth, WithAuth} from '@lib/Auth';
import styles from './styles';

// default background, centered card with app name,
// and which permi ssions and why the app will help.
export default (props) => {
  const {
    appName,
    appImage,
    description,
    onMainButtonPress,
    onAltButtonPress
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Image source={appImage} />
          <Text style={styles.appName}> {appName} </Text>
          <Text style={styles.description}> {description} </Text>
        </View>
        <View style={styles.buttonContainer}>
          <ActionButton
            style={styles.actionButton}          
            buttonText="Install App"
            primaryColor
            onPress={onMainButtonPress}
          />
          <ActionButton
            style={styles.actionButton}
            buttonText="See Permissions"
            onPress={onAltButtonPress}
          />
        </View>
      </View>
    </View>
  );
};


