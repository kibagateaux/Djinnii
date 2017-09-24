import {UPDATE_STATS} from '../actionNames';
import {_formatToUnix} from '@helpers/time';

export const updateStats = (statsUpdate, uid, updateCloud = false) => {
  const time = Object.keys(statsUpdate)[0];
  const stats = statsUpdate[time];
  // TODO update DynamoDB
  return {
    type: UPDATE_STATS,
    payload: stats
  }
}