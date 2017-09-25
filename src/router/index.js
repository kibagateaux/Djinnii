import React from 'react';
import scenes from './scenes';
import {
  Router,
  Lightbox,
  Scene,
  Overlay,
  Modal,
  Stack // wtf does stack do?
} from 'react-native-router-flux';
import App from '@containers/App.Container';

export default () => (
  <Router scenes={scenes}>
    <Overlay>
      <Lightbox>

      </Lightbox>
    </Overlay>
  </Router>
)