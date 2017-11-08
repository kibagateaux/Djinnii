import {AsyncStorage} from 'react-native';
import {UPDATE_OAUTH_TOKENS} from '@actions/actionNames';
import {TOKEN_STORAGE, COGNITO_USER_PROFILE} from '@constants/asyncStorage';
import {getCognitoCredentials} from '@lib/Auth';
import {tables} from '@constants/database';
import * as DB from '@lib/DynamoDB';

export const updateTokens = (tokenObj) => { // tokenObj e.g. {moves: {access_token, refresh_token}}
  const profile = await AsyncStorage.getItem(COGNITO_USER_PROFILE)
  if(profile && tokenObj) {
    AsyncStorage.getItem(TOKEN_STORAGE).then((tokenStorage) => {
      
      const tokens = JSON.parse(tokenStorage);
      const updatedTokens = {...tokens, ...tokenObj};
      AsyncStorage.setItem(TOKEN_STORAGE, JSON.stringify(updatedTokens))
        .then(async (results) => {
          const {username} = JSON.parse(profile);
          DB.post(tables.tokens, [{userId: username, ...tokenObj}]) // array to conform to func param expectations
        })
        .catch((error) => {
          // parse error and retry, persistence here necessary
          console.log('error updating token to db', error);
        })
    });
    return {
      type: UPDATE_OAUTH_TOKENS,
      payload: tokenObj
    }
  }
}