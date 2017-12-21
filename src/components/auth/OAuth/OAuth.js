import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import ActionButton from '@components/common/ActionButton/ActionButton';
import styles from './styles';

// default background, centered card with app name,
// which permissions and why the app will help them.
export default (props) => {
  const {
    appName,
    appLogo,
    description,
    onMainButtonPress,
    onAltButtonPress,
    navigateToLogin
  } = props;

  const renderLoggedOutText = () => (
    <View style={styles.loggedOutTextContainer}>
      <Text style={styles.loggedOutText}> 
        You must be logged in to connect apps and train your avatar
      </Text>
      <ActionButton
        onPress={() => navigateToLogin(props)}
        style={styles.loginButton}
      >
        <Text> Login Now</Text>
      </ActionButton>
    </View>
  );
  
  console.log('app image', appLogo);
  /* {((!user || !user.username) && 
    renderLoggedOutText())} */

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Image source={appLogo} style={styles.appLogo}/>
          <Text style={styles.appName}> {appName} </Text>
          <Text style={styles.description}> {description} </Text>
        </View>
        <View style={styles.buttonContainer}>
          <ActionButton
            style={styles.actionButton}          
            buttonText="Install App"
            onPress={onMainButtonPress}
            secondaryColor
          />
          <ActionButton
            style={styles.actionButton}
            buttonText="See Permissions"
            onPress={onAltButtonPress}
            secondaryColor            
          />
        </View>
      </View>
    </View>
  );
};


