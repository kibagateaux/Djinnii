import AWS from 'aws-sdk';
import {AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY} from 'react-native-dotenv';
import {COGNITO_USER_PROFILE} from '@constants/asyncStorage';
import {AsyncStorage} from 'react-native';
import {Auth} from '@lib/Auth';

const creds = async () => await AsyncStorage.getItem(COGNITO_USER_PROFILE)
  .then((data) => JSON.parse(data))
  .then((data) => data);

AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region:'us-east-1',
  dynamoDbCrc32: false // disable SDK-side crc32 check
});

export const DB = new AWS.DynamoDB.DocumentClient({
  apiVersion: '2012-08-10'
});
