import {AsyncStorage} from 'react-native';
import {Auth} from 'aws-amplify-react-native';

import {USER_PROFILE, IS_LOGGED_IN} from '@constants/asyncStorage';
import {SIGN_IN_USER} from '@actions/actionNames';

export const signInUser = (userInfo) => {
  AsyncStorage.setItem(IS_LOGGED_IN, JSON.stringify("true"));
  AsyncStorage.setItem(USER_PROFILE, JSON.stringify(userInfo));
  return {
    type: SIGN_IN_USER,
    payload: userInfo
  };
};