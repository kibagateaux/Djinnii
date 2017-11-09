import {
  _formatToUnix,
  _durationUnix,
  _getTimesInUnix,
  _sortByTime,
  _getFirstMSInDay
} from '@lib/helpers/time';
import {Linking} from 'react-native';
import {MOVES_API_KEY} from 'react-native-dotenv';

export const movesAuthInitDeepLink =  `moves://app/authorize?client_id=${MOVES_API_KEY}&scope=activity,location`;
export const movesAuthInitHttps = `https://api.moves-app.com/oauth/v1/authorize?response_type=code&client_id=${MOVES_API_KEY}&scope=activity+location`;
const canDeepLink = Linking.canOpenURL('moves://app').then((res) => res);
const _getMovesAuthLink = () => canDeepLink ? movesAuthInitDeepLink : movesAuthInitHttps; // replace null with link to app store
export const movesAuthLink = movesAuthInitHttps;

export const normalizeStorylineData = (stories) =>
// should take all day segments and return flat object
  stories.map((day) => {
    const normSeg = day.segments.map(seg => {
      const {startTime, endTime, type} = seg;
      const segmentTime = _getTimesInUnix(startTime, endTime);
      const activities = normalizeActivities(seg.activities, seg);
      // console.log('norm story', activities);
      segmentActivity = activities.length > 0 ? activities[0].activity : 'idl';
      const meta = {type:seg.type, ...segmentTime, activity: segmentActivity};
      const normData = {
        meta,
        activities
      }
      return seg.type === 'place' ? 
        {...normData, place: {type: seg.place.type, id: seg.place.id, ...seg.place.location}}
        : normData;
    });
    const date = _getFirstMSInDay(_formatToUnix(day.date));
    const lastUpdate = _formatToUnix(day.lastUpdate);
    return {...day, date, lastUpdate, activityGroups: normSeg};
  });
  

const normalizeActivities = (acts, seg) =>
  acts ? acts.map(act => {
    const actTimes = _getTimesInUnix(act.startTime, act.endTime);
    segTimes = _getTimesInUnix(seg.startTime, seg.endTime);
    const normAct = {
      ...act,
      ...actTimes,
      activityGroup: {
        ...segTimes,
        type: seg.type,
        place: seg.place || null
      }
    }
    return normAct;
  }) : [];

const addFillerSpace = (activityList) => {
  let completeList = {}
  const activityTimes = Object.keys(activityList)
  // to make FP make last<Array> and take last[0].time instead
  activityTimes.reduce((last, next) => {
    const endTime = activityList[last.time].endTime;
    const startTime = activityList[next].startTime;

    // if new place update, else use last place
    const place = (activityList[next].activityGroup.place || last.place);
    
    (endTime !== startTime + 1)
      ? completeList[endTime + 1] = {
          startTime: endTime + 1, // start right after last act
          endTime: startTime - 1, // end right before next act
          duration: startTime - endTime,
          activity: 'idl',
          place,
          activityGroup: {
            type: 'filler',
            startTime: endTime + 1,
            endTime: startTime - 1
          }
        }
      : null
    return {time: next, place};
  }, 
  {time: activityTimes[0], place: activityList[activityTimes[0]].activityGroup.place}); // starter obj
  return completeList
};

export const createActivitiesList = (stories) => {
  // returns object of all the days activities
  // key = unixStartTime, value = activity obj
  let activityList = {};
  stories.map((day) => {
    day.activityGroups.map((seg) => {
      seg.activities.map((act) => {
        const startTime = act.startTime
        activityList[startTime] = act;  
      });
    });
  });
  const fillerActs = addFillerSpace(activityList);
  const organizedCompleteList = _sortByTime({...fillerActs, ...activityList});
  // organized by time? Expression or reality!?!?
  return organizedCompleteList;
};

