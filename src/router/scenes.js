import {Scene, Actions} from 'react-native-router-flux';

import React from 'react';
import App from '@containers/App';
import {
  LoginScreen,
  SignupScreen,
  SettingsScreen
} from '@screens';
import{
  HOME,
  LOGIN,
  SIGNUP,
  SETTINGS,
} from '@constants/routes';

export default Actions.create(
  <Scene key="app">
    <Scene initial hideNavBar key="index" component={App} />  
    <Scene hideNavBar key={LOGIN} title='Login Screen' component={LoginScreen} />
    <Scene hideNavBar key={SIGNUP} title='Signup Screen' component={SignupScreen} />
    <Scene hideNavBar key={SETTINGS} title='Settings Screen' component={SettingsScreen} />
  </Scene>
);
 