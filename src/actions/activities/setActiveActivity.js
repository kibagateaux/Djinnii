import {SET_ACTIVE_ACTIVITY} from '../actionNames';

export const setActiveActivity = (activity) => {
  return {
    type: SET_ACTIVE_ACTIVITY,
    payload: activity
  };
}