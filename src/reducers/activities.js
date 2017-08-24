import {_formatToUnix} from '@lib/helpers/time';
import {storylines, activities} from '@constants/movesData';
import {
  SET_ACTIVE_ACTIVITY,
  SET_ACTIVE_SEGMENT
} from '@actions/actionNames';

const INITIAL_STATE = {
  storylines: storylines,
  activities: activities,
  get activeActivity(){return this.activities[Object.keys(this.activities)[0]]}
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch(type){
    case SET_ACTIVE_ACTIVITY: 
      return {...state, activeActivity: state.activities[payload]}; // should be state.activities[payload]
    case SET_ACTIVE_SEGMENT:
      return {...state, activeActivity: state.storylines[0].segments[payload]}
    default: return state;
  }
};


