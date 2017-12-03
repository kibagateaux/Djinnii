import {
  GET_COGNITO_PROFILE,
  SIGN_IN_USER,
  UPDATE_INTEGRATION_REQUEST_IDS
} from '@actions/actionNames';

const INITIAL_STATE = {
  username: null,
  tokens: {},
  requestIds: {}
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case GET_COGNITO_PROFILE:
      return {...state, cognitoProfile: {...payload}};
    case SIGN_IN_USER: 
      return {...state}
    case UPDATE_INTEGRATION_REQUEST_IDS:
      return {...state, requestIds: payload};
    default: return state;
  }
};
