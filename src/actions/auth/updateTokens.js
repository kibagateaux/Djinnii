import {AsyncStorage} from 'react-native';
import {UPDATE_OAUTH_TOKENS} from '@actions/actionNames';
import {TOKEN_STORAGE} from '@constants/asyncStorage';
import {tables} from '@constants/database';
import * as DB from '@lib/DynamoDB';

export const updateTokens = (userId, tokenObj) => { // tokenObj e.g. {moves: {access_token, refresh_token}}
console.log('update Tokens', userId, tokenObj);
  if(userId && tokenObj) {
    console.log('upd tok db', DB, tokenObj, tables);
    AsyncStorage.getItem(TOKEN_STORAGE).then((tokenStorage) => {
      // const provider = Object.keys(tokenObj)[0];
      const tokens = JSON.parse(tokenStorage);
      const updatedTokens = {...tokens, ...tokenObj};
      console.log('updated tokens', tokenObj, tokens, updatedTokens);
      AsyncStorage.setItem(TOKEN_STORAGE, JSON.stringify(updatedTokens)).then((results) => {
        // DB.post(tables.tokens, [tokenObj]) // array to conform to func param expectations
      })
    })
    // get current token store
    // update tokenObj.provider
    // set token store
    
    DB.post(tables.tokens, [{userId, ...tokenObj}]) // array to conform to func param expectations
  }
  return {
    type: UPDATE_OAUTH_TOKENS,
    payload: tokenObj
  }
}