import {
  GET_COGNITO_PROFILE,
  SIGN_IN_USER
} from '@actions/actionNames';

const INITIAL_STATE = {
  username: '3b844f5f-fccb-4783-b009-82352b782a4c'
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case GET_COGNITO_PROFILE:
      return {...state, cognitoProfile: {...payload}};
    case SIGN_IN_USER: 
      return {...state}
    default: return state;
  }
};
