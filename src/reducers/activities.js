import {
  SET_ACTIVE_ACTIVITY,
  SET_ACTIVE_SEGMENT,
  SET_AVATAR_ACTIVITY,
  UPDATE_ACTIVITIES_LIST
} from '@actions/actionNames';

const INITIAL_STATE = {
  storylines: [],
  activities: {},
  activeActivity: {},
  avatarActivity: ''
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch(type){
    case SET_ACTIVE_ACTIVITY: {
      const activeActivity = state.activities[payload];
      console.log('set act', activeActivity);
      return {
        ...state,
        activeActivity,
        avatarActvity: activeActivity.activity
      };
    }
    case SET_ACTIVE_SEGMENT:
      return {
        ...state,
        activeActivity: state.storylines[0].segments[payload]
      };
    case SET_AVATAR_ACTIVITY:
      return {...state, avatarActivity: payload}
    case UPDATE_ACTIVITIES_LIST: 
      return {...state, activities: {...state.activities, ...payload}}
    default: return state;
  }
};


