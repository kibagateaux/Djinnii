import {AsyncStorage} from 'react-native';
import {
  COGNITO_USER_PROFILE,
  COGNITO_ID
} from '@constants/asyncStorage';
import {DB} from './'

export const updateDatabaseActivities = async (activities) => {
  const profile = await AsyncStorage.getItem(COGNITO_USER_PROFILE);
  const {userId} = JSON.parse(profile);
  const activitiesList = Array.isArray(activities)
    ? activities : Object.keys(activities).map((key) => activities[key]);
  const userActivities = activitiesList.map(act => ({...act, userId, startTime: act.startTime}));
  activityBlobs = userActivities.reduce((blob, next) => {
    // takes activities list and returns blobs of 25 acts or less because Dynamo is a little bitch
    const lastBlob = blob[blob.length - 1];
    const filledBlobs = [...blob].slice(0, (blob.length - 1))
    return (lastBlob.length < 25) ? 
      [...filledBlobs, [...lastBlob, next]] :
      [...blob, [next]]
  }, [[]]);

  return new Promise((resolve, reject) =>
    resolve(activityBlobs.map(async acts => 
      await post(DYNAMO_TABLES.activities, acts))))
};