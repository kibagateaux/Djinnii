import {AsyncStorage, Linking} from 'react-native';
import axios from 'axios';
import uuid from 'uuid';
import {updateIntegrationRequestIds} from '@actions/auth';

import {INTEGRATION_REQUESTS} from '@constants/asyncStorage';
import {integrationAuthCalls} from '@constants/integrations';

export const initIntegrationAuth = (serviceName) => async (dispatch) => {
  if(serviceName && integrationAuthCalls[serviceName]) {
    const integrationRequestId = uuid.v4();
    const integrationStorage = await AsyncStorage.getItem(INTEGRATION_REQUESTS);
    const requestIds = integrationStorage ? JSON.parse(integrationStorage) : {};
    const updatedRequstIds = JSON.stringify({...requestIds, [serviceName]: integrationRequestId});
    console.log('integration storage', serviceName, updatedRequstIds);
    AsyncStorage.setItem(INTEGRATION_REQUESTS, updatedRequstIds);
    dispatch(updateIntegrationRequestIds(JSON.parse(updatedRequstIds)));

    const authUrl = integrationAuthCalls[serviceName]; // authUrl should always be a Lambda call
    const canOpen = await Linking.canOpenURL(authUrl)  // axios.get then open response link
    const response = canOpen ? Linking.openURL(authUrl) : await axios.get(authUrl);
    // if !response then link opened else open response.data.url
  }
};