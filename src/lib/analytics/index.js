import {Platform} from 'react-native';
import Analytics from 'analytics-react-native';
import {SEGMENT_IOS_API_KEY} from 'react-native-dotenv';
console.log('plat', Platform);
export const analytics = new Analytics(SEGMENT_IOS_API_KEY);
export const _handleBranchRouting= (params) => {
  console.log('hndl brnch routing', params);
}