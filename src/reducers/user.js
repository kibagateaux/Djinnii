import {
  TOGGLE_LOCAL_GAME_MODE,
  UPDATE_USER,
  SIGN_IN_USER,
  IDENTIFY_ANALYTICS_USER
} from '@actions/actionNames';


INITIAL_STATE = {
  localMode: false,
  user: null,
  userId: null,
  anonymousId: null
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch(type) {
    case TOGGLE_LOCAL_GAME_MODE:
      return {...state, localMode: payload ? payload : !state.localMode}
    case UPDATE_USER: 
      return {...state, ...payload}
    case SIGN_IN_USER:
    // not sure if this is correct if using multiple signup params e.g. username + phone
      return {...state, user: payload, userId: payload.username};
    case IDENTIFY_ANALYTICS_USER: 
      return {
        ...state,
        anonymousId: payload.anonymousId || null,
        userId: payload.userId || null
      };
    default: return state;
  }
}