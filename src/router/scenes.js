import {Scene, Stack} from 'react-native-router-flux';

import React from 'react';
import App from '@containers/App.Container';
import {
  LoginScreen,
  SignupScreen
} from '@screens';
export const AuthFlow = (
  <Stack hideNavBar>
    <Scene hideNavBar key='login' title='Login Screen' initial component={LoginScreen} />
    <Scene hideNavBar key='signup' title='SignUp Screen' component={SignupScreen} />
  </Stack>
)
console.log('screens', AuthFlow);

export const Modals = (
  <Stack hideNavBar>

  </Stack>
)