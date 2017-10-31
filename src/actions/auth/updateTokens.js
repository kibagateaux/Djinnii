import {UPDATE_OAUTH_TOKENS} from '@actions/actionNames';
import {tables} from '@constants/database';
import * as DB from '@lib/DynamoDB';

export const updateTokens = (tokenObj) => {
  console.log('upd tok db', DB, tokenObj, tables);
  DB.post(tables.tokens, [tokenObj])
  return {
    type: UPDATE_OAUTH_TOKENS
  }
}