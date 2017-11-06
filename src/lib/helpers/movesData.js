import {
  _formatToUnix,
  _durationUnix,
  _getTimesInUnix,
  _sortByTime
} from '@lib/helpers/time';
import {Linking} from 'react-native';
import {MOVES_API_KEY} from 'react-native-dotenv';



export const movesAuthInitDeepLink =  `moves://app/authorize?client_id=${MOVES_API_KEY}&scope=activity,location`;
export const movesAuthInitHttps = `https://api.moves-app.com/oauth/v1/authorize?response_type=code&client_id=${MOVES_API_KEY}&scope=activity+location`;
const canDeepLink = Linking.canOpenURL('moves://app').then((res) => res);
const _getMovesAuthLink = () => canDeepLink ? movesAuthInitDeepLink : movesAuthInitHttps; // replace null with link to app store
export const movesAuthLink = _getMovesAuthLink();

export const normalizeStorylineData = (stories) => {
  // should take all day segments and return flat object
  return stories.map((day) => {
    const normSeg = day.segments.map(seg => {
      const {startTime, endTime, type} = seg;
      const segmentTime = _getTimesInUnix(startTime, endTime);
      const activities = normalizeActivities(seg.activities, seg);
      segmentActivity = activities.length > 0 ? activities[0].activity : 'idl';
      const meta = {type:seg.type, ...segmentTime, activity: segmentActivity};
      const normData = {
        meta,
        activities
      }
      return seg.type === 'place' ? {...normData, place: seg.place} : normData;
    });
    return {...day, segments: normSeg};
  });
}
  

const normalizeActivities = (acts, seg) => {

  return acts ? acts.map(act => {
    const actTimes = _getTimesInUnix(act.startTime, act.endTime);
    segTimes = _getTimesInUnix(seg.startTime, seg.endTime);
    const normAct = {
      ...act,
      ...actTimes,
      segment: {
        ...segTimes,
        type: seg.type,
        place: seg.place || null
      }
    }
    return normAct;
  }) : [];
}

const addFillerSpace = (activityList) => {
  let completeList = {}
  let place = {};
  Object.keys(activityList).reduce((last, next) => {
    const lastAct = activityList[last]; const nextAct = activityList[next];
    const endTime = lastAct.endTime || lastAct.meta.endTime;
    const startTime = nextAct.startTime || nextAct.meta.startTime;
    console.log('filler place', activityList[next], place);
    if(activityList[next].segment) activityList[next].segment.place ? place = activityList[next].segment.place : place = place;
    (endTime !== startTime + 1)
      ? completeList[endTime + 1] = {
          startTime: endTime + 1, // start right after last act
          endTime: startTime - 1, // end right before next act
          duration: startTime - endTime,
          activity: 'idl',
          place,
          segment: {
            type: 'filler',
            startTime: endTime + 1,
            endTime: startTime - 1
          }
        }
      : null
    return next;
  });
  return completeList
};

export const createActivitiesList = (stories) => {
  // returns object of all the days activities
  // key = unixStartTime, value = activity obj
  let activityList = {};
  stories.map((day) => {
    day.segments.map((seg) => {
      seg.activities.map((act) => {
        const startTime = act.startTime
        activityList[startTime] = act;  
      });
    });
  });
  const fillerActs = addFillerSpace(activityList);
  const organizedCompleteList = _sortByTime({...fillerActs, ...activityList});
  return organizedCompleteList;
  // organized by time? Expression or reality!?!?
};

