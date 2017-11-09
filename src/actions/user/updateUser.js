import {UPDATE_USER} from '@actions/actionNames';
import {AsyncStorage} from 'react-native';
import {COGNITO_USER_PROFILE} from '@constants/asyncStorage';

export const updateUser = (payload) => {
  const profile = await AsyncStorage.getItem(COGNITO_USER_PROFILE);
  const updatedProfile = {...profile, userId: payload};
  AsyncStorage.setItem(COGNITO_USER_PROFILE, JSON.stringify(updatedProfile));
  return ({
    type: UPDATE_USER,
    payload
  });
};
