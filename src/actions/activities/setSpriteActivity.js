import * as firebase from 'firebase';
import { _formatToUnix } from '@helpers/time';
import { updateStats } from '@actions/stats';
import { setActiveActivity } from '@actions/activities';
import { getStatsAtTime } from '@lib/firebase'

export const setSpriteDisplay = (activity, stats, uid = 0, shouldUpdate) => {
  return async (dispatch) => {
    dispatch(setActiveActivity(activity));
    const time = _formatToUnix(activity.startTime);
    // need some way to reconcile if data does not exist on firebase
    // can update firebase everytime if truly pure functions creating stats but obv performance hit
    // must allow changes at some point to incorporate disparate data into singular snapshot sooo...

    if(statOverride){
      const stats = {[time]: statOverride};
      console.log('set sprt act statOvrde', stats);
      dispatch(updateStats(stats, uid, shouldUpdate));
    } else {
      const statsData = await getStatsAtTime(uid, time);
      console.log('set sprt act frebse statt', statsData.val());
      dispatch(updateStats(statsData.val(), uid, false));
    }
  }
}
