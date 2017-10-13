
import {analytics} from '@lib/analytics';
export const trackUserBehaviour = (eventData) => {
  analytics.screen(eventData);
}