import {
  UPDATE_STATS,
  SET_ACTIVE_ACTIVITY
} from '@actions/actionNames';
import {statsAfterActivity} from '@helpers/stats';
import {activities} from '@constants/movesData';

const INITIAL_STATE = Object.keys(activities).reduce((timeline, key) => {
  const history = Object.keys(timeline);
  const lastInHistory = history[history.length - 1];
  let lastStats = timeline[lastInHistory] || {};

  const stats = activities[key].activities.reduce((statsHistory, act) => { 
    const nextStats = statsAfterActivity(act, lastStats);
    lastStats = nextStats;
    return {...statsHistory, [act.startTime]: nextStats};
  }, {});
  
  return {...timeline, ...stats};
}, {});

/* TODO 
  Build function that will take initial actions and build from all past activities
  Important so those that exercise a lot feel they aren't starting from zero + cool intro to app watching it play out
*/

export default (state = INITIAL_STATE, {type, payload}) => {
  switch(type){
    case UPDATE_STATS: {
      return {...state, ...payload};
    }
      case SET_ACTIVE_ACTIVITY: {
      return {...state, activeStats: state[payload]}; //payload is timestamp // not problem now but what if stats get to 100s?
    } /* 
      Overwrites state completely because this is a snapshot of the person at time of activity
      Will this get troublesome constantly shifting between past, present, and future stats? 
      Can always do an API call or currentStats and activeStats be different reducers
      Current and active sound too similar - diffirentiator? 
      */
    default: {
      return state
    };
  }
};