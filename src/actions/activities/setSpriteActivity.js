
import {_formatToUnix} from '@helpers/time';
import {updateStats} from '@actions/stats';
import {setActiveActivity} from '@actions/activities';

export const setSpriteDisplay = (activity, stats, uid = 0, shouldUpdate) => {
  return async (dispatch) => {
    dispatch(setActiveActivity(activity));
    const time = _formatToUnix(activity.startTime);
    // need some way to reconcile if data does not exist on firebase
    // can update firebase everytime if truly pure functions creating stats but obv performance hit
    // must allow changes at some point to incorporate disparate data into singular snapshot sooo...
    dispatch(updateStats(stats, uid));
  }
}
