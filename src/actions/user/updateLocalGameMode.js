import {toggleLocalGameMode} from '@actions/user';
import {updateLocalStats, setDisplayStats} from '@actions/stats';
import {_findLastTime} from '@helpers/time';
import {AsyncStorage} from 'react-native';
import {LOCAL_STATS} from '@constants/asyncStorage';

export const updateLocalGameMode = () => (
  async (dispatch, getStore) => {
    const {
      stats,
      user: {localMode}
    } = getStore();
    console.log('update game mode', localMode);
    dispatch(toggleLocalGameMode(!localMode));
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