import {FETCH_ACTIVITIES} from '@actions/actionNames';

import DB from '@lib/DynamoDB';

export const fetchActivities = (userId) => {
  DB.get('activities')
}