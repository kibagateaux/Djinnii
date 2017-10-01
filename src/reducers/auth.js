import {
  SAVE_COGNITO_PROFILE
} from '@actions/actionNames';
const INITIAL_STATE = {
  username: '3b844f5f-fccb-4783-b009-82352b782a4c'
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case SAVE_COGNITO_PROFILE:
      return {...state, ...payload};  
    default: return {...state} ;
  }
};
