import {Platform} from 'react-native';
import Analytics from 'analytics-react-native';
import {SEGMENT_IOS_API_KEY, SEGMENT_ANDROID_API_KEY} from 'react-native-dotenv';

const SEGMENT_API_KEY = Platform.OS === 'ios' ?
  SEGMENT_IOS_API_KEY : SEGMENT_ANDROID_API_KEY;

export const analytics = new Analytics(SEGMENT_API_KEY);
export const trackUserBehaviour = (eventData) => analytics.track(eventData);
export const trackNavigation = (eventData) => analytics.screen(eventData);