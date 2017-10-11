import AWS from 'aws-sdk';
import {AWS_ACCESS_KEY, AWS_SECRET_KEY} from 'react-native-dotenv';
import {COGNITO_USER_PROFILE} from '@constants/asyncStorage';
import {AsyncStorage} from 'react-native';
import {Auth} from '@lib/Auth';
const creds = async () => await AsyncStorage.getItem(COGNITO_USER_PROFILE)
  .then((data) => JSON.parse(data))
  .then((data) => data);

AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_KEY,
  region:'us-east-1'
});

const DB = new AWS.DynamoDB.DocumentClient({
  apiVersion: '2012-08-10'
});

const statsTable = "djinii-mobilehub-1897344653-stats";

const params = (username) => ({
  RequestItems: {
    [statsTable]: [
      {
        PutRequest: {
          Item: {
            userId: username,
            time: 135235231241,
            strength: 141, 
            intelligence: 124
          }
        }
      },
      {
        PutRequest: {
          Item: {
            userId: username,
            time: 4235351,
            timestamp: 4235351, 
            strength: 3512, 
            intelligence: 1354
          }
        }
      },
      {
        PutRequest: {
          Item: {
            userId: username,
            time: 9867456366,
            timestamp: 9867456366, 
            strength: 462, 
            intelligence: 905
          }
        }
      },
    ]
  }
});

export const fakeDynamoRequest = (username) => {
  console.log('dyn cred', creds());
  DB.batchWrite(params(username), function(err, data) {
    if (err) console.log('Error writing to DB', err, err.stack); // an error occurred
    else     console.log('Wrote To DB!!!!', data);           // successful response
    /*
      data = {
      }
    */
  });
};


const getParams = {
  RequestItems: {
    [statsTable]: {
      Keys: [
        {
           userId: "hjgyh",
           time: 1
        }
      ],
      AttributesToGet: [
        'strength',
        /* more items */
      ]
    },
  }
};

export const fakeDynamoGet = (username) => {
  DB.batchGet(getParams, function(err, data) {
    if (err) console.log('Error writing to DB', err, err.stack); // an error occurred
    else     console.log('Got DB', data);           // successful response
    /*
    data = {
    }
    */
  });
}