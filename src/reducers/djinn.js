import {
  SET_ACTIVE_ACTIVITY
} from '@actions/actionNames';

const INITIAL_STATE = {mood: 'lit'};
export default (state = INITIAL_STATE, {type, payload}) => {
  switch(type){
    default: return state;
  }
};