import React from 'react';
import {Provider} from 'react-redux';
import Amplify from 'aws-amplify-react-native';

import {AWS_CONFIG} from '@constants/AWS';
import {AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY} from 'react-native-dotenv';

import store from './store/';
import Router from './router/';

AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region:'us-east-1',
  dynamoDbCrc32: false // disable SDK-side crc32 check
});
Amplify.configure(AWS_CONFIG);

export default (props) => (
  <Provider store={store}>
    <Router />
  </Provider>
);

