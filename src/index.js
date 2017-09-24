import * as scenes from './scenes';
import {
  Router,
  Lightbox,
  Scene,
  Overlay,
  Modal,
  Stack // wtf does stack do?
} from 'react-native-router-flux';
import {
  App,
  LoginScreen,
  SignupScreen
} from './screens';

export default (
  <Router>
    <Overlay>
      <Lightbox>
        <Stack>
          <Scene key="home" component={App} />
        </Stack>
        <Stack hideNavBar>
          <Scene key="login" component={LoginScreen} />
          <Scene key="signup" component={SignUpScreen} />
        </Stack>
      </Lightbox>
    </Overlay>
  </Router>
)