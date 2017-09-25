import {SWITCH_LOCAL_GAME_MODE} from '@actions/actionNames';

export const switchLocalGameMode = (bool) => ({
  type: SWITCH_LOCAL_GAME_MODE,
  payload: bool
})