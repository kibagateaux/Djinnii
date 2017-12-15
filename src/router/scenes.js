import React from 'react';
import {
  Scene,
  Actions
} from 'react-native-router-flux';

import App from '@containers/App';
import {
  LoginScreen,
  SignupScreen,
  PersonalSettingsScreen,
  OAuthScreen
} from '@screens';

import{
  HOME,
  LOGIN,
  SIGNUP,
  SETTINGS,
  OAUTH,
  INTEGRATIONS
} from '@constants/routes';

export default Actions.create(
  <Scene key="app">
    <Scene hideNavBar key="index" component={App} />  
    <Scene hideNavBar key={HOME} component={App} />  
    <Scene hideNavBar key={LOGIN} title='Login Screen' component={LoginScreen} />
    <Scene initial hideNavBar key={SIGNUP} title='Signup Screen' component={SignupScreen} />
    <Scene hideNavBar key={SETTINGS} title='Settings Screen' component={PersonalSettingsScreen} />
    <Scene hideNavBar key={INTEGRATIONS} title='Integrations Screen' component={PersonalSettingsScreen} />
    <Scene hideNavBar key={OAUTH} title="Portal for integrating other apps" component={OAuthScreen} />
  </Scene>
);
 