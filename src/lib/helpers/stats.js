import {_formatToUnix, _durationUnix} from '@lib/helpers/time';
import {AsyncStorage} from 'react-native';
import {LOCAL_STATS} from '@constants/asyncStorage';
import {
  statsToActivityMapping,
  localActivityMapping
} from '@constants/stats';

export const getLocalStats = () =>
  AsyncStorage.getItem(LOCAL_STATS)
    .then((stats) => JSON.parse(stats))
    .catch((err) => {console.log('get local stats er', err); return null;});

export const statsAfterActivity = (targetActivity, stats) => {
  if(!targetActivity || !stats) throw Error("Need both target activity and stats object to calculate stats after activity");
  const {activity, startTime, endTime, duration} = targetActivity;
  const statMultiplier = statsToActivityMapping[activity];
  const updatedStats = Object.keys(statMultiplier).reduce((update, stat) => {
    const statUpdate = statMultiplier[stat] * duration;
    currentStat = update[stat] || 0;
    return {...update, [stat]: currentStat + statUpdate}
  }, stats);
  return {...stats, ...updatedStats};
};

export const localStatsAfterActivity = (activity, stats) => {
  if(!activity || !stats) throw Error("Need target activity and stats object to calculate stats after activity");
  const statIncrement = localActivityMapping[activity];
  const updatedStats = Object.keys(statIncrement).reduce((update, stat) => {
    const statUpdate = statIncrement[stat];
    const currentStat = update[stat] || 0;
    return {...update, [stat]: currentStat + statUpdate}
  }, stats);
  return {...stats, ...updatedStats};
};
