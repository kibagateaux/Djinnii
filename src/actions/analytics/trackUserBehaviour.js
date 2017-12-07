
import {analytics} from '@lib/analytics';
import {Analytics} from 'aws-amplify-react-native';
import {TRACK_USER_BEHAVIOUR} from '@actions/actionNames';

export const trackUserBehaviour = (eventData = {}) => {
  analytics.track(eventData);
  Analytics.record(eventData.name, eventData.traits)
  return {
    type: TRACK_USER_BEHAVIOUR,
    payload: eventData
  }
}