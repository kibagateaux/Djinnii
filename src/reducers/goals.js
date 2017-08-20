import {
  TOGGLE_DAILY_GOALS_DISPLAY
} from '@action/actionNames';

const INITIAL_STATE = {
  displayDailyGoals: false
};

export default (state, {type, payload}) => {
  switch(type) {
    case TOGGLE_DAILY_GOALS_DISPLAY:
      return {...state, displayDailyGoals: payload || !state.displayDailyGoals}
  }
}