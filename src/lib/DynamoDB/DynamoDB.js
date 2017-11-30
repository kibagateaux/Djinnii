import AWS from 'aws-sdk';
import {AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY} from 'react-native-dotenv';
import {AsyncStorage} from 'react-native';
import {DYNAMO_TABLES} from '@constants/AWS';

// connect to local DB if running offline
// https://github.com/serverless/examples/blob/master/aws-node-rest-api-with-dynamodb-and-offline/todos/dynamodb.js
// if (process.env.IS_OFFLINE) {
//   options = {
//     region: 'localhost',
//     endpoint: 'http://localhost:8000',
//   };
// }



export const DB = new AWS.DynamoDB.DocumentClient({
  apiVersion: '2012-08-10'
});
