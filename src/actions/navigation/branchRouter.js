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
  const tokenRegex = /.*access_token=(\w*).*refresh_token=(\w*)/;
  console.log('tok regex', tokenRegex.test(url));
  // if(tokenRegex.test(url)) {
    const tokens = tokenRegex.exec(url)
    const access_token = tokens ? tokens[1] : 'a';
    const refresh_token = tokens ? tokens[2] : 'b';
    console.log('auth router tokens', tokens);
    console.log('auth router dispatch', dispatch);
    // updateTokens({userId: url.service, [req.url.resource]: {access_token, refresh_token}, provider: req.url.resource});
    dispatch(updateTokens({userId: url.service, [url.resource]: {access_token, refresh_token}, provider: url.resource}))
    // save tokens to db with cognitoProfileId > url.provider > {tokens} 
  // }
}

const branchRouter = {
  auth: authRouter
};

export default branchRouter
