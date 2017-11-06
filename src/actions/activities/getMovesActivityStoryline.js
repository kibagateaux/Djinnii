import {AsyncStorage} from 'react-native';
import {TOKEN_STORAGE} from '@constants/asyncStorage';
import {MOVES_API_KEY} from 'react-native-dotenv';
import Moves from 'react-native-moves-api';

export const getMovesActivityStoryline = (dispatch) => {
  AsyncStorage.getItem(TOKEN_STORAGE).then((tokenStore) => {
    const tokens = JSON.parse(tokenStore);
    const {access_token, refresh_token} = tokens.moves
    console.log('get moves timeline', tokens, access_token, MOVES_API_KEY);
    const moves = new Moves({
      client_id: MOVES_API_KEY,
      access_token,
      refresh_token
    });
    moves.get('/user/storyline/daily?pastDays=7&trackPoints=true')
      .then((data) => {
        console.log('post moves get', data);
      })
  })
};