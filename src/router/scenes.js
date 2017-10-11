import {Scene, Actions} from 'react-native-router-flux';

import React from 'react';
import App from '@containers/App';
import {
  LoginScreen,
  SignupScreen
} from '@screens';

export default Actions.create(
  <Scene key="app">
    <Scene initial hideNavBar key="index" component={App} />  
    <Scene hideNavBar key='login' title='Login Screen' component={LoginScreen} />
    <Scene hideNavBar key='signup' title='Signup Screen' component={SignupScreen} />
  </Scene>
);
 