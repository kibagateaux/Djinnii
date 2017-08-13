export const normalizeStorylineData = (storylines) => {
  return createActivitiesList(stories);
}


const normalizedData = (stories) => {
  // should take all day segments and return flat object
  const days = stories.map((day) => 
    day.segments.map(seg => {
      return (Array.isArray(seg.activities)) ? 
        [...seg.activities] : seg;
    })
  );

  return days.reduce((timeline, day) => {
    const normalizedDay = day.reduce((day, act) => 
      Array.isArray(act) ? 
        [...day, ...act] : [...day, act]);
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
    activityList[unixStartTime] = activity;
  });
  return activityList;
};
