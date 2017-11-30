import {
  TOGGLE_LOCAL_GAME_MODE,
  UPDATE_USER,
  SIGN_IN_USER
} from '@actions/actionNames';


INITIAL_STATE = {
  localMode: true,
  user: {userId: "3472418464"},
  userId: "3472418464"
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
    default: return state;
  }
}