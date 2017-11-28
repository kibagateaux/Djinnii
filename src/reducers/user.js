import {
  TOGGLE_LOCAL_GAME_MODE,
  UPDATE_USER
} from '@actions/actionNames';


INITIAL_STATE = {
  localMode: true,
  userId: null,
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch(type) {
    case TOGGLE_LOCAL_GAME_MODE:
      return {...state, localMode: payload ? payload : !state.localMode}
    case UPDATE_USER: 
      return {...state, ...payload}
    default:
      return {...state}
  }
}