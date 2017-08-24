import {
  _formatToUnix,
  _durationUnix,
  _getTimesInUnix
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
    (lastAct.endTime !== nextAct.startTime + 1)
      ? completeList[lastAct.endTime + 1] = {
          startTime: lastAct.endTime + 1,
          endTime: nextAct.startTime - 1,
          duration: nextAct.startTime - lastAct.endTime,
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
  
  const l2 = Object.keys(fillerActs).length, l = Object.keys(activityList).length, l3 = Object.keys({...fillerActs, activityList}).length;
  console.log('crt act list', l, l2);
  console.log('filler', fillerActs, activityList);
  
  return {...activityList, ...fillerActs};
};

