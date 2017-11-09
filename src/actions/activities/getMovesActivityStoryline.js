import {AsyncStorage} from 'react-native';
import {TOKEN_STORAGE, COGNITO_USER_PROFILE} from '@constants/asyncStorage';
import {MOVES_API_KEY} from 'react-native-dotenv';
import Moves from 'react-native-moves-api';
import {normalizeStorylineData, createActivitiesList} from '@lib/helpers/movesData';
import {updateActivitiesList} from '@actions/activities/updateActivitiesList';

export const getMovesActivityStoryline = (dispatch) => {
  // FIXME setup system to check integrations before calling & rendering data
  // dispatch fetch request 
  console.log('get moves data', );
  AsyncStorage.getItem(TOKEN_STORAGE).then((tokenStore) => {
    const tokens = JSON.parse(tokenStore);
    // if(!tokens || !tokens.moves) {
    //   console.log('get moves token fail', );
    //   // dispatch fetch fail
    // } else {
      // const {access_token, refresh_token} = tokens.moves
      // if tokens null pull from dynamo db
      const moves = new Moves({
        client_id: MOVES_API_KEY,
        access_token: "25XjYW8ZFu8bcwG94TG92H8rMo41Hw_Io33avnv3x42WiEg49ZwhH7Cg4kAfz88F",
        refresh_token: "310J20q9q9WdgQz7uRk8vb3mrhUXXkvkx_wn6mqYJ5Drw8Xq5WbS2ygAzGU1jjH4",
        // access_token,
        // refresh_token
      });

      moves.get('/user/storyline/daily?pastDays=7&trackPoints=true')
        .then((response) => {
          const norms = normalizeStorylineData(response.data)
          const newActivities = createActivitiesList(norms);
          // dispatch fetch succeed
          console.log('get moves store', norms);
          dispatch(updateActivitiesList(newActivities));
        })
        .catch((error) => {
          // dispatch fetch faill
        })
    // }
  })
};