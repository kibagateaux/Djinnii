import {UPDATE_INTEGRATION_REQUEST_IDS} from '@actions/actionNames';

  // also update db so lambda can send with redirect for verification during branch routing
export const updateIntegrationRequestIds = (requestIdsMap) => ({
  type: UPDATE_INTEGRATION_REQUEST_IDS,
  payload: requestIdsMap
});