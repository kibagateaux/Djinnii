import {INIT_AUTH} from '@actions/actionNames';
import {COGNITO_USER_POOL as userPool} from '@constants/AWS';
import {getSignInUserSession} from '@lib/Auth';

export const initAuth = async () => {
  console.log('userpool', userPool, getSignInUserSession);
  await new Promise((resolve, reject) => 
    userPool.storage.sync((e, r) => (e ? reject(e) : resolve(r))));

  const session = await new Promise(resolve => 
    getSignInUserSession((e, s) => resolve(e ? null : s)));

  console.log('Auth init session?', !!session, session);
  // console.log('aws creds', AWS.config.credentials, AWS.config)
  return {
    type: INIT_AUTH,
    payload: session
  };
};
