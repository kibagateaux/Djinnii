import {analytics} from '@lib/analytics';
import {IDENTIFY_SEGMENT_USER} from '@actions/actionNames';

export const identifyUser = (userData) => {
  analytics.identify(userData);
  return {
    type: IDENTIFY_SEGMENT_USER,
    payload: userData
  }
}