import {AsyncStorage} from 'react-native';
import {UPDATE_OAUTH_TOKENS} from '@actions/actionNames';
import {TOKEN_STORAGE, USER_PROFILE} from '@constants/asyncStorage';
import {tables} from '@constants/AWS';
import * as DB from '@lib/DynamoDB';

export const updateTokens = async (tokenObj) => { // tokenObj e.g. {moves: {access_token, refresh_token}}
  const profile = await AsyncStorage.getItem(USER_PROFILE)
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
    
    // why does this return a Promise?
    // return {
    //   type: UPDATE_OAUTH_TOKENS,
    //   payload: tokenObj
    // }

  }
}