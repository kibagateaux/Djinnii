import React, {Component} from 'react';
import {
  View,
  Linking
} from 'react-native';
import Settings from '@components/settings/';
import styles from './styles';
import {integrationServices} from '@constants/integrations';

export default (props) => {
  const {
    navigateToIntegrations,
    navigateToLogin,
    navigateToOAuth,
    navigateToSignUp,
    initIntegrationAuth
  } = props;
  const _getSettingsList = () => ([
    {
      label: "Integrations",
      onPress: () => navigateToIntegrations({})
    },
    {
      label: "Login",
      onPress: () =>  navigateToLogin()
    },
    {
      label: "SignUp",
      onPress: () => navigateToSignUp()
    },
    {
      label: "Moves",
      onPress: () => navigateToOAuth({
        appName:"Moves",
        logo: "",
        description: "A beautifulyl designed activity monitoring app.",
        onMainButtonPress: () => {
          initIntegrationAuth(integrationServices.moves)
        },
        onAltButtonPress: () => navigateToIntegrations()
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