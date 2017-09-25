import {
  UPDATE_LOCAL_GAME_MODE
} from '@actions/actionNames';


INITIAL_STATE = {
  localMode: true  
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch(type) {
    case UPDATE_LOCAL_GAME_MODE: {
      return {...state, localMode: payload ? payload : !state.localMode}
    }
    default: {
      return {...state}
    }
  }
}