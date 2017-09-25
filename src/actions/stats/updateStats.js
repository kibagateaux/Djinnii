import {UPDATE_STATS} from '../actionNames';
import {_formatToUnix} from '@helpers/time';

export const updateStats = (statsUpdate, uid) => {
  const time = Object.keys(statsUpdate)[0];
  const stats = statsUpdate[time];
  
  return {
    type: UPDATE_STATS,
    payload: stats
  }
}