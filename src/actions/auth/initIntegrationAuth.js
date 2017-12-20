import {AsyncStorage, Linking} from 'react-native';
import axios from 'axios';
import uuid from 'uuid';
import {updateIntegrationRequestIds} from '@actions/auth';

import {INTEGRATION_REQUESTS, USER_PROFILE} from '@constants/asyncStorage';
import {integrationAuthCalls} from '@constants/integrations';

export const initIntegrationAuth = (serviceName) => async (dispatch) => {
  const user = JSON.parse(await AsyncStorage.getItem(USER_PROFILE));
  console.log('init OAuth', serviceName, user);
  if(integrationAuthCalls[serviceName] && user) {
    const requestId = uuid.v4();
    const integrationStorage = await AsyncStorage.getItem(INTEGRATION_REQUESTS);
    const requestIds = integrationStorage ? JSON.parse(integrationStorage) : {};
    const updatedRequstIds = {...requestIds, [serviceName]: requestId};
    console.log('integration storage', serviceName, JSON.stringify(updatedRequstIds));
    AsyncStorage.setItem(INTEGRATION_REQUESTS, JSON.stringify(updatedRequstIds));
    dispatch(updateIntegrationRequestIds(updatedRequstIds));
    const authUrl = integrationAuthCalls[serviceName]; // authUrl should always be a Lambda call
    const authUrlWithParams = authUrl  + `&state=${'requestId='+requestId+'+userId='+user.username}`;
    console.log('auth url with params', authUrlWithParams);
    const canOpen = await Linking.canOpenURL(authUrlWithParams)  // axios.get then open response link
    const response = canOpen ? 
      Linking.openURL(authUrlWithParams)
      : await axios.get(authUrlWithParams);
    // if !response then link opened else open response.data.url
  }
};