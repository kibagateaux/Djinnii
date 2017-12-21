import {UPDATE_LOCAL_STATS} from '../actionNames';
import {_formatToUnix} from '@helpers/time';
import {AsyncStorage} from 'react-native';
import {LOCAL_STATS} from '@constants/asyncStorage';

export const updateLocalStats = (statUpdate = {}) => {
  AsyncStorage.setItem(LOCAL_STATS, JSON.stringify(statUpdate));
  return {
    type: UPDATE_LOCAL_STATS,
    payload: statUpdate
  }
}