import {UPDATE_STATS} from '../actionNames';

export const updateStats  = (statsUpdate) => {
  console.log('updstat act', statsUpdate);
  return {
    type: UPDATE_STATS,
    payload: statsUpdate
  }
}