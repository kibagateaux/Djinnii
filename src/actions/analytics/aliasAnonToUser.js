import {analytics} from '@lib/analytics';
import {ALIAS_ANON_TO_USER} from '@actions/actionNames';

export const aliasAnonToUser = (previousId, userId) => {
  analytics.alias({
    previousId,
    userId
  });
  return {
    type: ALIAS_ANON_TO_USER
  };
};
