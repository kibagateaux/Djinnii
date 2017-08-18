import {_formatToUnix} from '@lib/helpers/time';

export const normalizeStorylineData = (storylines) => {
  return createActivitiesList(storylines);
}


const normalizedData = (stories) => {
  // should take all day segments and return flat object
  console.log('norm data stories', stories);
  
  const days = stories.map((day) => 
    day.segments.map(seg => {
      return (Array.isArray(seg.activities)) ? 
        [...seg.activities] : seg;
    })
  );

  console.log('nrom dat day', days);
  

  return days.reduce((timeline, day) => {
    const normalizedDay = day.reduce((day, act) => {
      if(!act.activity) act.activity = 'idl';
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
    if(!activity.activity) activity.activity = 'idl';
    activityList[unixStartTime] = activity;
  });
  return activityList;
};
