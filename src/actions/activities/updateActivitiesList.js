import {UPDATE_ACTIVITIES_LIST} from '@actions/actionNames';

export const updateActivitiesList = (activitiesList) => {
  console.log('update act list', activitiesList);
  // update dbs
  return {
    type: UPDATE_ACTIVITIES_LIST,
    payload: activitiesList
  }
}