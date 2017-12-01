import {FETCH_ACTIVITIES} from '@actions/actionNames';
import DB, {tableNames} from '@lib/DynamoDB';
import {updateActivitiesList} from '@actions/activities/updateActivitiesList';

export const fetchActivities = (userId) => (dispatch) => {
  const queryParams = {
    RequestItems: {
      [tableNames.activities]: {
        Keys: {userId}
      }
    }
  }
  console.log('fetch acts', userId);
  DB.batchGet(queryParams, (error, result) => {
    if(error || !result) {
      console.log('error fetching activities', error);
    } else {
      console.log('fetch acts', result);
      dispatch(updateActivitiesList(result.Items));
    }
  });
}