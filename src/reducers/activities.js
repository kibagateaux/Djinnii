import movesData from '../lib/movesData';
import {_formatToUnix, normalizeStorylineData} from '@lib/helpers'
import {
  SET_ACTIVE_ACTIVITY
} from '../actions/actionNames';

const INITIAL_STATE = {
  storylines: movesData.storylines,
  activities: normalizeStorylineData(movesData.storylines),
  get activeActivity(){return this.activities[Object.keys(this.activities)[0]]}
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch(type){
    case 'SET_ACTIVE_ACTIVITY': 
      return {...state, activeActivity: payload};

    default: return state;
  }
};


