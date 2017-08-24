import {
  UPDATE_STATS,
  SET_ACTIVE_ACTIVITY,
  SET_ACTIVE_SEGMENT
} from '@actions/actionNames';
import {statsAfterActivity} from '@helpers/stats';
import {activities} from '@constants/movesData';
console.log('stat red acts', activities);

const initStats = () => Object.keys(activities)
.reduce((timeline, key) => {
  const history = Object.keys(timeline);
  const lastInHistory = history[history.length - 1];
  const lastStats = timeline[lastInHistory] || {};
  const thisAct = activities[key];
  const thisStats = statsAfterActivity(thisAct, lastStats);
  return {...timeline, [thisAct.startTime]: thisStats};
}, {});

const initialStats = initStats();
const lastStat = initialStats[Object.keys(initialStats)[Object.keys(initialStats).length - 1]]
const INITIAL_STATE = {...initialStats, activeStats: lastStat};

/* TODO 

*/

export default (state = INITIAL_STATE, {type, payload}) => {
  const lastStat = state[Object.keys(state)[Object.keys(state).length - 1]]
  console.log('stat red last', lastStat, payload, type);
  
  switch(type){
    case UPDATE_STATS: {
      return {...state, ...payload};
    }
      case SET_ACTIVE_ACTIVITY: {
      console.log('stat red set act ', payload, state[payload]);
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

