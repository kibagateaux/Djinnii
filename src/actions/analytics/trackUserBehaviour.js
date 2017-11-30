
import {analytics} from '@lib/analytics';
import {TRACK_USER_BEHAVIOUR} from '@actions/actionNames';

export const trackUserBehaviour = (eventData) => {
  analytics.track(eventData);
  return {
    type: TRACK_USER_BEHAVIOUR,
    payload: eventData
  }
}