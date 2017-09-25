import {Scene, Actions} from 'react-native-router-flux';

import React from 'react';
import App from '@containers/App.Container';
import {
  LoginScreen,
  SignupScreen
} from '@screens';

export default Actions.create(
  <Scene key="index">
    <Scene hideNavBar key="home" component={App} />  
    <Scene hideNavBar key='login' title='Login Screen' component={LoginScreen} />
    <Scene initial hideNavBar key='signup' title='Signup Screen' component={SignupScreen} />
  </Scene>
);
