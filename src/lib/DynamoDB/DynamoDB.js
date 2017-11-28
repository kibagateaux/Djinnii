import AWS from 'aws-sdk';
import {AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY} from 'react-native-dotenv';
import {COGNITO_USER_PROFILE} from '@constants/asyncStorage';
import {AsyncStorage} from 'react-native';
import {Auth} from '@lib/Auth';
import {DYNAMO_TABLES} from '@constants/AWS';

// connect to local DB if running offline
// https://github.com/serverless/examples/blob/master/aws-node-rest-api-with-dynamodb-and-offline/todos/dynamodb.js
// if (process.env.IS_OFFLINE) {
//   options = {
//     region: 'localhost',
//     endpoint: 'http://localhost:8000',
//   };
// }

const creds = async () => await AsyncStorage.getItem(COGNITO_USER_PROFILE)
  .then(JSON.parse)

AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region:'us-east-1',
  dynamoDbCrc32: false // disable SDK-side crc32 check
});

export const DB = new AWS.DynamoDB.DocumentClient({
  apiVersion: '2012-08-10'
});
