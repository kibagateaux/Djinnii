'use strict'
import moment from 'moment';
const twoDigitChunk = /{d, 2}/;
const _formatToUnix = dateString => moment(dateString).unix('x')
const _durationUnix = (start, end) => ( _formatToUnix(end) - _formatToUnix(start));
export const  _getTimesInUnix = (start, end) => ({
  startTime: _formatToUnix(start),
  endTime:  _formatToUnix(end),
  duration: _durationUnix(start, end)
});
export { _formatToUnix, _durationUnix }