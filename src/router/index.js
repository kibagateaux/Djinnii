import React from 'react';
import scenes from './scenes';
import {Router} from 'react-native-router-flux';

export default () => (
  <Router scenes={scenes} />
)