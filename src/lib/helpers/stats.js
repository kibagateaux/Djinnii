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
  const {activity, startTime, endTime} = targetActivity;
  const statMultiplier = statsToActivityMapping[activity];

  updatedStats = Object.keys(statMultiplier).map((stat) => {
    const duration =  _durationUnix(startTime, endTime);
    const update = statMultiplier[stat] * duration;
    return {[stat]: stats[stat] + update}
  }).reduce((stats, next) => ({...stats, ...next}), {})
  const unixStartTime = _formatToUnix(startTime);
  return {[unixStartTime]: {...stats, ...updatedStats}};
}