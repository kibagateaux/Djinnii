import {
  SWITCH_LOCAL_GAME_MODE
} from '@actions/actionNames';


INITIAL_STATE = {
  localMode: true  
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch(type) {
    case SWITCH_LOCAL_GAME_MODE: {
      return {...state, localMode: !state.localMode}
    }
    default: {
      return {...state}
    }
  }
}