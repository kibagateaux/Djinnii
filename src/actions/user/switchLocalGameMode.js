import {SWITCH_LOCAL_GAME_MODE} from '@actions/actionNames';
import {updateLocalGameMode} from '@actions/user';
import {updateLocalStats, setDisplayStats} from '@actions/stats';
import {_findLastTime} from '@helpers/time';
import {AsyncStorage} from 'react-native';
import {LOCAL_STATS} from '@constants/asyncStorage';

export const switchLocalGameMode = (bool) => (
  async (dispatch, getStore) => {
    const {
      stats,
      user: {localMode}
    } = getStore();
    dispatch(updateLocalGameMode(!localMode));
    if(localMode) { // if next mode is not local
      const lastStatTime = _findLastTime(stats);
      dispatch(setDisplayStats(stats[lastStatTime]));
    } else {
      const lastLocalStats = await AsyncStorage.getItem(LOCAL_STATS);
      const parsedStats = JSON.parse(lastLocalStats);
      dispatch(updateLocalStats(parsedStats))
    }


  }
)