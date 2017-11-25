import AWS, {Lambda} from 'aws-sdk';
import {
  CognitoUserPool,
} from 'react-native-aws-cognito-js';
import {
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  // DYNAMO_DB_STATS_TABLE,
  // DYNAMO_DB_LOCATION_TABLE,
  // DYNAMO_DB_TOKENS_TABLE,
} from 'react-native-dotenv';

import awsmobile from '../../../aws-config.json';
import {
  CURRENT_COGNITO_SESSION,
  IS_LOGGED_IN,
  AWS_CREDENTIALS,
  COGNITO_USER_PROFILE
} from '@constants/asyncStorage';

AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region:'us-east-1'
});

export const LAMBDA_CLIENT = new Lambda({region: 'us-east-1'});

export const DYNAMO_TABLES = {
  activities: "djinii-mobilehub-1897344653-Activities",
  stats: "djinii-mobilehub-1897344653-stats",
  location: "djinii-mobilehub-1897344653-Locations",
  tokens: "djinii-mobilehub-1897344653-Tokens",
};

export const COGNITO_USER_POOL = new CognitoUserPool({
  UserPoolId: awsmobile.CognitoUserPool.Default.PoolId,
  ClientId: awsmobile.CognitoUserPool.Default.AppClientId,
  ClientSecret: awsmobile.CognitoUserPool.Default.AppClientSecret
});