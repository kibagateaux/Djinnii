import {UPDATE_LOCAL_GAME_MODE} from '@actions/actionNames';

export const updateLocalGameMode = (bool) => ({
  type: UPDATE_LOCAL_GAME_MODE,
  payload: bool
});
