import {_formatToUnix, _durationUnix} from '@lib/helpers/time';

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
  updatedStats = Object.keys(statMultiplier).reduce((update, stat) => {
    const updateStats = statMultiplier[stat] * duration;
    currentStat = update[stat] || 0;
    return {...update, [stat]: currentStat + updateStats}
  }, stats);
  return {...stats, ...updatedStats};
}