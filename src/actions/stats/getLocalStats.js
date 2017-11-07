import {AsyncStorage} from 'react-native';
import {LOCAL_STATS} from '@constants/asyncStorage';
import {GET_LOCAL_STATS} from '@actions/actionNames';


export const getLocalStats = () => {
  return AsyncStorage.getItem(LOCAL_STATS)
    .then((stats) => ({
      type: GET_LOCAL_STATS,
      payload: stats.length > 0 ? JSON.parse(stats) : {}
    }))
    .catch((err) => {console.log('get local stats er', err); return null;});
};
