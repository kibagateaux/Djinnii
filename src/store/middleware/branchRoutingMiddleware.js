import {navigateTo} from '@actions/navigation/navigateTo';
import {
  _createBranchUniversalObject,
  _generateShortUrl,
  _handleBranchRouting,
} from '@lib/analytics/branch';

export const branchRoutingMiddleWare = (store) => (next) => (action) => {
  console.log('branch middwer', store, next);
  return next(action);
};