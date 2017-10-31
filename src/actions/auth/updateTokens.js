import {UPDATE_OAUTH_TOKENS} from '@actions/actionNames';
import help from '@constants/database';
import DB from '@lib/DynamoDB';

export const updateTokens = (table, tokenObj) => {
  DB.post(table, [tokenObj])
  return {
    type: UPDATE_OAUTH_TOKENS
  }
}