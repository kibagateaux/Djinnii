import React, {Component} from 'react';
import {ScrollView, View, Image} from 'react-native';
import axios from 'axios';
import branch from 'react-native-branch';
import uuid from 'uuid';

// import {_handleBranchRouting} from '@lib/analytics';

import DailyProfile from '@containers/DailyProfile';
import HomeProfile from '@containers/HomeProfile';
import ActionButton from '@components/common/ActionButton/ActionButton';
import EmptyFiller from '@components/common/EmptyFiller';
import LocalGame from '@containers/LocalGame';

import {getLocalStats, localStatsAfterActivity} from '@helpers/stats';
import {navigateTo} from '@actions/navigation/navigateTo';
import {viewLocalStorage} from '@helpers/asyncStorage';
import {updateStats} from '@actions/stats';

import styles from './styles';
import { updateActivitiesList } from '../../actions/activities/index';

export default class App extends Component {
  constructor(props){
    super(props);
    // branch.subscribe(props.handleBranchRouting);
    this.branchUnsubcription = branch.subscribe(({params, error}) => {
      console.log('branch params err', params, error);
      const url = params['+url'] || params['+non_branch_link'];
      console.log('deepl link url', url);
      if(params['+non_branch_link']) {
        console.log('auth', resource, access_token); 
        const tokenRegex = /.*access_token=(\w*).*refresh_token=(\w*).*/;
        const tokens = tokenRegex.exec(url);
        const access_token = tokens ? tokens[1] : 'a';
        const refresh_token = tokens ? tokens[2] : 'b';    
        const [_, __, service, resource, id] = resources = ((params['+non_branch_link'] && params['+non_branch_link'].split('/')) || []);
        console.log('non branch link', service + '/' + resource + '/' + id);
        if(service === 'auth'){
          const tokenObj = {
            [resource]: {
              access_token,
              refresh_token
            }
          };
          console.log('auth service', resource, tokenObj);          
          props.updateTokens(tokenObj);
        }
      }
    });
    
    const trackingId = props.user.userId ? 
      {userId: props.user.userId} : {anonymousId: uuid.v4()}
    const trackingData = {...trackingId, traits: {...props.user}};

    props.identifyUser(trackingData);
  }

  // initializes UI for selected game mode
  async componentWillMount(e) {
    const {
      updateLocalStats,
      updateActivitiesList,
      setDisplayStats,
      localStats,
      updateDays,
      lastLiveStats,
      localMode,
      user
    } = this.props;
    const lastLocalStats = await getLocalStats();
    
    // refreshes user's cloud data on app load
    // if(user && user.userId) {
    //   const res = await axios.get(`https://og1pdgpgji.execute-api.us-east-1.amazonaws.com/dev/moves/storyline/${user.userId}`);
    //   if(!res.data) {
    //     // handle error for whatevs
    //     console.log("update data failed", res);
    //   } else {
    //     res.data.map((day) => {
    //       console.log('update day', day);
    //       updateActivitiesList(day.activities);
    //       updateDays({[day.date]: day.summary})
    //     })
    //   }
    // }

    // instantiate local stats so not overwritten on first press. 
    updateLocalStats(lastLocalStats);
    localMode ?
      updateLocalStats(lastLocalStats) :
      setDisplayStats(lastLiveStats);
  }

  componentWillUnmount(e) {
    (this.branchUnsubcription && this.branchUnsubcription());    
  }

  _renderDailyProfiles = () => {
    const {storylines, navigateToIntegrations} = this.props
    const profiles = this.props.storylines ? this.props.storylines.map((story,i) =>
      // key=story.date with real data
      <DailyProfile key={i} storyline={story}/>) : 
      <EmptyFiller
        mainText="To train your Jinni connect your favorite activity tracking app"
        mainButtonText="Connect Apps"
        maingButtonFunc={navigateToIntegrations}
      />
    return (
      <ScrollView>
        {profiles}
      </ScrollView>
    );
  }

  _renderLowerPanel = () =>
    this.props.localMode ?
      <LocalGame /> :
      this._renderDailyProfiles();
  
  render() {
    return (
      <View style={styles.container}> 
        <HomeProfile />
        {this._renderLowerPanel()}
      </View>
    )

  }
}

