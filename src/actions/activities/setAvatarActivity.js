import {SET_AVATAR_ACTIVITY} from '@actions/actionNames';

export const setAvatarActivity = (activity) => ({
  type: SET_AVATAR_ACTIVITY,
  payload: activity
})