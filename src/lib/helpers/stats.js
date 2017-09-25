import {_formatToUnix, _durationUnix} from '@lib/helpers/time';
import {AsyncStorage} from 'react-native';
import {LOCAL_STATS} from '@constants/asyncStorage';


export const statsToActivityMapping = {
  'wlk': {int: 0.000002, agy: -0.000001, stm: 0.000001},
  'trp': {int: 0.000001, str: 0.000002, stm: -0.000002},
  'plc': {int: 0.000002, str: -0.000001, agy: -0.000001},
  'cyc': {str: 0.000001, agy: 0.000002, stm: 0.000002},
  'idl': {int: -0.000001, str: -0.000002, stm: -0.000002},
  //etc
}

export const statsAfterActivity = (targetActivity, stats) => {
  if(!targetActivity || !stats) throw Error("Need target activity and stats object to calculate stats after activity");
  const {activity, startTime, endTime, duration} = targetActivity || targetActivity.meta;
  const statMultiplier = statsToActivityMapping[activity];
  const updatedStats = Object.keys(statMultiplier).reduce((update, stat) => {
    const statUpdate = statMultiplier[stat] * duration;
    currentStat = update[stat] || 0;
    return {...update, [stat]: currentStat + statUpdate}
  }, stats);
  return {...stats, ...updatedStats};
};


const localActivityMapping = {
  'run': {stm: 2, agy: 1},
  'dance': {str: 1, agy: 2, int: -1},
  'sleep': {stm: -2, str: -1, int: 3},
  'eat': {stm: 2, agy: -1}
}

export const localStatsAfterActivity = (activity, stats) => {
  if(!activity || !stats) throw Error("Need target activity and stats object to calculate stats after activity");
  const statIncrement = localActivityMapping[activity];
  const updatedStats = Object.keys(statIncrement).reduce((update, stat) => {
    const statUpdate = statIncrement[stat];
    const currentStat = update[stat] || 0;
    return {...update, [stat]: currentStat + statUpdate}
  }, stats);
  return {...stats, ...updatedStats};
}

export const getLocalStats = () => AsyncStorage
    .getItem(LOCAL_STATS)
    .then((data) => JSON.parse(data))
    .catch((err) => console.log('get local stats err', err));

