import {TOGGLE_LOCAL_GAME_MODE} from '@actions/actionNames';

export const updateLocalGameMode = (bool) => ({
  type: TOGGLE_LOCAL_GAME_MODE,
  payload: bool
});
