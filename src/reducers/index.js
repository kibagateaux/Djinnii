import {combineReducers} from 'redux';
import stats from './stats';
import activities from './activities';
import user from './user';
import auth from './auth';
import days from './days';

export default combineReducers({
  auth,
  activities,
  stats,
  user,
  days
});
