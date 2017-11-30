import {AsyncStorage} from 'react-native';
import {IS_LOGGED_IN} from '@constants/asyncStorage';
import {SIGN_OUT_USER} from '@actions/actionNames';
import {Auth} from 'aws-amplify-react-native';

export const signOutUser = async () => {
  await Auth.signOut();
  await AsyncStorage.setItem(IS_LOGGED_IN, JSON.stringify("false"));
  return ({
    type: SIGN_OUT_USER
  })
};