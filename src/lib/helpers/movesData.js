import {
  _formatToUnix,
  _durationUnix,
  _getTimesInUnix,
  _sortByTime
} from '@lib/helpers/time';

export const normalizeStorylineData = (storylines) => {
  return normalizedData(storylines);
  
}


const normalizedData = (stories) => {
  // should take all day segments and return flat object
  return stories.map((day) => {
    const normSeg = day.segments.map(seg => {
      const {startTime, endTime, type} = seg;
      const segmentTime = _getTimesInUnix(startTime, endTime);
      const activities = normalizeActivities(seg.activities);
      segmentActivity = activities.length > 0 ? activities[0].activity : 'idl';
      const meta = {type:seg.type, ...segmentTime, activity: segmentActivity};
      const normData = {
        meta,
        activities
      }
      return seg.type === 'place' ? {...seg.place,  ...normData} : normData;
    });
    day.segments = normSeg;
    return {...day, segments: normSeg};
  });
}
  

const normalizeActivities = (acts) => {
  return acts ? acts.map(act => {
    const time = _getTimesInUnix(act.startTime, act.endTime);
    const normAct = {
      ...act,
      ...time,
    }
    return normAct;
  }) : [];
}

const addFillerSpace = (activityList) => {
  let completeList = {}
  Object.keys(activityList).reduce((last, next) => {
    const lastAct = activityList[last]; const nextAct = activityList[next];
    const endTime = lastAct.endTime || lastAct.meta.endTime;
    const startTime = nextAct.startTime || nextAct.meta.startTime;

    (endTime !== startTime + 1)
      ? completeList[endTime + 1] = {
          startTime: endTime + 1,
          endTime: startTime - 1,
          duration: startTime - endTime,
          activity: 'idl',
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

