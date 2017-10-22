import {analytics} from '@lib/analytics';
import {TRACK_NAVIGATION} from '@actions/actionNames';

export const trackUserBehaviour = (eventData) => {
  analytics.screen(eventData);
  return {
    type: TRACK_NAVIGATION,
    payload: eventData
  }
}