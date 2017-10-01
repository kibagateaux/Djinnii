import {SAVE_COGNITO_PROFILE} from '@actions/actionNames';
import {AsyncStorage} from 'react-native';
import {Auth} from '@lib/Auth';
import {COGNITO_USER_PROFILE} from '@constants/asyncStorage';

export const saveCognitoProfile = () => {
  const {username}  = Auth.getCurrentUser();
  return {
    type: SAVE_COGNITO_PROFILE,
    payload: {username}
  };
}