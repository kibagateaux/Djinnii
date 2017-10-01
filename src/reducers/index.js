import {combineReducers} from 'redux';
import stats from './stats';
import djinn from './djinn';
import activities from './activities';
import user from './user';
import auth from './auth';

export default combineReducers({
  auth,
  djinn,
  activities,
  stats,
  user
});