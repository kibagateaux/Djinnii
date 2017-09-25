import {NAVIGATE_TO_} from '@actions/actionNames';
import {Actions} from 'react-native-router-flux';
export const navigateTo = (route, options = {}) => {
  (Actions[route])(options);
  return {
    type: `NAVIGATE_TO_${route.toUpperCase()}`
  }
}