import React from 'react';
import {Provider} from 'react-redux';
import store from './store/';
import Router from './router/';
import App from '@containers/App';

export default (props) => (
  <Provider store={store}>
    <Router />
  </Provider>
);

