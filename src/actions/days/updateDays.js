import {UPDATE_DAYS} from '@actions/actionNames';

export const updateDays = (days = {}) => ({
  type: UPDATE_DAYS,
  payload: days
});