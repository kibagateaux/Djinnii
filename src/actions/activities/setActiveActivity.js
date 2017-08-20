import * as firebase from 'firebase';
import {SET_ACTIVE_ACTIVITY} from '../actionNames';
import {_formatToUnix} from '@helpers/time';
import {updateStats} from '@actions/stats'

export const setActiveActivity = (activity, uid = 0) => {
  return {
    type: SET_ACTIVE_ACTIVITY,
    payload: activity
  };
}