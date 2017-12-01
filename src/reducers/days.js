import {
  UPDATE_DAYS
} from '@actions/actionNames';

import mockData from '@lib/movesData';

const days = mockData.reduce((list, day) => ({...list, [day.date]: day.summary}), {});
const INITIAL_STATE = {...days}

export default (state = INITIAL_STATE, {type, payload}) => {
  switch(type) {
    case UPDATE_DAYS:
      return {...state, ...payload};
    default: return state;
  }
};
