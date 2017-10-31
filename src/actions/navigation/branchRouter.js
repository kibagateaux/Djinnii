import {AsyncStorage} from 'react-native';
import {
  IS_LOGGED_IN,
  AWS_CREDENTIALS,
  COGNITO_USER_PROFILE,
} from '@constants/asyncStorage';
import branch from 'react-native-branch';
import DB from '@lib/DynamoDB';
import {updateTokens} from '@actions/auth/updateTokens';

const cognitoProfile = AsyncStorage.getItem(COGNITO_USER_PROFILE).then(d => JSON.parse(d));
const isLoggedIn = AsyncStorage.getItem(IS_LOGGED_IN).then(d => JSON.parse(d));
const awsCreds = AsyncStorage.getItem(AWS_CREDENTIALS).then(d => JSON.parse(d));



const authRouter = (req, url) => (dispatch) => {
  console.log('auth router', req, url);
  console.log('auth storage', cognitoProfile, isLoggedIn, awsCreds);
  const [_, access_token, refresh_token] = /.*access_token=(\w*).*refresh_token=(\w*)/.exec(url.id || url.item);
  console.log('auth router tokens', regex, access_token, refresh_token);
  console.log('auth router db', DB);
  // save tokens to db with cognitoProfileId > url.provider > {tokens} 
  // updateTokens(urlProvider, tokens)
}

const branchRouter = {
  auth: authRouter
};

export default branchRouter
