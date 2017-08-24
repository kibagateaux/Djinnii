import {SET_ACTIVE_ACTIVITY} from '../actionNames';

export const setActiveActivity = (activity, uid = 0) => {
  return {
    type: SET_ACTIVE_ACTIVITY,
    payload: activity
  };
}