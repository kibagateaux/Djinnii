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



const authRouter = (req, url) => async (dispatch) => {
  console.log('auth router', req, url);
  console.log('auth storage', cognitoProfile, isLoggedIn, awsCreds);
  const regex = /.*access_token=(\w*).*refresh_token=(\w*)/.exec(url.id || url.resource);
  const access_token = regex ? regex[1] : 'a';
  const refresh_token = regex ? regex[2] : 'b';
  console.log('auth router tokens', regex, access_token, refresh_token);
  return cognitoProfile.then((user) => {
    console.log('cog prof', user, req);
    return (user && access_token) ? 
      dispatch(updateTokens({
        userId: user.username,
        [req.url.resource]: {access_token, refresh_token},
        provider: req.url.resource
      })) :
      {error: "You must be logged in to integrate other apps"};
  });
  
  // save tokens to db with cognitoProfileId > url.provider > {tokens} 
  // updateTokens(urlProvider, tokens)
}

const branchRouter = {
  auth: authRouter
};

export default branchRouter
