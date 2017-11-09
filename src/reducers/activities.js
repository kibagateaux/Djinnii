import {
  SET_ACTIVE_ACTIVITY,
  SET_ACTIVE_SEGMENT,
  UPDATE_ACTIVITIES_LIST
} from '@actions/actionNames';

const INITIAL_STATE = {
  storylines: [],
  activities: {},
  activeActivity: {},
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch(type){
    case SET_ACTIVE_ACTIVITY: 
      return {...state, activeActivity: state.activities[payload]}; // should be state.activities[payload]
    case SET_ACTIVE_SEGMENT:
      return {...state, activeActivity: state.storylines[0].segments[payload]}
    case UPDATE_ACTIVITIES_LIST: 
      return {...state, activities: {...state.activities, ...payload}}
    default: return state;
  }
};


