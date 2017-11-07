import {AsyncStorage} from 'react-native';
import {COGNITO_CREDENTIALS} from '@constants/asyncStorage';
import {GET_COGNITO_CREDENTIALS} from '@actions/actionNames';
import awsmobile from '../../../aws-config.json';

export const getCognitoCredentials = (session) => {
  const loginCred = `cognito-idp.${awsmobile.CognitoUserPool.Default.Region}.amazonaws.com/${awsmobile.CognitoUserPool.Default.PoolId}`;
  const cognitoParams = {
    IdentityPoolId: awsmobile.CredentialsProvider.CognitoIdentity.Default.PoolId,
    Logins: {
      [loginCred]: session.getIdToken().getJwtToken(),
    },
  };
  const credentials = new AWS.CognitoIdentityCredentials(cognitoParams)
  AsyncStorage.setItem(COGNITO_CREDENTIALS, JSON.stringify(credentials));

  return {
    type: GET_COGNITO_CREDENTIALS,
    payload: credentials
  }
};