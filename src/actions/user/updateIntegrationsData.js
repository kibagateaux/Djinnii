import {AsyncStorage} from 'react-native';
import {COGNITO_ID} from '@constants/asyncStorage';
import axios from 'axios';

export const updateIntegrationsData = async () => {
  const userId = JSON.parse(await AsyncStorage.getItem(COGNITO_ID));
  const data = await axios.get(``)
}