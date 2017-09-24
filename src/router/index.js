import React from 'react';
import * as scenes from './scenes';
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
  <Router>
    <Overlay>
      <Lightbox>
        <Stack>
          {scenes.AuthFlow}
          <Stack hideNavBar>
            <Scene key="home" component={App} />
          </Stack>
        </Stack>
      </Lightbox>
    </Overlay>
  </Router>
)