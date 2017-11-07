import {AsyncStorage} from 'react-native';
import {
  AWS_CREDENTIALS,
  IS_LOGGED_IN
} from '@constants/asyncStorage';
import {SIGNOUT_USER} from '@actions/actionNames';

export const signoutUser = () => {
  AsyncStorage.removeItem(AWS_CREDENTIALS);
  AsyncStorage.setItem(IS_LOGGED_IN, 'false');
  return ({
    type: SIGNOUT_USER
  })
}