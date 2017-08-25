import {SET_DISPLAY_STATS} from '@actions/actionNames';
export const setDisplayStats = (statsObj) => ({
  type: SET_DISPLAY_STATS,
  payload: statsObj
});
