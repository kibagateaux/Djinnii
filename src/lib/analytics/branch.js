import branch from 'react-native-branch';
import {trackUserBehaviour, trackNavigation} from '@lib/analytics/';

const defaultBranchObject = {
  title: 'wallo'
}


export const _createBranchUniversalObject = async (name, data) =>
  await branch.createBranchUniversalObject(name, data)


export const _generateShortUrl = async () => {
  const branchObj = await _createBranchUniversalObject('abc', defaultBranchObject)
  return await branchObj.generateShortUrl()
};

export const _handleBranchRouting = ({params, error}) => {
  if (error) {
    console.log('error handling branch rout', error);
  } else {
    console.log('branch rout param', params);
  }
}