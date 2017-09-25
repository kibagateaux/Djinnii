'use strict'
import moment from 'moment';
import {dayInMicroSecs}  from '@constants/time';
const twoDigitChunk = /{d, 2}/;
const _formatToUnix = dateString => moment(dateString).valueOf()
const _durationUnix = (start, end) => ( _formatToUnix(end) - _formatToUnix(start));
export const  _getTimesInUnix = (start, end) => ({
  startTime: _formatToUnix(start),
  endTime:  _formatToUnix(end),
  duration: _durationUnix(start, end)
});
export const _sortByTime = (obj) => Object.keys(obj)
  .sort((x, y) => x - y)
  .reduce((a, b) => (isNaN(b) ? a : {...a, [b]: obj[b]}), {});

// First MS at GMT not local time - add second param local or moment prob has implicit way
export const _getFirstMSInDay = (timeMS) => moment(moment(timeMS).format("YYYY-MM-DD 00:00:00.000")).valueOf();

export const _getFirstTimestampInDay = (time, obj) => {
  const startTime = _getFirstMSInDay(time);
  const endTime = startTime + dayInMicroSecs;  
  const sortedActs = _sortByTime(obj);
  const times = Object.keys(sortedActs);
  let firstAct, i = 0;
  // loop for performance
  while(!firstAct || i <= times.length) {
    const actTime = times[i];
    if (actTime > startTime && actTime < endTime) {
      firstAct = {[actTime]: obj[actTime]};
      break;
    }
    i++
  }
  return firstAct;
}

export const _filterObjByDay = (time, obj) => {
  const startTime = _getFirstMSInDay(time);
  const endTime = startTime + dayInMicroSecs;  
  _filterObjBetweenTimes(startTime, endTime, obj);
};

export const _filterObjBetweenTimes = (startTime, endTime, obj) => 
  Object.keys(obj).filter((time) => (time > startTime && time < endTime))
    .reduce((timeline, time) => ({...timeline, [time]: obj[time]}), {});

export const _findLastTime = (data) => Object.keys(_sortByTime(data))[0];
