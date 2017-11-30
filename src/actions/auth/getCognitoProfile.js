import {GET_COGNITO_PROFILE} from '@actions/actionNames';
import {AsyncStorage} from 'react-native';
import {Auth} from 'aws-amplify-react-native';

export const getCognitoProfile = async (user) => {
  const {
    username
    // add other attributes if needed
  } = user ? user : await Auth.currentUser();
  return {
    type: GET_COGNITO_PROFILE,
    payload: {username}
  };
}