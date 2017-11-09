import {analytics} from '@lib/analytics';
import {IDENTIFY_SEGMENT_USER} from '@actions/actionNames';
import uuid from 'uuid';

export const identifyUser = (userData) => {
  if(!userData.userId && !userData.anonymousId)
    throw new Error("Must pass object containing userId or anonymousId to identifyUser action");
  analytics.identify(userData);
  return {
    type: IDENTIFY_SEGMENT_USER,
    payload: userData
  };
};