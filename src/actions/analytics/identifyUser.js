import uuid from 'uuid';
import {analytics} from '@lib/analytics';
import {IDENTIFY_SEGMENT_USER} from '@actions/actionNames';

export const identifyUser = (userData) => {
  if(!userData.userId && !userData.anonymousId)
    throw new Error("Must pass object containing userId or anonymousId to alias user");
  analytics.identify(userData);
  return {
    type: IDENTIFY_SEGMENT_USER,
    payload: userData
  };
};