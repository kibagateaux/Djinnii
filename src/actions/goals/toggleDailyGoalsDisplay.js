import {
  TOGGLE_DAILY_GOALS_DISPLAY
} from '@actions/actionNames';

export const toggleDailyGoalsDisplay = (bool) => {
  return {
    type: TOGGLE_DAILY_GOALS_DISPLAY,
    payload: bool
  };
};