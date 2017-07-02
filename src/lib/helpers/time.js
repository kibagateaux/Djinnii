'use strict'
import moment from 'moment';
const twoDigitChunk = /{d, 2}/;
const _formatToUnix = dateString => moment(dateString).unix('x')
const _durationUnix = (start, end) => ( _formatToUnix(end) - _formatToUnix(start));

export { _formatToUnix, _durationUnix }