import {
  UPDATE_DAYS
} from '@actions/actionNames';

const INITIAL_STATE = {
  days: {}
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch(type) {
    case UPDATE_DAYS:
      return {...state, ...payload};
    default: return state;
  }
};
