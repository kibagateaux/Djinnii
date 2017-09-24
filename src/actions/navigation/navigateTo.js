import {NAVIGATE_TO_} from '@actions/actionNames';
import {Actions} from 'react-native-router-flux';
export const navigateTo = (route) => {
  (Actions[route])();
  return {
    type: `NAVIGATE_TO_${route.toUpperCase()}`
  }
}