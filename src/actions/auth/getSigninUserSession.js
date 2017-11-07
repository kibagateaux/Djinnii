import {
  GET_SIGNIN_USER_SESSION,
  HANDLE_SIGNOUT
} from '@actions/actionNames';
import {getCurrentUser, getCredentials, setCredentials} from '@lib/Auth';
import {IS_LOGGED_IN} from '@constants/asyncStorage';

// will want to make this a dispatching action for signout and callback maybe
export const getSigninUserSession = (callback) => {
  const user = getCurrentUser();
  if (user) {
    user.getSession((err, res) => {
      getCredentials(res, { onSuccess: () => null });
    });

    return {
      type: GET_SIGNIN_USER_SESSION,
      payload: user
    }
  }

  // Create seperate func to handle getSigninUserSession and logout fallback control flow
  
  // setCredentials(new AWS.CognitoIdentityCredentials({
  //   IdentityPoolId: awsmobile.CredentialsProvider.CognitoIdentity.Default.PoolId,
  // }));
  // LocalStorage.setItem(IS_LOGGED_IN, 'false');
  // return {
  //   type: HANDLE_SIGNOUT,
  //   payload: callback()
  // }
}