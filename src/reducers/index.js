import {combineReducers} from 'redux';
import statsReducer from './stats';
import djinnReducer from './djinn';
import activitiesReducer from './activities';


export default combineReducers({
  djinn: djinnReducer,
  activities: activitiesReducer,
  stats: statsReducer
})