import {UPDATE_USER} from '@actions/actionNames';
import {AsyncStorage} from 'react-native';
import {USER_PROFILE} from '@constants/asyncStorage';

export const updateUser = (payload) => {
  const profile = await AsyncStorage.getItem(USER_PROFILE);
  const updatedProfile = {...profile, userId: payload};
  AsyncStorage.setItem(USER_PROFILE, JSON.stringify(updatedProfile));
  return ({
    type: UPDATE_USER,
    payload
  });
};
