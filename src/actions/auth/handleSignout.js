import {AsyncStorage} from 'react-native';
import {
  CURRENT_COGNITO_SESSION
} from '@constants/asyncStorage';
import {getCognitoCredentials} from '@actions/auth';
import {
  getCurrentUser,
  getSessionFromTokens,
} from '@lib/Auth';

import {signoutUser} from '@actions/auth'

// empty first param for consistent formatting
export const handleSignout = () => (dispatch, getStore) => {
  const state = getStore();
  const {cognitoCredentials} = state.auth;
  const currSessionKeys = JSON.parse(AsyncStorage.getItem(CURRENT_COGNITO_SESSION));
  const currSession = getSessionFromTokens(currSessionKeys);

  const maybcreds = getCognitoCredentials(currSession);
  // const cognitoCredentials = dispatch(getCognitoCredentials(currSession));

  console.log('handleSignout creds', maybecreds, cognitoCredentials);

  const cognitoUser = getCurrentUser();

  cognitoCredentials.clearCachedId();

  AWS.config.credentials = cognitoCredentials;

  cognitoUser.signOut();

  AsyncStorage.removeItem(AWS_CREDENTIALS);
  AsyncStorage.setItem(IS_LOGGED_IN, 'false');
  dispatch(signoutUser())
};