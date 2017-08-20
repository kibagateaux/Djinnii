import {_formatToUnix} from '@lib/helpers/time';

export const normalizeStorylineData = (storylines) => {
  return createActivitiesList(storylines);
}


const normalizedData = (stories) => {
  // should take all day segments and return flat object
  const week = stories.map((day) => 
    day.segments.map(seg => {
      return (Array.isArray(seg.activities)) ? 
        [...seg.activities] : seg;
    })
  );

  return week.reduce((timeline, day) => {
    const normalizedDay = day.reduce((day, act) => {
      return Array.isArray(act) ? 
        [...day, ...act] : [...day, act]
      });
    return [...timeline, ...normalizedDay];
  }, {});
  
};

const createActivitiesList = (stories) => {
  // returns object of all the days activities
  // key = unixStartTime, value = activity obj
  const normData = normalizedData(stories);

  let activityList = {};
  normData.forEach((activity) => {
    const unixStartTime = _formatToUnix(activity.startTime);
    if(!activity.activity) activity.activity = 'plc';
    
    // activity.startTime = _formatToUnix(activity.startTime);
    // activity.endTime = _formatToUnix(activity.endTime);
    activityList[unixStartTime] = activity;
  });
  return activityList;
};
