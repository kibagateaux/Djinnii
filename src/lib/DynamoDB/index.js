import AWS from 'aws-sdk';
import {DYNAMO_TABLES} from '@constants/AWS';

// connect to local DB if running offline
// https://github.com/serverless/examples/blob/master/aws-node-rest-api-with-dynamodb-and-offline/todos/dynamodb.js
// if (process.env.IS_OFFLINE) {
//   options = {
//     region: 'localhost',
//     endpoint: 'http://localhost:8000',
//   };
// }

const DB = new AWS.DynamoDB.DocumentClient();
export default DB;
export const tableNames = DYNAMO_TABLES;
