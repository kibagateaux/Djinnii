import {AsyncStorage} from 'react-native';
import branch from 'react-native-branch';
import branchRouter from '@actions/navigation/branchRouter';
import {identifyUser} from '@actions/analytics/identifyUser';
import {navigateTo} from '@actions/navigation/navigateTo';
import * as routes from '@lib/constants/routes';

export const handleBranchRouting = ({params, error}) => 
  async (dispatch) => {
    // check if they are logged in, this is key for optimal routing destinations
    // 

    console.log('hndle brnch routing prm,err', params, error);
    if (error) {
      console.log('error handling branch rout', error);
    } else {
      if (params['is_first_session']) {
        // special introduction screen
        return 'home';
      }
      if (params['+clicked_branch_link']){
        // blah
        return 'home';
      }

      // else if not branch link
      const [_, __, service, resource, id] = resources = ((params['+non_branch_link'] && params['+non_branch_link'].split('/')) || []);
      const url = {service, resource, id}
      console.log('url parse', service, id);
      const routeForResource = ((service) => {
        switch(service){
          case 'auth': {
            dispatch(branchRouter.auth(params, url));
          }
        }
      })(service);
      // dispatch(branchRouter.auth(params, url));
      
      const incomingParams = await branch.getFirstReferringParams()
      // navigateTo(routes.HOME, {type: 'reset'});
    }
  };
