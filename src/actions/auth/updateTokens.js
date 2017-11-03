import {AsyncStorage} from 'react-native';
import {UPDATE_OAUTH_TOKENS} from '@actions/actionNames';
import {TOKEN_STORAGE} from '@constants/asyncStorage';
import {tables} from '@constants/database';
import * as DB from '@lib/DynamoDB';

export const updateTokens = (tokenObj) => {
  console.log('upd tok db', DB, tokenObj, tables);
  AsyncStorage.getItem(TOKEN_STORAGE).then((tokens) => {
    const tokens = JSON.parse(tokens)[tokenObj.provider];
    AsyncStorage.setItem(TOKEN_STORAGE).then((results) => {
      // DB.post(tables.tokens, [tokenObj]) // array to conform to func param expectations
    })
  })
  // get current token store
  // update tokenObj.provider
  // set token store
  
  DB.post(tables.tokens, [tokenObj]) // array to conform to func param expectations
  return {
    type: UPDATE_OAUTH_TOKENS
  }
}