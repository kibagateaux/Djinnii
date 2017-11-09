import {UPDATE_USER} from '@actions/actionNames';

export const updateUser = (payload) => ({
  type: UPDATE_USER,
  payload
})