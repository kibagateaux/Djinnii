// import branch from 'react-native-branch';
import {trackUserBehaviour, trackNavigation} from '@lib/analytics/';

const defaultBranchObject = {
  title: 'wallo'
}


export const _createBranchUniversalObject = (branch) => async (name, data) =>
  await branch.createBranchUniversalObject(name, data)


export const _generateShortUrl = (branch) => async () => {
  const branchObj = await _createBranchUniversalObject('abc', defaultBranchObject)
  return await branchObj.generateShortUrl()
};

export const _handleBranchRouting = (branch) => async ({params, error}) => {
  if (error) {
    console.log('error handling branch rout', error);
  } else {
    if (params['is_first_session']) {
      return 'route'
    }
    if (params['+clicked_branch_link']){
      return 'route'
    }
    const incomingParams = await branch.getFirstReferringParams()
    
    console.log('branch rout param', params, incomingParams);
  }
};
