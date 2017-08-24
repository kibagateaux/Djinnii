import {SET_ACTIVE_SEGMENT} from '../actionNames';

export const setActiveSegment = ((startTime) => {
  console.log('set act seg act', startTime);
  
  return {
    type: SET_ACTIVE_SEGMENT,
    payload: startTime
  };
});
