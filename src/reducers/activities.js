import movesData from '../lib/movesData';
import {_formatToUnix} from '../lib/helpers'
import {
  SET_ACTIVE_ACTIVITY
} from '../actions/actionNames';

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

const INITIAL_STATE = {
  storylines: movesData.storylines,
  activities: createActivitiesList(movesData.storylines),
  get activeActivity(){return this.activities[Object.keys(this.activities)[0]]}
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch(type){
    case 'SET_ACTIVE_ACTIVITY': 
      return {...state, activeActivity: payload};

    default: return state;
  }
};


