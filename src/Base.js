import React from 'react';
import {Provider} from 'react-redux';
import Amplify, {withAuthenticator} from 'aws-amplify-react-native';

import {AWS_CONFIG} from '@constants/AWS';
Amplify.configure(AWS_CONFIG);

import store from './store/';
import Router from './router/';
import App from '@containers/App';

export default (props) => (
  <Provider store={store}>
    <Router />
  </Provider>
);

