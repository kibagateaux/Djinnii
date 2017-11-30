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
          console.log('auth', resource, tokenObj);          
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
      setDisplayStats,
      localStats,
      lastLiveStats,
      localMode,
    } = this.props;
    const lastLocalStats = await getLocalStats();

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


  _renderLocalGame = () => {
    const {
      updateLocalStats,
      localStats,
      trackUserBehaviour,
    } = this.props;

    const onActivityPress = (activity) => {
      userId = '0';
      const eventData = {
        userId,
        event: 'Action Pressed',
        properties: {
          name: activity,
          stats: localStats,
        }
      };
      return () => {
        trackUserBehaviour(eventData);      
        updateLocalStats(localStatsAfterActivity(activity, localStats))
      }
    }
    const actions= [
      {action: 'Run',
      onPress: onActivityPress('run')},
      //  onPress: onPress(''),
      {action: 'Dance',
       onPress: viewLocalStorage},
      {action: 'Sleep',
       icon: "😴💤",
       onPress: onActivityPress('sleep')},
      {action: 'Eat',
       onPress: onActivityPress('eat')}
    ];
    const actionButtons = actions.map(({action, onPress, icon}) => 
      <ActionButton
        key={action}
        style={styles.localActionButtons}
        buttonText={action}
        onPress={onPress}
        primaryColor
        icon={icon}
        Icon={<Image />}
      />)
    
    return (
      <ScrollView horizontal style={styles.localGameContainer}>
        <View style={styles.localActionButtonContainer}>
          {actionButtons}
        </View>
      </ScrollView>
    )
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

