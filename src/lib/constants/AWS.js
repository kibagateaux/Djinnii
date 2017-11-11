import AWS, {Lambda} from 'aws-sdk';
import {
  CognitoUserPool,
} from 'react-native-aws-cognito-js';
import {
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  DYNAMO_DB_STATS_TABLE,
  DYNAMO_DB_LOCATION_TABLE,
  DYNAMO_DB_TOKENS_TABLE,
  DYNAMO_DB_ACTIVITIES_TABLE
} from 'react-native-dotenv';

import awsmobile from '../../../aws-config.json';

AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region:'us-east-1'
});

export const DYNAMO_TABLES = {
  stats: DYNAMO_DB_STATS_TABLE,
  location: DYNAMO_DB_LOCATION_TABLE,
  tokens: DYNAMO_DB_TOKENS_TABLE,
  activities: DYNAMO_DB_ACTIVITIES_TABLE,
};

export const COGNITO_USER_POOL = new CognitoUserPool({
  UserPoolId: awsmobile.CognitoUserPool.Default.PoolId,
  ClientId: awsmobile.CognitoUserPool.Default.AppClientId,
  ClientSecret: awsmobile.CognitoUserPool.Default.AppClientSecret
});