import {AsyncStorage} from 'react-native';
import {LOCAL_STATS} from '@constants/asyncStorage';
import {GET_LOCAL_STATS} from '@actions/actionNames';
import {updateLocalStats} from '@actions/stats/updateLocalStats';


export const getLocalStats = () => async (dispatch) => {
  const localStats = await AsyncStorage.getItem(LOCAL_STATS);
  const stats = localStats.length > 0 ? JSON.parse(localStats) : {}
  dispatch(updateLocalStats(stats))
};
