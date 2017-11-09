import {
  UPDATE_STATS,
  SET_ACTIVE_ACTIVITY,
  SET_DISPLAY_STATS,
  UPDATE_LOCAL_STATS,
  SWITCH_LOCAL_GAME_MODE
} from '@actions/actionNames';

/* Mock data for testing and dev
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
*/ 
const INITIAL_STATE = {
  activeStats: {},
  lastLiveStats: {},
  localStats: {},
};

/* TODO 

*/

export default (state = INITIAL_STATE, {type, payload}) => {
  const lastStat = state[Object.keys(state)[Object.keys(state).length - 1]]
  switch(type){
    case UPDATE_STATS: {
      return {...state, ...payload, lastLiveStats: payload};
    }
    case SET_ACTIVE_ACTIVITY: {
      return {...state, activeStats: state[payload]};
    }
    case SET_DISPLAY_STATS: {
      return {...state, activeStats: payload}; //does not use timestamp because presuably we will show predictive stats.
    }
    case UPDATE_LOCAL_STATS: {
      const newStats = {...state.localStats, ...payload};
      return {...state, activeStats: newStats, localStats: newStats};
    }
    case SWITCH_LOCAL_GAME_MODE: {
      return {...state, activeStats: payloadd.stats};
    }
    default: {
      return state
    };
  }
};

