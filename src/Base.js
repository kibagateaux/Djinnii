import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import reducers from './reducers';
import Router from './router';

import App from '@containers/App.Container';

const storeMiddleware = applyMiddleware(reduxThunk, reduxLogger)(createStore);
const store = storeMiddleware(reducers);



export default (props) => (
  <Provider store={store}>
    <Router />
  </Provider>
);

