import {analytics} from '@lib/analytics';
import {Analyics} from 'aws-amplify-react-native';
import {TRACK_NAVIGATION} from '@actions/actionNames';

export const trackNavigationw = (eventData = {}) => {
  analytics.screen(eventData);
  Analytics.record(eventData.name, eventData.traits);
  return {
    type: TRACK_NAVIGATION,
    payload: eventData
  }
}