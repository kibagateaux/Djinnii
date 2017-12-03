import {
  MOVES_API_KEY,
} from 'react-native-dotenv';

const MOVES_APP = "moves", FACEBOOK = "facebook";

export const integrationServices = {
  [MOVES_APP]: MOVES_APP,
  [FACEBOOK]: FACEBOOK
};

export const integrationAuthCalls = {
  [MOVES_APP]: `https://api.moves-app.com/oauth/v1/authorize?response_type=code&client_id=${MOVES_API_KEY}&scope=activity+location` // pretty sure + iscorrect, isn't a problem once transferred to backend
}