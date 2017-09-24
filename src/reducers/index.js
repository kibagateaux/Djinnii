import {combineReducers} from 'redux';
import stats from './stats';
import djinn from './djinn';
import activities from './activities';
import user from './user';

export default combineReducers({
  djinn,
  activities,
  stats,
  user
});
