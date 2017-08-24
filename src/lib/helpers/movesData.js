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


export const createActivitiesList = (stories) => {
  // returns object of all the days activities
  // key = unixStartTime, value = activity obj
  let activityList = {};
  stories.map((day) => {
    return day.segments.map((activity) => {
      const startTime = activity.meta.startTime
      activityList[startTime] = activity;
    })
  });
  return activityList;
};

