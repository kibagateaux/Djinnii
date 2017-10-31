import React, {Component} from 'react';
import {
  View,
  Linking
} from 'react-native';
import Settings from '@components/settings/';
import styles from './styles';
import {movesAuthLink} from '@lib/helpers/movesData';

export default (props) => {
  const _getSettingsList = () => ([
    {
      label: "Integrations",
      onPress: () => props.navigateToIntegrations({})
    },
    {
      label: "Login",
      onPress: () =>  props.navigateToLogin()
    },
    {
      label: "SignUp",
      onPress: () => props.navigateToSignUp()
    },
    {
      label: "Moves",
      onPress: () => props.navigateToOAuth({
        appName:"Moves",
        description: "blahb lasfb;a jafkna j",
        onMainButtonPress: () => {
          Linking.openURL(movesAuthLink)
        },
        onAltButtonPress: () => props.navigateToIntegrations()
      })
    }
  ])
  
  // const {fields} = props;
  return (
    <Settings
      cardStyle={styles.cardStyle}
      cards={_getSettingsList()}
    />
  );
}